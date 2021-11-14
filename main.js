 const sideBar = document.querySelector('.side-bar')
 const wrapper = document.querySelector('.wrapper')
 const close = document.querySelector('.fa-times')
 const hamburger = document.querySelector('.fa-bars')
 const form = document.querySelector('.form');

 const year = document.querySelector('#year')
 const month = document.querySelector('#month');
 const Day = document.querySelector('#day');

 const submit =document.querySelector('.submit')
 // output
 const akanName = document.querySelector('.your-akan-name');
 // checkbox
 const checkboxMale = document.querySelector('.form-check-input-male').value;
 const checkboxFemale = document.querySelector('.form-check-input-female').value

month.addEventListener('change', ()=>{
  if (month.value <= 0){
    month.style.borderColor ="red"
    month.style.borderWidth ="2" + "px"
  }
  else{
    month.style.borderColor = "green"

  }
})

year.addEventListener('change', ()=>{
  if (year.value <= 1600){
    year.style.borderColor ="red"
    year.style.borderWidth ="2" + "px"
  }
  else{
    year.style.borderColor = "green"

  }
})

Day.addEventListener('change', ()=>{
  if (Day.value > 31){
    Day.style.borderColor ="red"
    Day.style.borderWidth ="2" + "px"
  }
  else{
    day.style.borderColor = "green"

  }
})


  // open
  hamburger.addEventListener('click', ()=>{
    if (sideBar.style.display === "none") {
      sideBar.style.display = "block";
      
    } else {
      sideBar.style.display = "none";
    }
    form.style.display="block";
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
 
  if(window.innerWidth <= 768){
    sideBar.style.display="none"
  }
  else{
   sideBar.style.display="block"
  }
 
 
  /**********************************************/
  // An invalid day should be (d<=0) or (d>31)

  // An invalid month should be (m<= 0) or (m > 12)
 
  
 




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
// Getting the input values of month, year and day
submit.addEventListener("click", ()=>{
  const monthBornIn = month.value;
  console.log(monthBornIn);

  const yearBornIn = year.value;
  console.log(yearBornIn);

  const dayBornIn = Day.value;
  console.log(dayBornIn);
  const 
})
// get the last 2 digit of year value

// get the month value

// check where there century lies i.e 1900 - 1999 => 0 , 2000 - 2099 => 6

// formula
// (date + monthCode + last2YearDigit + last2YearDigit/4 + centuryCode) % 7.

let gender = 'female';
let day = 'monday';
switch (gender) {
  case 'female':
    if (day == 'sunday') {
      console.log(`your akan name is : ${femaleNames[0]}`);
    }
    if (day == 'monday') {
      const resultForMon = `${femaleNames[1]}`;
       akanName.innerHTML = resultForMon;
    }
    if (day == 'tuesday') {
      const resultForMon = `${femaleNames[1]}`;
       akanName.innerHTML = resultForMon;    }
    if (day == 'wednesday') {
      const resultForMon = `${femaleNames[1]}`;
       akanName.innerHTML = resultForMon;     }
    if (day == 'thursday') {
      const resultForMon = `${femaleNames[1]}`;
       akanName.innerHTML = resultForMon;    }
    if (day == 'friday') {

      const resultForMon = `${femaleNames[1]}`;
       akanName.innerHTML = resultForMon;    }
    if (day == 'saturday') {
      const resultForMon = `${femaleNames[1]}`;
       akanName.innerHTML = resultForMon;    }
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
  

