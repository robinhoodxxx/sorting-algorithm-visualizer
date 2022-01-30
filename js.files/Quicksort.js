


function Quick(){
    insert(quick)
    c_delay=0
    algos_buttons[4].style=buttoncolor+buttonborder
  sort(0,sizevalue-1)
  enable_buttons();
  
}

function sort(low,high){
    if(low>=high){
        return;
    }

    var start=low;
    var end=high
    var mid=Math.floor(start+(end-start)/2)
    console.log(mid)
    var pivot =arr[mid]
    div_update(divs[mid],arr[mid], red);
  console.log(mid)
    while(start<=end){
        while(arr[start]<pivot){
            div_update(divs[start],arr[start],yellow);
            div_update(divs[start],arr[start],black);
            div_update(divs[start],arr[start], green);
            start++
        }
        while(arr[end]>pivot){
            div_update(divs[end],arr[end],yellow);
            div_update(divs[end],arr[end], black);
            div_update(divs[end],arr[end], green);
            end--
        }
        if(start<=end){
            swap(start,end)
            start++
            end--
        }else{
             div_update(divs[start],arr[start], green);
             div_update(divs[end],arr[end], green);
             div_update(divs[mid],arr[mid], green);
        }
    }
 // text.innerText="Array is already sorted";
    sort(low,end)
    sort(start,high)
   
}
function swap(s,e){
    var temp=arr[s]
    arr[s]=arr[e]
    arr[e]=temp
    div_update(divs[s],arr[s], blue);
    div_update(divs[s],arr[s], yellow);
   div_update(divs[e],arr[e], green);
   div_update(divs[s],arr[s],green );
    
}




