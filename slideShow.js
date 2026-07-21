// the array of images to use in the slideshow
let arrImages = [
"./images/NewYorkCity images/blueStreet lights.jpg",
"./images/NewYorkCity images/bridgeNightLife.jpg",
"./images/NewYorkCity images/eveningCityView.jpg",
"./images/NewYorkCity images/purpleStreetLights.jpg",
];

// create a variable to keep track of the current selected image
let currImageIndex = 0;

// function to show the selected image
function showImage(index){
    // nickname to the image HTML element
    let imgSlide = document.getElementById("imgSlide");
    // change the image source, using the selected index
    imgSlide.src = arrImages[index];
}

// create the function to go to the previous image
function previousImage(){
    // subract 1 from the current image index tracker
    // currImageIndex-- is equivalent to currImageIndex = currImageIndex - 1
    currImageIndex--;

    // check to see if we went below 0, since we don't an image with that index
    if (currImageIndex < 0){
        // option 1 would be to stay on the first image
        // currImageIndex = 0

        // option 2 is to go to theh last image in the array
        // the length of the array is 4,  my indexes are 0, 1, 2,3 so I would need to subtract 1 so that I stay within the bounds of the array
        currImageIndex = arrImages.length - 1;
    }

    // this will change the image to the previous image
    showImage(currImageIndex);
}

// create the function to go to the next image
function nextImage(){
    // currImageIndex++ is equivalent to currImageIndex = currImageIndex + 1
    currImageIndex++;

    // check to see if the current image index is now too high
    if (currImageIndex == arrImages.length){
        // option 1 would be to stay on the last image in the array
        // currImageIndex--;
        // currImageIndex = arrImage.length - 1;
        // this creates the effect of the image looping back to the first image in the array
        currImageIndex = 0;
    }

            // this will change the image to the previous image
    showImage(currImageIndex);
}

// call the showImage function when the page loads to show the initial image and test that the image loading is working
showImage(0);