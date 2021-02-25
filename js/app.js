/****************** Definition of the Global Variables ******************/
/************************************************************************/
const sectionNames =["About Me", "My Skills","My Projects","Services"];
var numberOfSections=0;
var navElements=[];
var sections=[];
var nav = document.getElementById("navbar__list");

/*************************** Helper Function ****************************/
/************************************************************************/ 

/* (#1) A function to check f the Element is visible or not */
function isVisible(element) {
        var dimentions = element.getBoundingClientRect();
        if(
             dimentions.top >= 0 &&
             dimentions.left >= 0 &&
             dimentions.right <= window.innerWidth &&
            dimentions.bottom <= window.innerHeight)
            {return true;
        }
        else {
             return false;
         }    
}

 /***************************** Main Function ****************************/
/************************************************************************/ 
/* counting the number of sections */

sections =document.querySelectorAll('.mysection');
numberOfSections =sections.length;

/* building the navigation bar dynamically */

for(let i=0;i< numberOfSections;i++){
    navElements[i]= document.createElement("li");
    navElements[i].innerHTML = sectionNames[i];
    nav.appendChild(navElements[i]);
}

/* Scroll to the required section */

for(let i=0;i< numberOfSections;i++){
    sections[i]=document.getElementById("section"+(i+1));
    navElements[i].onclick=function(){
    sections[i].scrollIntoView();}
}

/*activate the section when it's visible*/

for(let i=0;i< numberOfSections;i++){
    window.addEventListener('scroll', function activateSection() {
        if(isVisible(sections[i])){
            for(let j=0;j< numberOfSections;j++){
                sections[j].classList.remove("your-active-class");
                navElements[j].classList.remove("activatedSection");
            }    
        sections[i].classList.add("your-active-class");
        navElements[i].classList.add("activatedSection");
        }

    });
    }


/********************************************************************************************************************/
/********************************************* MY DRAFT *************************************************************/
/********************************************************************************************************************/

/*
function isActive(element) {
    var dimentions = element.getBoundingClientRect();
    var w = dimentions.width;
    var h = dimentions.height;
    if(h>window.screen.height){
        if(
            dimentions.top >= 0 &&
            (dimentions.bottom + (dimentions.bottom *0.5)) <= window.innerHeight &&
            dimentions.left >= 0 &&
            dimentions.right <= window.innerWidth 
             ){
             return true;}
        else {
            return false;
            }     
        }
    else{
        if(
             dimentions.top >= 0 &&
             dimentions.left >= 0 &&
             dimentions.right <= window.innerWidth &&
            dimentions.bottom <= window.innerHeight)
            {return true;
        }

        else {
             return false;
         }    

}
  
}

*/