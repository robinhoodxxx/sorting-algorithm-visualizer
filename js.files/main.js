const array_size=document.getElementById('a_size');

const array_speed=document.getElementById('speed');

const main_space=document.getElementById('main');
const speed_projection=document.getElementById('speed_meter')
const newArray=document.getElementById('generateArray');

const text=document.getElementById('hhhh');
const algos_buttons=document.querySelectorAll('#algos button');
const generateArraycolor=document.querySelector('.leftbar button')
const sizeOfArray=document.querySelector('#array_size');
const slider=document.querySelectorAll('.leftbar input')







sizeOfArray.innerText=sizevalue;
var sizevalue= array_size.value;
var speed_value=array_speed.value;
array_size.oninput=function(){
  
}

 const green="green"
 const yellow="rgb(238, 186, 17)"
 const red="rgb(245, 10, 61);"
 const black="black"
 const blue="blue"

var val=[];
var arr=[];

 var divs=[];
  
var buttonborder="border: 2px solid rgb(250, 249, 252)";
var disablecolor=" background-color: rgb(188, 192, 245)"
var buttoncolor=" background-color: rgb(247, 40, 126);"



newArray.addEventListener("click",generateNewArray);
array_size.addEventListener("input",update_array_size);
array_speed.addEventListener("input",algo_speed)

function update_array_size(){
  sizevalue=array_size.value;
  
  sizeOfArray.innerText=sizevalue;
  generateNewArray();
}
window.onload=update_array_size();

function disable_All()
{
    for(var i=0;i<algos_buttons.length;i++)
    {
     
      slider[0].style=disablecolor
      slider[1].style=disablecolor
        generateArraycolor.style="border:none;"+disablecolor
        algos_buttons[i].disabled=true;
        algos_buttons[i].style="border:none;"+ disablecolor
        array_size.disabled=true;
        newArray.disabled=true;
        array_speed.disabled=true;
        
    }
}
var margin_size;
function generateNewArray(){
  text.innerText=""
    main_space.innerHTML="";
   clear()
   
  for(var i=0;i<sizevalue;i++){

   arr[i]=Math.floor((Math.random() *96)+ 3)  ;
   divs[i]=document.createElement("div");
   main_space.appendChild(divs[i]);
   if(sizevalue<=50){
    divs[i].textContent=arr[i];
    
  }
  


   margin_size=0.05
   
   divs[i].style=" margin:0% " + margin_size + "%; background-color:rgb(0,0,0); width:" + (100/(sizevalue-(margin_size*2))) + "%; height:" + (arr[i]) + "%;color:white;"





  }


}

 

  for(var i=0;i<algos_buttons.length;i++){
    algos_buttons[i].addEventListener("click",runalgo);
    
  }




  function runalgo()
{
    disable_All();

    
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":mergesort();
                        break;
        case "Quick":Quick();
                        break;
        
    }
}
  var speed;
  window.onload=algo_speed;
function algo_speed()
{
    var update_speed=Math.floor(parseInt(array_speed.value)/20);
   
    console.log(update_speed);
    speed_projection.innerText=array_speed.value;
    switch(update_speed)
    {
          case 0:speed=5;
              break;
        case 1: speed=20;
                break;
        case 2: speed=100;
                break;
        case 3: speed=500;
                break;
        case 4: speed=2000;
                break;
        case 5:speed=5000;
               break;
       default: speed=10000;
                break;
                
      
               
    }
    
    delay_time=10000/(Math.floor(sizevalue/10)*speed);        
}

var delay_time;        
var c_delay=0;
 

function div_update(divcontent,height,color)
{
    window.setTimeout(function(){
      if(sizevalue<=50)
      divcontent.innerHTML=height;
        divcontent.style=" margin:0% " + margin_size + "%; width:" + (100/sizevalue-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";color:white;";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algos_buttons.length;i++)
        {
          slider[0].style="background-color: none"
      slider[1].style="background-color: none"
         generateArraycolor.style="background-color: none"
          algos_buttons[i].disabled=false;
          algos_buttons[i].style=" background-color: none"
          array_size.disabled=false;
          newArray.disabled=false;
          array_speed.disabled=false;
          
        }
    },c_delay+=delay_time);
}








