// import _ from 'lodash';
import "./css/style.css"
document.addEventListener('DOMContentLoaded', ()=>{
    var nav = document.getElementById("myNav"),
    scrollDetector = document.getElementById("scroll-start-detector");
    
    console.log("nav: ", nav);
    console.log("scrollDetector: ", scrollDetector);

    //function handles callback when observer fires "observing/notObserving" events
    function handleIntersection(entriesArray){
        entriesArray.map((entry) => {
            if (entry.isIntersecting) {
                // nav.classList.remove('visible');
                nav.style.padding = "24px 0";

                nav.style.backgroundColor = "rgb(5, 55, 123, 0)";
            } else {
                // nav.classList.add('visible');
                nav.style.padding = "12px 0";

                // nav.style.backgroundColor = "rgb(5, 55, 123, 0.4)";
                nav.style.backgroundColor = "rgb(4, 28, 40, 0.5)";
            }
          });
    }
    //creates new observer with our callback func passed as an argument
    const observer = new IntersectionObserver(handleIntersection);
    
    //starts observing specified element
    observer.observe(scrollDetector);

    let seeMore = document.querySelector(".products-heading__more"),
    moreProductNavs = document.querySelector(".more-product-navs");

    seeMore.addEventListener('click', ()=>{
        seeMore.classList.add('hide');
        moreProductNavs.classList.remove('hide');
    });
    
    let mainSandwich = document.querySelector(".main-sandwich"),
    mainMenu = document.querySelector(".main-menu"),
    sandwichLine = document.querySelector(".sandwich-line"),
    sandwichX = document.querySelector(".main-sandwich-x");

    mainSandwich.addEventListener('click', ()=>{
        mainMenu.classList.add('menu-active');
        mainSandwich.style.display = 'none';
        sandwichX.style.display = 'block';
    });

    sandwichX.addEventListener('click', ()=>{
        mainMenu.classList.remove('menu-active');
        mainSandwich.style.display = 'block';
        sandwichX.style.display = 'none';
    });






    //whole document height
    // var body = document.body,
    // html = document.documentElement;
    // var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
    //     html.clientHeight, html.scrollHeight, html.offsetHeight );
});

//should stay at the end of the file
if (module.hot){
    module.hot.accept();
}