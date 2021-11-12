const sideBar = document.querySelector('.side-bar')
const close = document.querySelector('.fa-times')
const hamburger = document.querySelector('.fa-bars').addEventListener('click', ()=>{
  // open
  if (sideBar.style.display === "none") {
    sideBar.style.display = "block";
    
  } else {
    sideBar.style.display = "none";
  }
  
  
})
// close
close.addEventListener('click', ()=>{
  if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
    
  } else {
    sideBar.style.display = "block";
  }
  
})

// WORKING 
// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// where;
//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month 

//  mod - is the modulus function ( % )

// let century;
// let yearLastTwodigit;
// let month;
// let Day;

const dayOfWeek = [century, yearLastTwodigit, month, Day]

