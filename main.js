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



  // open
  hamburger.addEventListener('click', ()=>{
    if (sideBar.style.display === "none") {
      sideBar.style.display = "block";
      
    } else {
      sideBar.style.display = "none";
    }
    form.style.display="none";
  })
  /**********************************************/
 
  // close
  close.addEventListener('click', ()=>{
    if (sideBar.style.display === "block") {
      sideBar.style.display = "none";
      
    } else {
      sideBar.style.display = "block";
    }
    form.style.display="block";
  })
 
  if(window.innerWidth <= 450){
    sideBar.style.display="none"
  }
  else{
   sideBar.style.display="block"
  }
 
 
  /**********************************************/
 
 



 DayOfTheWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

 const maleNames = [
  'Kwasi',
  'Kwadwo',
  'Kwabena',
  'Kwaku',
  'Yaw',
  'Kofi',
  'Kwame',
];
const femaleNames = [
  'Akosua',
  'Adwoa',
  'Abenaa',
  'Akua',
  ' Yaa',
  'Afua',
  'Ama',
];

let gender = 'female';
let day = 'monday';
switch (gender) {
  case 'female':
    if (day == 'sunday') {
      console.log(`day: ${day} => name: ${femaleNames[0]}`);
    }
    if (day == 'monday') {
      console.log(`day: ${day} => name: ${femaleNames[0]}`);
    }
    if (day == 'tuesday') {
      console.log(`day: ${day} => name: ${femaleNames[0]}`);
    }
    if (day == 'wednesday') {
      console.log(`day: ${day} => name: ${femaleNames[0]}`);
    }
    if (day == 'thursday') {
      console.log(`day: ${day} => name: ${femaleNames[0]}`);
    }
    if (day == 'friday') {
      console.log(`day: ${day} => name: ${femaleNames[0]}`);
    }
    if (day == 'saturday') {
      console.log(`day: ${day} => name: ${femaleNames[0]}`);
    }
    break;

  case 'male':
    if ('sunday') {
      console.log(`day: ${day} => name: ${maleNames[0]}`);
    }
    if (day == 'monday') {
      console.log(`day: ${day} => name: ${maleNames[0]}`);
    }
    if (day == 'tuesday') {
      console.log(`day: ${day} => name: ${maleNames[0]}`);
    }
    if (day == 'wednesday') {
      console.log(`day: ${day} => name: ${maleNames[0]}`);
    }
    if (day == 'thursday') {
      console.log(`day: ${day} => name: ${maleNames[0]}`);
    }
    if (day == 'friday') {
      console.log(`day: ${day} => name: ${maleNames[0]}`);
    }
    if (day == 'saturday') {
      console.log(`day: ${day} => name: ${maleNames[0]}`);
    }
    break;
  default:
}
  

