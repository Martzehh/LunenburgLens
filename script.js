const landingPage = document.getElementById("landing-page");

const slideshow = () => {
// Basic function to toggle landing page background images.
    let counter = 0;
    setInterval(function() {
        if (counter === 0) {
            landingPage.classList.replace("banner-one", "banner-two");
            counter++;
        } else if(counter === 1) {
            landingPage.classList.replace("banner-two", "banner-three");
            counter++;
        } else {
            landingPage.classList.replace("banner-three", "banner-one");
            counter = 0;
        }
    }, 2000);
}
slideshow();