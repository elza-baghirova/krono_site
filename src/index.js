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
                console.log("not inter");
                nav.style.backgroundColor = "rgb(5, 55, 123, 1)";
            } else {
                // nav.classList.add('visible');
                nav.style.backgroundColor = "rgb(5, 55, 123, 0.5)";
                console.log("inter");
            }
          });
    }
    //creates new observer with our callback func passed as an argument
    const observer = new IntersectionObserver(handleIntersection);
    
    //starts observing specified element
    observer.observe(scrollDetector);

    // var body = document.body,
    // html = document.documentElement;
    // var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
    //     html.clientHeight, html.scrollHeight, html.offsetHeight );
});

//should stay at the end of the file
if (module.hot){
    module.hot.accept();
}