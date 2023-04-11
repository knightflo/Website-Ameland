// get the navigation bar element
const nav = document.querySelector('nav');
// get the initial offset position of the navigation bar
const navOffsetTop = nav.offsetTop;

// add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPos = window.scrollY;

  // if the current scroll position is greater than or equal to the initial offset position of the navigation bar
  if (scrollPos >= navOffsetTop) {
    // add a "fixed" class to the navigation bar
    nav.classList.add('fixed');
  } else {
    // remove the "fixed" class from the navigation bar
    nav.classList.remove('fixed');
  }
});