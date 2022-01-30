 
 
 
 
 var bool=false;
 
 function IsSorted(){

  

    
    for(var i=0;i<sizevalue-1;i++){
        if(arr[i]<=arr[i+1]){
            bool=false;
        }else{
            bool=true;
            break;
        }
     }
 return bool;}


function Bubble()
{

    algo.innerHTML=globalThis
    algos_buttons[0].style=buttoncolor+buttonborder
    insert(bubble)
    c_delay=0;
    if(IsSorted()){
   
   text.innerText=""

    for(var i=0;i<sizevalue-1;i++)
    {       
        for(var j=0;j<sizevalue-i-1;j++)
        {
            div_update(divs[j],arr[j],yellow);

            if(arr[j]>arr[j+1])
            {
                div_update(divs[j],arr[j], red);
                div_update(divs[j+1],arr[j+1], red);
     
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                  
                div_update(divs[j],arr[j], red); 
                div_update(divs[j+1],arr[j+1], red); 
            }
            div_update(divs[j],arr[j], black);
        }
        div_update(divs[j],arr[j], green);
   
    }
    div_update(divs[0],arr[0], green);

    


}

else if(IsSorted()){
    
    return
}
else{
    text.innerText="Array is already sorted";
}
//window.setTimeout(text.remove(),25000)
enable_buttons();
}
