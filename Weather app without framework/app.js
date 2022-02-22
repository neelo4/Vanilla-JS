//INSTANTIATE THE weather object

const weather = new Weather('San Francisco', 'CA');

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
weather.changeLocation('New York', 'NY');
weather.getWeather()
.then(results => {
    ui.paint(results);
}).catch(err => console.log(err));
}
