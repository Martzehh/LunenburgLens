const landingPage = document.getElementById("landing-page");

// Define a basic function that cyles through image classes defined in the overrides.css document
const slideshow = () => {
// Basic function to toggle landing page background images.
    let counter = 0;
    setInterval(function() {
        if (counter === 0) {
            landingPage.classList.replace("one", "two");
            counter++;
        } else if (counter === 1){
            landingPage.classList.replace("two", "three");
            counter++;
        } else {
            landingPage.classList.replace("three", "one");
            counter = 0;
        }
    }, 5000);
}
slideshow();