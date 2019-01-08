//cats names Modal
const modal={
    cats:[
        { name:"Elle", counter:0 , url:"assets/cat1.jpg"},
        {name:"Lou",counter:0, url:"assets/cat2.jpg"},
        {name:"Lele",counter:0, url:"assets/cat3.jpg"},
        {name:"Ed",counter:0, url:"assets/cat4.jpg"},
        {name:"Row",counter:0, url:"assets/cat5.jpg"},
        {name:"Koje",counter:0, url:"assets/cat6.jpg"}
        ],
    currentCat:null,
    }


const octopus = {
    init : ()=>{
        view.viewList(modal.cats.map(cat=>cat.name));
        octopus.addEventListenerToImage();
        octopus.addeventListenerToAdmin();
    },

    updateCatAll :(index)=>{
        modal.currentCat=index;
        view.viewArea(modal.cats[index].name,modal.cats[index].counter,modal.cats[index].url);
    },

    updateCatCounter: (index)=>{
        modal.cats[index].counter++;
        view.counterUpdate(modal.cats[index].counter);
    },

    addEventListenerToList:(element,index)=>{
        element.addEventListener('click',()=>octopus.updateCatAll(index));
    } ,

    addEventListenerToImage: ()=>{
        document.querySelector('.cat-area').addEventListener('click',()=>{
            octopus.updateCatCounter(modal.currentCat);
        });
    },

    addeventListenerToAdmin: ()=>{
        document.querySelector('.admin-button').addEventListener('click',octopus.showAdmin);
    },

    showAdmin: ()=>{
        document.querySelector('.admin').style.display="block";
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