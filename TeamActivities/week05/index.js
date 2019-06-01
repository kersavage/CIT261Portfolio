// JavaScript Document
//A javascript index file is supposed to act like a Java interface?
//It creates public interfaces for other modules
import {HikesView} from './HikesController.js';
import {HikeModel} from './HikeModel.js';

const controller = new HikesController();
const viewHikes = controller.showHikeList();
console.log(controller, viewHikes);

export default class hikesCollection {

let hikes1 = new HikeModel('Bechler Falls', 'falls.jpg', 'Image of Bechler Falls', '3 miles', 'Easy', 'Beautiful short hike along the Bechler river to Bechler Falls', 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.');

let hikes2 = new HikeModel('Teton Canyon','falls.jpg','Image of Bechler Falls','3 miles','Easy','Beautiful short (or long) hike through Teton Canyon.','Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.');

let hikes3 = new HikeModel('Denanda Falls','falls.jpg','Image of Bechler Falls','7 miles','Moderate','Beautiful hike through Bechler meadows river to Denanda Falls.','Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.');

/*let hikes4 = new HikeModel('Teton Canyon','falls.jpg','Image of Bechler Falls','3 miles','Easy','Beautiful short (or long) hike through Teton Canyon.','Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.');

let hikes5 = new HikeModel('Teton Canyon','falls.jpg','Image of Bechler Falls','3 miles','Easy','Beautiful short (or long) hike through Teton Canyon.','Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.');

let hikes6 = new HikeModel('Teton Canyon','falls.jpg','Image of Bechler Falls','3 miles','Easy','Beautiful short (or long) hike through Teton Canyon.','Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.');*/


hikesCollection.push(hikes1);
hikesCollection.push(hikes2);

var hikesTable = document.querySelector('ul.hikeStyles');

hikesCollection.forEach(
    hikes => {
        let trHikes = document.createElement("tr");
        let trHikes = document.createElement("td");
        let trHikes = document.createElement("td");
        let trHikes = document.createElement("td");

        tdName.innerText = hikes.name;
        tdImgSrc.innerText = hikes.imgSrc;
        tdImgAlt.innerText = hikes.imgAlt;
        tdDistance.innerText = hikes.distance;
        tdDifficulty.innerText = hikes.difficulty;
        tdDescription.innerText = hikes.description;
        tdDirections.innerText = hikes.directions;

        trHikes.appenchChild(tdName);
        trHikes.appenchChild(tdImgSrc);
        trHikes.appenchChild(tdImgAlt);
        trHikes.appenchChild(tdDistance);
        trHikes.appenchChild(tdDifficulty);
        trHikes.appenchChild(tdDescription);
        trHikes.appenchChild(tdDirections);

        hikesTable.appendChild(trHikes);

       HikesModel.log();

    }
    )
};
