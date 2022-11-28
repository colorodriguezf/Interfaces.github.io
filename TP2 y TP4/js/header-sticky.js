var header = document.getElementById('sticky');


onScroll = () => {
  var scrolledPage = Math.round(window.pageYOffset);
  if(scrolledPage > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}


document.addEventListener('scroll', onScroll);