var tomorrowDate = document.getElementById('tomorrowDate');
var tomorrowIcon = document.getElementById('tomorrowIcon');
var tomorrowTemp = document.getElementById('tomorrowTemp');

var dayThreeDate = document.getElementById('dayThreeDate');
var dayThreeIcon = document.getElementById('dayThreeIcon');
var dayThreeTemp = document.getElementById('dayThreeTemp');

var dayFourDate = document.getElementById('dayFourDate');
var dayFourIcon = document.getElementById('dayFourIcon');
var dayFourTemp = document.getElementById('dayFourTemp');

var dayFiveDate = document.getElementById('dayFiveDate');
var dayFiveIcon = document.getElementById('dayFiveIcon');
var dayFiveTemp = document.getElementById('dayFiveTemp');



async function getFiveDaysWeather(latitude, longitude, api_url, key){
    const response= await fetch(api_url+'/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&appid='+key+'&units=metric');
    const data= await response.json();

    var day_two_icon= data.list[12].weather[0].icon;
    var day_two_temp_long= data.list[12].main.temp;
    var day_two_temp_short=Math.ceil(day_two_temp_long);
    var day_two_date_long= data.list[12].dt;
    var day_two_date_short=moment(day_two_date_long*1000).format('ll');

    tomorrowDate.innerHTML=day_two_date_short;
    tomorrowIcon.src='http://openweathermap.org/img/wn/'+day_two_icon+'@2x.png';
    tomorrowTemp.innerHTML=day_two_temp_short;


    //assign coming weather data to variables
    var day_three_icon= data.list[20].weather[0].icon;
    var day_three_temp_long= data.list[20].main.temp;
    var day_three_temp_short=Math.ceil(day_three_temp_long);
    var day_three_date_long= data.list[20].dt;
    var day_three_date_short=moment(day_three_date_long*1000).format('ll');

    dayThreeDate.innerHTML=day_three_date_short;
    dayThreeIcon.src='http://openweathermap.org/img/wn/'+day_three_icon+'@2x.png';
    dayThreeTemp.innerHTML=day_three_temp_short;

    //assign coming weather data to variables
    var day_four_icon= data.list[28].weather[0].icon;
    var day_four_temp_long= data.list[28].main.temp;
    var day_four_temp_short=Math.ceil(day_four_temp_long);
    var day_four_date_long= data.list[28].dt;
    var day_four_date_short=moment(day_four_date_long*1000).format('ll');

    dayFourDate.innerHTML=day_four_date_short;
    dayFourIcon.src='http://openweathermap.org/img/wn/'+day_four_icon+'@2x.png';
    dayFourTemp.innerHTML=day_four_temp_short;

    //assign coming weather data to variables
    var day_five_icon= data.list[36].weather[0].icon;
    var day_five_temp_long= data.list[36].main.temp;
    var day_five_temp_short=Math.ceil(day_five_temp_long);
    var day_five_date_long= data.list[36].dt;
    var day_five_date_short=moment(day_five_date_long*1000).format('ll');
    
    dayFiveDate.innerHTML=day_five_date_short;
    dayFiveIcon.src='http://openweathermap.org/img/wn/'+day_five_icon+'@2x.png';
    dayFiveTemp.innerHTML=day_five_temp_short;


    //console.log(data);
};
