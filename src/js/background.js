const images = ['image01.jpg', 'image02.jpg', 'image03.jpg', 'image04.jpg'];

function changeBackgroundImage() {
  let currentIndex = Math.floor(Math.random() * images.length);
  console.log('currentIndex', currentIndex);
  document.body.style.backgroundImage = `url(images/${images[currentIndex]})`;
}

// 첫 번째 이미지를 즉시 설정
changeBackgroundImage();

// 10초 간격으로 배경 이미지 변경
setInterval(changeBackgroundImage, 5000);
