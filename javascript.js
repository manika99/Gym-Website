// // Define an array of arrays of image URLs for each services div
// const images = [  ['./img/aerobics/1.avif', './img/aerobics/2.avif', './img/aerobics/3.avif', './img/aerobics/4.avif', './img/aerobics/5.avif'],
//   ['./img/weight training/1.avif', './img/weight training/1.avif', './img/weight training/1.avif', './img/weight training/1.avif', './img/weight training/1.avif'],
//   ['./img/aerobics/1.avif', './img/aerobics/2.avif', './img/aerobics/3.avif', './img/aerobics/4.avif', './img/aerobics/5.avif'],
//   ['./img/aerobics/1.avif', './img/aerobics/2.avif', './img/aerobics/3.avif', './img/aerobics/4.avif', './img/aerobics/5.avif'],
// ];

// // Get all the services div elements
// const servicesDivs = document.querySelectorAll('.services');

// // Define the function to change the background image of a div
// function changeBackgroundImage(div) {
//   // Get the index of the current div from its ID
//   const currentDivIndex = parseInt(div.id) - 1;

//   // Get the array of images for the current div
//   const divImages = images[currentDivIndex % images.length];

//   // Get the index of the next image for the current div
//   const nextImageIndex = parseInt(div.dataset.imageIndex) || 0;

//   // Get the next image URL for the current div
//   const nextImage = divImages[nextImageIndex % divImages.length];

//   // Change the background image of the div element
//   div.style.backgroundImage = `url(${nextImage})`;

//   // Update the dataset image index for the current div
//   div.dataset.imageIndex = nextImageIndex + 1;
// }

// // Define the function to change the background image of all the divs
// function changeAllBackgroundImages() {
//   // Loop through all the services div elements and change their background images
//   for (const div of servicesDivs) {
//     changeBackgroundImage(div);
//   }
// }

// // Call the function to change the background image of all the divs every second
// setInterval(changeAllBackgroundImages, 1000);
