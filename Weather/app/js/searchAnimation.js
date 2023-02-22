let clickToAction = document.getElementById("clickToAction");
let buttonText = document.getElementById("txt");
let searchForm = document.getElementById("form");

function showSearch(){
    gsap.to(".txt",1, {
        // diplay:none,
        duration:5, 
        opacity:0,
        width: 0,
        scale:-5,
        color: "transparent",
        ease: Power2.easeInOut,
    });

    gsap.to(".clickToAction",2, {
        x:210,
        duration:3, 
        ease: Power2.easeInOut,
    });
    buttonText.style.opacity=0;
    buttonText.style.overflow="hidden";
    gsap.to("form",3, {
        // x:-40,
        with:300,
        // dalay:2, 
        ease: Power2.easeInOut,
    });
};

clickToAction.addEventListener('click', function () {
  showSearch();
    setTimeout(function () {
        buttonText.style.display="none";
    }, 1000);
    setTimeout(function () {
        searchForm.style.transform="translateX(-45px)"
        searchForm.style.display="flex";
    }, 1950);

}, false);

