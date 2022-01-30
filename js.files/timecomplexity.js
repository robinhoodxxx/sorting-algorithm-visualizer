//complexitys
const worst=document.querySelector('.big h4')
const avg=document.querySelector('.avg h4')
const best=document.querySelector('.best h4')
let space=document.querySelector('.space h4')
const algo =document.getElementById('sort')
algo.style.color='#fff'

 let alg=algo.innerHTML

   const bubble=['O(n^2)','O(n^2)','O(n)','O(1)',"BubbleSort",'  ']
   const insertion=['O(n^2)','O(n^2)','O(n)','O(1)',"InsertionSort"]
   const Selection=['O(n^2)','O(n^2)','O(n^2)','O(1)','SelectionSort']
   const merge=['O(n*log(n))','O(n*log(n))','O(n*log(n))','O(n)','MergeSort']
   const quick=['O(n^2)','O(n*log(n))','O(n*log(n))','O(1)','QuickSort']


function insert(name){
   
    worst.innerHTML=name[0];
    avg.innerHTML=name[1];
    best.innerHTML=name[2];
    space.innerHTML=name[3]
    algo.innerHTML=name[4]
   
    

    
   

}

function clear(){
  worst.innerHTML=''
  avg.innerHTML=''
  best.innerHTML=''
  space.innerHTML=''
  algo.innerHTML=''

}





