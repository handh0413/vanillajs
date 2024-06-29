const API_KEY = '26e9229cfd834e5dba82a9e99c79bf61';

const hello = document.getElementById('hello');
hello.innerText = `👋반가워요! ${localStorage.getItem('username')}`;

const weather = document.getElementById('weather');

navigator.geolocation.getCurrentPosition(
  (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const city = data.name;
        const temperature = data.main.temp;
        const state = data.weather[0].main;
        weather.innerText = `${city}, ${temperature}℃ (${state})`;
      });
  },
  () => {
    alert("Can't find location");
  },
);
