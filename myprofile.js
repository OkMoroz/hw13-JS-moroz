const windowWidth = window.screen.width;
const windowHeight = window.screen.height;
console.log("Screen width is:", windowWidth);
console.log(`Screen height is:`, windowHeight);
alert(`Screen width is: ${windowWidth}`);
alert(`Screen height is: ${windowHeight}`);

function goBack() {
  window.history.back();
}
