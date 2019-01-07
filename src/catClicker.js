//cats names
const cats=["Elle","Lou","Lele","Ed","Row","Koje"];

//loop over all the cats
cats.forEach((cat)=>{
    const listElement = document.createElement("li");
    const name = document.createTextNode(cat);

    listElement.appendChild(name);

    document.querySelector('ul').appendChild(listElement);
});