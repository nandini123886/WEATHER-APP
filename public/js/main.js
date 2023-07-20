const  cityName=document.getElementById('cityName');

const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==""){
             city_name.innerText=`Please write the name before search`;
    }else{
        let url=`https://open-weather13.p.rapidapi.com/city/${cityVal}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '658c693c19msh3e0e3b69516ab23p1d41a6jsn1430720693d1',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
      try{ 
        const response=await fetch(url,options);
        // const result = await response.text();
	    const data=await response.json();
       const arrData=[data];

       city_name.innerText=`${arrData[0].name}`;
         temp.innerText=arrData[0].main.temp;
         
          console.log(data);

         const tempMood=arrData[0].weather[1].main
         if(tempMood=="Clear"){
            temp_status.innerHTML=
            "<i class='fa-solid fa-sun-bright' style='color: #fff942;'></i>";
         }else if(tempMood=="Clouds"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
         }else if(tempMood=="Rain"){
            temp_status.innerHTML=
            "<i class='fa-sharp fa-solid fa-cloud-rain' style='color: #3e77da;'></i>";
         }else{
            
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
             
         }
    }
    catch{
        city_name.innerText=`Please write the name before search`;
    }
    }
    
}
submitBtn.addEventListener('click',getInfo);