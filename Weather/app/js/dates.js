let dayOne = moment().add(1, 'days').calendar();
/* let dayTwo = moment().add(2, 'days').calendar();
let dayThree = moment().add(3, 'days').calendar();
let dayFour = moment().add(4, 'days').calendar(); */
 // Jan 7, 2023
 // Tomorrow
var dayTwo;
var dayThree;
var dayFour;

/* var dayTwoDate = moment([2022, 2 , 20]).format('LL');
console.log(dayTwoDate); */


// console.log(moment(1661834187).fromNow());
// console.log(moment.months());


let daysOfTheWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

//console.log(moment().format('dddd'));
let today  = moment().format('dddd');


for (let index = 0; index < daysOfTheWeek.length; index++) {
    var day = daysOfTheWeek[index];
    
    console.log();
    if(today==day){
        //console.log(index+": index");
        if (index==6) {
            //6 is Saturday
            dayTwo = moment().add(3, 'days').calendar();//monday
            dayThree = moment().add(4, 'days').calendar();//tuesday
            dayFour = moment().add(5, 'days').calendar();//wednesday
        }else if(index==5){
            //5 is Friday
            dayTwo = moment().add(2, 'days').calendar();
            dayThree = moment().add(3, 'days').calendar();
            dayFour = moment().add(4, 'days').calendar();
        }else if(index==4){
            //4 is Thursday
            dayTwo = moment().add(6, 'days').calendar();
            dayThree = moment().add(2, 'days').calendar();
            dayFour = moment().add(3, 'days').calendar();
        }else if(index==3){
            //3 is Wednesday
            dayTwo = moment().add(5, 'days').calendar();
            dayThree = moment().add(6, 'days').calendar();
            dayFour = moment().add(2, 'days').calendar();
        }
        else if(index==2){
            //2 is Tuesday
            dayTwo = moment().add(4, 'days').calendar();
            dayThree = moment().add(5, 'days').calendar();
            dayFour = moment().add(6, 'days').calendar();
        }else if(index==1){
            //1 is Monday
            dayTwo = moment().add(3, 'days').calendar();
            dayThree = moment().add(4, 'days').calendar();
            dayFour = moment().add(5, 'days').calendar();
        }else if(index==0){
            //0 is Sunday
            dayTwo = moment().add(2, 'days').calendar();
            dayThree = moment().add(3, 'days').calendar();
            dayFour = moment().add(4, 'days').calendar();
        }
    }
    
}

let shortDayOne = dayOne.split(" ", 1);
let shortDayTwo = dayTwo.split(" ", 1);
let shortDayThree = dayThree.split(" ", 1);
let shortDayFour = dayFour.split(" ", 1);

let length = 3;
var stringTwo = shortDayTwo[0];
var stringThree = shortDayThree[0];
var stringFour = shortDayFour[0];


let addrDayTwo=stringTwo.substring(0, length);
let addrDayThree=stringThree.substring(0, length);
let addrDayFour=stringFour.substring(0, length);








/* var string = shortTomo[0];
var length = 3;
var trimmedString = string.substring(0, length); */


/* console.log(dayOne);
console.log(shortDayOne[0]);
console.log(addrDayTwo);
console.log(addrDayThree);
console.log(addrDayFour); */

document.getElementById("dayOne").innerHTML = shortDayOne[0];
document.getElementById("dayTwo").innerHTML = addrDayTwo;
document.getElementById("dayThree").innerHTML = addrDayThree;
document.getElementById("dayFour").innerHTML = addrDayFour;

//