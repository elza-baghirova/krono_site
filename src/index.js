// import _ from 'lodash';
import "./css/style.css"
document.addEventListener('DOMContentLoaded', () => {
    var nav = document.getElementById("myNav"),
        scrollDetector = document.getElementById("scroll-start-detector");

    console.log("nav: ", nav);
    console.log("scrollDetector: ", scrollDetector);

    //function handles callback when observer fires "observing/notObserving" events
    function handleIntersection(entriesArray) {
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

    seeMore.addEventListener('click', () => {
        seeMore.classList.add('hide');
        moreProductNavs.classList.remove('hide');
    });

    let mainSandwich = document.querySelector(".main-sandwich"),
        mainMenu = document.querySelector(".main-menu"),
        sandwichLine = document.querySelector(".sandwich-line"),
        sandwichX = document.querySelector(".main-sandwich-x");

    mainSandwich.addEventListener('click', () => {
        mainMenu.classList.add('menu-active');
        mainSandwich.style.display = 'none';
        sandwichX.style.display = 'block';
    });

    sandwichX.addEventListener('click', () => {
        mainMenu.classList.remove('menu-active');
        mainSandwich.style.display = 'block';
        sandwichX.style.display = 'none';
    });


    let gallerySortingNames = document.querySelectorAll(".gallery-sorting__name"),
        allItems = document.querySelectorAll(".product-card__size__sm");

        function showHideAll(command) {
        if (command === "show") {
            allItems.forEach( (item) => {
                item.style.display = "block";
                 setTimeout(function () {
                    item.classList.remove("gallery-hide")
                }, 10);
            });
            console.log("show all completed");

        }
        else if (command === "hide") {
            allItems.forEach(async (item) => {
                item.classList.add("gallery-hide")
            });
             setTimeout(function () {
                allItems.forEach((item) => { item.style.display = "none" });
            }, 500);
            console.log("hide all completed");
        }
    }

    function gallerySorting() {
        gallerySortingNames.forEach((element, i) => {
            element.addEventListener("click", async () => {
                if (element.dataset.name === "js-hamisi") {
                    showHideAll("hide");

                    await setTimeout(function () {
                        showHideAll("show");
                    }, 500);
                }
                else {
                    showHideAll("hide");

                    let sorted = document.querySelectorAll("." + element.dataset.name);

                    await setTimeout(function () {
                        sorted.forEach((item) => {
                            item.style.display = "block"
                            setTimeout(function () {
                                item.classList.remove("gallery-hide")
                            }, 10);
                        });
                    }, 500);

                }
            });

        });
    }

    gallerySorting();

});

//should stay at the end of the file
if (module.hot) {
    module.hot.accept();
}