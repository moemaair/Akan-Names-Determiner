 const sideBar = document.querySelector('.side-bar')
 const wrapper = document.querySelector('.wrapper')
 const close = document.querySelector('.fa-times')
 const hamburger = document.querySelector('.fa-bars')
 const form = document.querySelector('.form');
 const year = document.querySelector('#year')
 // output
 const akanName = document.querySelector('.your-akan-name');
 // checkbox
 const checkboxMale = document.querySelector('.form-check-input-male')
 const checkboxFemale = document.querySelector('.form-check-input-female')

 DayOfTheWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7


  let female = [
     "Adwoa",
     "Akosua", 
      "Abenaa", 
      "Akua",
      "Yaa",
      "Afua",
      "Ama"
      ];
  let male = [
    "Kwasi", 
    "Kudwo",
    "Kwabena", 
    "Kwaku",
    "Yaw", 
    "Kofi", 
    "Kwame"
  ]
  

  // open
 hamburger.addEventListener('mouseenter', ()=>{
   if (sideBar.style.display === "none") {
     sideBar.style.display = "block";
     
   } else {
     sideBar.style.display = "none";
   }
 })
 /**********************************************/

 // close
 close.addEventListener('click', ()=>{
   if (sideBar.style.display === "block") {
     sideBar.style.display = "none";
     
   } else {
     sideBar.style.display = "block";
   }
 })


 /**********************************************/

