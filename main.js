 const sideBar = document.querySelector('.side-bar')
 const wrapper = document.querySelector('.wrapper')
 const close = document.querySelector('.fa-times')
 const hamburger = document.querySelector('.fa-bars')
 const form = document.querySelector('.form');

 const year = document.querySelector('#year');

 const month = document.querySelector('#month');
 const Day = document.querySelector('#day');

 const submit =document.querySelector('.submit')
 // output
 const akanName = document.querySelector('.your-akan-name');
 // checkbox


  /****************MONTH******************************/
month.addEventListener('change', ()=>{
  if (month.value > 12 ||month.value <= 0  ){
    month.style.borderColor ="red"
    month.style.borderWidth ="2" + "px"
    month.style.backgroundColor ="#d8f3dc"
  }
  else{
    month.style.borderColor = "green"
    month.style.backgroundColor ="#d8f3dc"
  }
})
  /****************YEAR******************************/
year.addEventListener('change', ()=>{
  if (year.value <= 1600){
    year.style.borderColor ="red"
    year.style.borderWidth ="2" + "px"
    year.style.backgroundColor ="#d06267"
  }
  else{
    year.style.borderColor = "green"
    year.style.backgroundColor ="#d8f3dc"
  }
})
  /****************DAY******************************/
Day.addEventListener('change', ()=>{
  if (Day.value > 31){
    Day.style.backgroundColor ="#d06267"
    Day.style.borderColor ="red"
    Day.style.borderWidth ="2" + "px"
  }
  else{
    Day.style.backgroundColor ="#d8f3dc"
    Day.style.borderColor = "green"
    Day.style.borderWidth ="2" + "px"
  }
})


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
    // formula
    // const dayoftheweek = dateborn + monthcode + last2digit + last2digit/4 + centurycode
    const yearArr = String(year).split("").map((nuyearm)=>{
      return Number(year)
    })
    const last2digit = `${last2digit[2]}${last2digit[3]}`;
    console.log(last2digit)
    const monthcode={
      January : 0, 
      February : 3 ,
      March : 3,
      April : 6,
      May  : 1,
      June  :4 ,
      July :  6,
      August :  2,
      September :  5,
      October :  0,
      November :  3,
      December :  5
    }
     // century code
  // 1600 - 1699 => 6
  // 1700 - 1799 => 6
  // 1800 - 1899 => 6
  // 1900 - 1999 => 6
  // 2000 - 2099 => 6
 


  // checkbox
  // let checkbox = document.querySelector('input[type="checkbox"]:checked').value

 





  })
 
