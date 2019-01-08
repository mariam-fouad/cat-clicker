//cats names Modal
const Modal={
    cats:[
        { name:"Elle", counter:0},
        {name:"Lou",counter:0},
        {name:"Lele",counter:0},
        {name:"Ed",counter:0},
        {name:"Row",counter:0},
        {name:"Koje",counter:0}
        ],
    currentCat:null,
    }


const octopus = {
    init : ()=>{
        view.viewList(Modal.cats.map(cat=>cat.name));
        octopus.addEventListenerToImage();
    },

    updateCatAll :(index)=>{
        Modal.currentCat=index;
        view.viewArea(Modal.cats[index].name,Modal.cats[index].counter,`assets/cat${index+1}.jpg`);
    },

    updateCatCounter: (index)=>{
        Modal.cats[index].counter++;
        view.counterUpdate(Modal.cats[index].counter);
    },

    addEventListenerToList:(element,index)=>{
        element.addEventListener('click',()=>octopus.updateCatAll(index));
    } ,

    addEventListenerToImage: ()=>{
        document.querySelector('.cat-area').addEventListener('click',()=>{
            octopus.updateCatCounter(Modal.currentCat);
        });
    }

}


const view = {
    viewList : (catsNames)=>{
        catsNames.forEach((cat , index)=>{
            const listElement = document.createElement("li");
            const name = document.createTextNode(cat);
            listElement.appendChild(name);

            octopus.addEventListenerToList(listElement,index);

            document.querySelector('ul').appendChild(listElement);
        })
    },

    viewArea: (catName , counter , image)=>{
        document.querySelector('.cat-name').innerHTML=catName;
        document.querySelector('.cat-counter').innerHTML=counter;
        document.querySelector('.cat-area').src=image;
    },

    counterUpdate: (counter)=>{
        document.querySelector('.cat-counter').innerHTML=counter;
    }
}

octopus.init();