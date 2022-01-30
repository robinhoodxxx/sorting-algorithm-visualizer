function Selection_sort(){
    algos_buttons[2].style=buttoncolor+buttonborder
    insert(Selection)
 c_delay=0;
    for(var i=0;i<sizevalue;i++){
        var index=sizevalue-i-1
        div_update(divs[index],arr[index],red)
        for(var j=0;j<sizevalue-i;j++){
            div_update(divs[j],arr[j],yellow)
            if(arr[index]<arr[j]){
                div_update(divs[index],arr[index],"blue")
                div_update(divs[index],arr[index],"rgb(0, 0, 0);")

                index=j;
                div_update(divs[index],arr[index],red)

            }else{
                div_update(divs[j],arr[j],"black;")
 
            }
           
        }
        swap(index,sizevalue-i-1);
        div_update(divs[index],arr[index],"black")
        div_update(divs[sizevalue-i-1],arr[sizevalue-i-1],"green;")
    }
    

  enable_buttons();
}
function swap(first,last){
    var temp=arr[first]
    arr[first]=arr[last]
   
    arr[last]=temp;
    text.innerHTML=""
    div_update(divs[first],arr[first],"blue")
    

   
    div_update(divs[last],arr[last],"green;")
    div_update(divs[first],arr[first],"black")

}
