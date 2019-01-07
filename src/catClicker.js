let counter = 0;

const IncrementCounter = ()=>{
    counter++;
    document.querySelector('.counter').innerHTML=counter;
} 
document.querySelector('.cat').addEventListener('click',IncrementCounter);