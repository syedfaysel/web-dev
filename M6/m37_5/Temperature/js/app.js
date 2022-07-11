const API_KEY = `4b51b9555beef5e2915263779553f7e9`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`;
    console.log(url);

    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayTemperature(data));

}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature =>{
    console.log(temperature)
    setInnerText('city',temperature.name);
    setInnerText('temp',temperature.main.temp);
    setInnerText('weather',temperature.weather[0].main);
    const iconCode = temperature.weather[0].icon;
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weatherIcon');
    imgIcon.setAttribute('src',url);
}