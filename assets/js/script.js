function buttonReaction(){
    var addButton = document.querySelector("button:first-of-type");
    var resetButton = document.querySelector("button:nth-of-type(2)");
    var isReset = false;
    addButton.addEventListener("mouseover", function(){
        this.classList.add("buttonHover");
        console.log(isReset);
    })
    addButton.addEventListener("mouseout", function(){
        this.classList.remove("buttonHover");
    })
     resetButton.addEventListener("mouseover", function(){
        this.classList.add("buttonHover");
    })
    resetButton.addEventListener("mouseout", function(){
        this.classList.remove("buttonHover");
    })
    resetButton.addEventListener("click", function(){
        isReset = true;
        setInterval(function(){ resetTodos(isReset)}, 10);   
    })
    addButton.addEventListener("click", function(){
        isReset=false;
        newToDo();
        removeElements();
    })
}
function newToDo(){
    var displayer = document.querySelector("input:first-of-type");
    var addButton = document.querySelector("button:first-of-type");
    var newEl = document.createElement("p");
    newEl.style.margin = "auto";
    var node = document.createTextNode(displayer.value);
    newEl.appendChild(node);
    var container = document.querySelector("#list");
    if(!displayer.value.startsWith(" ") && displayer.value.length !== 0 ){
    container.appendChild(newEl);
    }
    newEl.classList.add("toDo");
    newEl.style.margin="8px";
    displayer.value="";
}
function removeElements(){
    var elements = document.querySelectorAll("p");
    var container = document.querySelector("#list");
    for(var i = 0; i < elements.length; i++){
    elements[i].style.opacity = "1";
    elements[i].addEventListener("click", function(){
        this.classList.add("done");
    });
    elements[i].addEventListener("dblclick", function(){
    this.classList.remove("done");
     var clickedElement = this;
     setTimeout(function(){setInterval(function(){
     clickedElement.style.opacity -= 0.031
     if(clickedElement.style.opacity < 0.0025){
     if(container.contains(clickedElement)){
     container.removeChild(clickedElement);
     clearInterval();
    }
    }   
    }, 30);}, 50);
     
    });
    } 
}
function resetTodos(isReset){
    var toDos = document.querySelectorAll("p");
    var container = document.querySelector("#list");
    var resetButton = document.querySelector("button:nth-of-type(2)");
    if(isReset == true){
    for(var i = 0; i < toDos.length; i++){
    toDos[i].style.opacity -=0.031;
    if(toDos[i].style.opacity < 0.05){
    container.removeChild(toDos[i]);
    }
    }
    }
}   
buttonReaction();

