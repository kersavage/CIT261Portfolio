//Called when button is pressed, gets the city selected and passes it to getJSON()
function getData() {
    let city = document.getElementById('selectMetro').value;
    let url = "https://api.openaq.org/v1/latest?country=US&city=" + city;
    var element = document.getElementById('displayAir');
    element.innerHTML = "Loading...";
    getJSON(url);
}

//Makes a request to the OpenAQ API and calls renderAir
function getJSON(url) {
    fetch(url, {
        method: 'GET',
    }).then((response) => response.json())
    .then((next) => renderAir(next))
    .catch(error => console.error('Error:', error));
}

//Parses and displays the air quality for location specified
function renderAir(air) {
    var element = document.getElementById('displayAir');

    let display = '';

    //Parse the data
    for (var i = 0; i < air.results.length; i++) {
        display += '<li>Location: ' + air.results[i].location + '</li>';
        for (var j = 0; j < air.results[i].measurements.length; j++) {
            display += '<li>' + air.results[i].measurements[j].parameter + 
            ': ' + air.results[i].measurements[j].value + air.results[i].measurements[j].unit;
        }
        display += '<br><br>';
    }
    element.innerHTML = display;
}



//An Array of the most popular metros
let metroArray = [
    'Baton Rouge',
    'Riverside-San Bernardino-Ontario',
    'Nashville-Davidson--Murfreesboro',
    'New York-Northern New Jersey-Long Island',
    'San Jose-Sunnyvale-Santa Clara',
    'Phoenix-Mesa-Scottsdale',
    'Boston-Cambridge-Quincy',
    'East Liverpool-Salem',
    'San Francisco-Oakland-Fremont',
    'Birmingham-Hoover',
    'San Diego-Carlsbad-San Marcos',
    'Los Angeles-Long Beach-Santa Ana',
    'Santa Barbara-Santa Maria',
    'Beaumont-Port Arthur',
    'Florence-Muscle Shoals',
    'Orlando-Kissimmee',
    'Allentown-Bethlehem-Easton',
    'Chicago-Naperville-Joliet',
    'Tampa-St. Petersburg-Clearwater',
    'Detroit-Warren-Livonia',
    'Mount Vernon-Anacortes',
    'Dallas-Fort Worth-Arlington',
    'Trenton-Ewing',
    'Houston-Sugar Land-Baytown',
    'Youngstown-Warren-Boardman',
    'Milwaukee-Waukesha-West Allis',
    'Hartford-West Hartford-East Hartford',
    'Salt Lake City',
    'Vallejo-Fairfield'
];

//Fill the select element with the cities from the array
var metroSelect = document.getElementById("selectMetro");
for(var i = 0; i < metroArray.length; i++) {
    var metro = metroArray[i];
    var opt = document.createElement("option");
    opt.textContent = metro;
    opt.value = metro;
    metroSelect.appendChild(opt);
}
