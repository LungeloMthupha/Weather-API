//Getting the dom elements
var show_country=document.getElementById("country");
var show_city_name=document.getElementById("city");;

    async function getData(search,key,api_url){
        const response= await fetch(api_url+'/geo/1.0/direct?q='+search+'&appid='+key);
        
        const data= await response.json();

        latitude=data[0].lat;
        longitude=data[0].lon;
        country=data[0].country;
        country_name=data[0].name;

        show_country.innerHTML=country;
        show_city_name.innerHTML=country_name;

        function locateGeo() {
            let geographic = {};
            geographic.latitude = data[0].lat;
            geographic.longitude=data[0].lon;
            geographic.country=data[0].country;
            geographic.country_name=data[0].name;
            saveGeoLocation(geographic);
        };
        
        function saveGeoLocation(geographic) {
            let f = JSON.stringify(geographic);
            window.localStorage.setItem('geographic', f);
        };
         
         search_submit.addEventListener('click', () => {
           if(search.value!=""){
            locateGeo();
           }
         });


        locateGeo();

        var lati=getGeographic().latitude;
        var lon=getGeographic().longitude;

        getCurrentWeather(appkey,lati,lon,api_access_url);
        getFiveDaysWeather(lati,lon,api_access_url,appkey);
    };

    let cachedA = getGeographic();
    if(cachedA) {
        search.value = cachedA.search;
    }
    
    function getGeographic() {
        let f = window.localStorage.getItem('geographic');
        if(f) return JSON.parse(f);
    };
