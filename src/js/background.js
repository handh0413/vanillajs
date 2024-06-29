const images = ['image01.jpg', 'image02.jpg', 'image03.jpg', 'image04.jpg'];

let currentIndex = 0;

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url(images/${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

// 첫 번째 이미지를 즉시 설정
changeBackgroundImage();

// 10초 간격으로 배경 이미지 변경
setInterval(changeBackgroundImage, 10000);
