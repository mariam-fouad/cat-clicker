//cats names
const cats=["Elle","Lou","Lele","Ed","Row","Koje"];

const showCat = index=>{
    document.querySelector('.cat-name').innerHTML=cats[index];
    document.querySelector('.cat-counter').innerHTML=0;
    document.querySelector('.cat-area').src=`assets/cat${index+1}.jpg`
}
//loop over all the cats
cats.forEach((cat , index)=>{
    const listElement = document.createElement("li");
    const name = document.createTextNode(cat);

    listElement.appendChild(name);

    listElement.addEventListener('click',()=>{
        showCat(index);
    });
    document.querySelector('ul').appendChild(listElement);
});
