

function Insertion(){
  insert(insertion)
    if(IsSorted){
        algos_buttons[1].style=buttoncolor+buttonborder
 c_delay=0;
    for(var i=0;i<sizevalue-1;i++){
        div_update(divs[i],arr[i],black)
        for(var j=i+1;j>0;j--){
          
            if(arr[j-1]>arr[j]){
                div_update(divs[0],arr[0],green)
                div_update(divs[j],arr[j],yellow)

                swap(j-1,j);
               

            }else{
                div_update(divs[j],arr[j],green)
                break;
            }
            
        }
        div_update(divs[i],arr[i],green)

    }
    div_update(divs[i],arr[i],green)
    
}
    else if(IsSorted()){
    
        return
    }
    else{
        text.innerText="Array is already sorted";
    }

  enable_buttons();
}
function swap(first,last){
    var temp=arr[first];
    arr[first]=arr[last];
    arr[last]=temp;
    div_update(divs[first],arr[first],red)
    div_update(divs[last],arr[last],green)
    div_update(divs[first],arr[first],green)


}