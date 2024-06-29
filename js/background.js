const images = ['image01.jpg', 'image02.jpg', 'image03.jpg', 'image04.jpg'];

function changeBackgroundImage() {
  let currentIndex = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = `url(images/${images[currentIndex]})`;
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 5000);
