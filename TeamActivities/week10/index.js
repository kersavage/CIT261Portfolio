import QuakesController from './quakesController.js';


const quakes = new QuakesController('#quakeList');
console.log("insideindex");
quakes.init();

import {
    getJSON, getLocation
} from './utilties.js';


let baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100';


getLocation().then((result)=>{
    console.log(result);
    const lat = result.coords.latitude;
    const long = result.coords.longitude;
});
