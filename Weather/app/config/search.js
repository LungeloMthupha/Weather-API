//getting the dom elements
let search = document.querySelector('#search');
let search_submit = document.querySelector('#search_submit');
let searched_city = document.querySelector('#searched_city');

//getting the searched elements
function handleChange() {
	let form = {};
	form.search = search.value;
	saveForm(form);
};

function saveForm(form) {
	let f = JSON.stringify(form);
	window.localStorage.setItem('form', f);
};
 
 search_submit.addEventListener('click', () => {
   if(search.value!=""){
      handleChange();
   }
 });

// do we have a cached form?
let cached = getForm();
if(cached) {
	search.value = cached.search;

   if(search.value!=""){
      getUserSearch();
      if(getForm()!=""){
         getUserSearch();
         search.value="";
      }
   }
}

function getUserSearch(){
   var searched_data = getForm().search;

   searched_city.innerHTML='"'+searched_data+'"';
   getData(searched_data, appkey, api_access_url);
};

function getForm() {
	let f = window.localStorage.getItem('form');
	if(f) return JSON.parse(f);
};



