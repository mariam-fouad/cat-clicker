let counter1 = 0;
let counter2 = 0;
const catName1 = "Lou";

const catName2 ="elle";

const IncrementCounter = (event)=>{
    if(event.target.classList.contains('cat1-img')){
        counter1++;
        document.querySelector('.cat1-counter').innerHTML=counter1;
    }
    else{
        counter2++;
        document.querySelector('.cat2-counter').innerHTML=counter2;
    }
    
} 
document.querySelector('.cat1-name').innerHTML=catName1;
document.querySelector('.cat2-name').innerHTML=catName2;

document.querySelector('.cat1-img').addEventListener('click',IncrementCounter);
document.querySelector('.cat2-img').addEventListener('click',IncrementCounter);