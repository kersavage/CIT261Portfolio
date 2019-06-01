
      // Get your shorts on - this is an array workout!
      // ## Array Cardio Day 1

      // Some data we can work with

      const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];

      const people = [
        'Beck, Glenn',
        'Becker, Carl',
        'Beckett, Samuel',
        'Beddoes, Mick',
        'Beecher, Henry',
        'Beethoven, Ludwig',
        'Begin, Menachem',
        'Belloc, Hilaire',
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William'
      ];

      console.log(inventors);
      //Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      
var filteredArray = [];
      for (i = 0; i < inventors.length; i++) {
        if (inventors[i].year >= 1500 && inventors[i].year < 1600) {
          let foundItem = {
            first: inventors[i].first,
            last: inventors[i].last,
            year: inventors[i].year,
            passed: inventors[i].passed
          };
          filteredArray.push(foundItem);
          console.log(inventors[i]);
        }
      }
      console.log(filteredArray);

      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      var filteredArray02 = [];
      for (i = 0; i < inventors.length; i++) {
          let foundItem = {
            first: inventors[i].first,
            last: inventors[i].last,
          };
          filteredArray02.push(foundItem);
      }
      console.log(filteredArray02);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
     
 inventors.sort(function(a, b){return a.year - b.year});
      console.log(inventors);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      

var totalYears = 0;
      for (i = 0; i < inventors.length; i++) {
        totalYears += inventors[i].passed - inventors[i].year;
      }
      console.log(totalYears);


      // 5. Sort the inventors by years lived
     

 inventors.sort(function(a, b) {
        var yearA = a.passed - a.year, yearB = b.passed - b.year;
        return yearA - yearB;
      });
      console.log(inventors);


      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // goto the link above and open the console. Paste the following two lines in  That will create a list of links in mempry that you can reference through the console. Use that list ot finish the problem.
      
const category = document.querySelector('.mw-category');
        const links = Array.from(category.querySelectorAll('a'));
  const deBelouvards = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));

      // 7. sort Exercise
      // Sort the people alphabetically by last name

function compare(a, b) {
       var splitA = a.split(" ");
       var splitB = b.split(" ");
       var lastA = splitA[splitA.length - 1];
       var lastB = splitB[splitB.length - 1];

       if (lastA < lastB) return -1;    
       if (lastA > lastB) return 1;
       return 0;
     }

       var sorted = people.sort(compare);
     console.log(sorted);

      // 8. Reduce Exercise
      // Sum up the instances of each of these

      const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck'
      ];
    

const total = data.reduce(function(accumulator, currentValue) {
              if (currentValue in accumulator)
                accumulator[currentValue]++;
              else
                accumulator[currentValue] = 1;

              return accumulator;
          }, {});


    // ## Array Cardio Day 2

    const ppl = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
var isNineteen = function(element) {
          return element.year <= 2000;
      };

      console.log(ppl.some(isNineteen));

    // Array.prototype.every() // is everyone 19 or older?
function isEveryoneNineteen(element) {
          return element.year <= 2000;
      }

    console.log(ppl.every(isEveryoneNineteen));


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

var found = comments.find(function(element) {
          return element.id == 823423;
      });
      console.log(found);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

function findMatch(element) {
          return element.id == 823423;
      }

      var indexMatch = comments.findIndex(findMatch);

comments.splice(indexMatch, 1);

      console.table(comments);

 

