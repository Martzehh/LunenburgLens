const landingPage = document.getElementById("landing-page");

const slideshow = () => {
// Basic function to toggle landing page background images.
    let counter = 0;
    setInterval(function() {
        if (counter === 0) {
            landingPage.classList.toggle("banner-two");
            counter++;
        } else if(counter === 1) {
            landingPage.classList.toggle("banner-three");
            counter++;
        } else {
            counter = 0;
        }
    }, 4000);
}
slideshow();