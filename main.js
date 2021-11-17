 const sideBar = document.querySelector('.side-bar')
 const wrapper = document.querySelector('.wrapper')
 const close = document.querySelector('.fa-times')
 const hamburger = document.querySelector('.fa-bars')
 const form = document.querySelector('.form');
 const submit =document.querySelector('.submit')

 const akanName = document.querySelector('.your-akan-name');
 


  /****************MONTH******************************/
// const month=document.querySelector('#month').addEventListener('change', ()=>{
//   if (month.value > 12 ||month.value <= 0  ){
//     month.style.borderColor ="red"
//     month.style.borderWidth ="2" + "px"
//     month.style.backgroundColor ="#d8f3dc"
//   }
//   else{
//     month.style.borderColor = "green"
//     month.style.backgroundColor ="#d8f3dc"
//   }
// })
//   /****************YEAR******************************/
// const year = document.querySelector('#month').addEventListener('change', ()=>{
//   if (year.value <= 1600){
//     year.style.borderColor ="red"
//     year.style.borderWidth ="2" + "px"
//     year.style.backgroundColor ="#d06267"
//   }
//   else{
//     year.style.borderColor = "green"
//     year.style.backgroundColor ="#d8f3dc"
//   }
// })
//   /****************DAY******************************/
//   const day=document.querySelector('#month').addEventListener('change', ()=>{
//   if (day.value > 31){
//     day.style.backgroundColor ="#d06267"
//     day.style.borderColor ="red"
//     day.style.borderWidth ="2" + "px"
//   }
//   else{
//     Day.style.backgroundColor ="#d8f3dc"
//     Day.style.borderColor = "green"
//     Day.style.borderWidth ="2" + "px"
//   }
// })


    /***************OPEN*******************************/
  // open
  hamburger.addEventListener('click', ()=>{
    if (sideBar.style.display === "none") {
      sideBar.style.display ="block";
      
    } else {
      sideBar.style.display = "none";
    }
    // form.style.display="block";

  })
  /******************CLOSE****************************/
 
  // close
  close.addEventListener('click', ()=>{
    if (sideBar.style.display === "block") {
      sideBar.style.display = "none";
      
    } else {
      sideBar.style.display = "block";
    }
    // form.style.display="block";
  })

  /***************SUBMIT TO RUN APPLICATION*******************************/


  submit.addEventListener('click', ()=>{
   var yearBorn = document.querySelector('#year').value;
   var monthBorn = document.querySelector('#month').value;
   var dayBorn = document.querySelector('#day').value;
   var month = [1,2,3,4,5,6,7,8,9,10,11,12]
   var century = parseInt(yearBorn.slice(0,1));
   var yy=parseInt(yearBorn.slice(2,4));
   
   var monthCode = 0;
  
   if(monthBorn === 1 || monthBorn === 10){
    monthCode = 0
   }
   else if(monthBorn === 5){
     monthCode = 1
   }
   else if(monthBorn === 8){
     monthCode = 2
   }
   else if(monthBorn === 2|| monthBorn === 3|| monthBorn === 11){
     monthCode = 3
   }
   else if(monthBorn === 6){
     monthCode = 4
   }
   else if(monthBorn === 9 ||monthBorn === 12 ){
     monthCode = 5
   }
   else if(monthBorn === 4 || monthBorn === 7){
     monthCode = 6
   }
   else{
     console.log("you dont have a monthCode")
   }

  var centuryCode = 0

  if(century === 19){
    centuryCode =0
  }
  if(century === 18){
    centuryCode =2
  }
  if(century === 17){
    centuryCode =4
  }
  if(century === 20){
    centuryCode =6
  }
 
var weekDayBorn = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var MaleBornName = ["kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi","Kwame" ]
var FemaleBornDay = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama" ]
var gender = document.querySelector('input[type = "checkbox"]:checked').value
var dayofTheWeekBorn = (dayBorn + monthCode + yy + Math.floor(yy/4) + centuryCode ) % 7;
 
if(monthBorn === 2 && yy%4!==0 && dayBorn > 28){
   alert("NOT A LEAP YEAR");
}
else if(monthBorn === 2 && yy%4!==0 && dayBorn > 29){
  alert("ENTER A DAY 1-29");
}
else if(gender == "male"){
  alert("You Were Born on a: " + weekDayBorn[dayofTheWeekBorn] + " Your Akan Name is going to be:  " + MaleBornName[dayofTheWeekBorn]);
}
else if(gender == "female"){
alert("You Were Born on a: " + weekDayBorn[dayofTheWeekBorn] + " Your Akan Name is going to be:  " + FemaleBornDay[dayofTheWeekBorn]);
}

  })
 
