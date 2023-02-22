//get dom element
var main_desc=document.getElementById("main_desc");
var desc=document.getElementById("desc");
var temp = document.getElementById("tempDegit");
var currIcon = document.getElementById("currIcon");
var hum_Unit = document.getElementById("hum_Unit");
var pre_Unit = document.getElementById("pre_Unit");
var clo_Unit = document.getElementById("clo_Unit");
var win_Unit = document.getElementById("win_Unit");
var sunriseTime = document.getElementById("sunriseTime");
var sunsetTime = document.getElementById("sunsetTime");



async function getCurrentWeather(key,latitude,longitude,api_url){
    const response= await fetch(api_url+'/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+key+'&units=metric');

    const data= await response.json();
    current_temp_long= data.main.temp;
    current_temp_short=Math.ceil( current_temp_long);
    current_description =  data.weather[0].description;
    current_main_description =  data.weather[0].main;
    current_icon =  data.weather[0].icon;
    current_humidity =  data.main.humidity;
    current_pressure =  data.main.pressure;
    current_clouds =  data.clouds.all;
    current_wind_speed = data.wind.speed;
    sunrise= data.sys.sunrise;
    sunset= data.sys.sunset;

    main_desc.innerHTML=current_main_description;
    desc.innerHTML=current_description;
    temp.innerHTML=current_temp_short;
    currIcon.src="http://openweathermap.org/img/wn/"+current_icon+"@2x.png";
    hum_Unit.innerHTML=current_humidity;
    pre_Unit.innerHTML=current_pressure;
    clo_Unit.innerHTML=current_clouds;
    win_Unit.innerHTML=current_wind_speed;
    sunriseTime.innerHTML=moment(sunrise*1000).format('LT');
    sunsetTime.innerHTML=moment(sunset*1000).format('LT');


    let unix = 1673147372;
    let date = new Date(unix*1000);

    moment(unix*1000).format('LT'); 

};

