const fs = require('fs');

  //CALLBACK HELL!!!:

    fs.readFile('people1.json', function(error, buffer /*blob*/ ) {
      if (error) { throw err; }
      var people1 = JSON.parse(buffer);

      fs.readFile('people2.json', function(error, buffer) {
        if (error) { throw err; }
        var people2 = JSON.parse(buffer),
            people = people1.concat(people2).sort();

        fs.writeFile('peopleComplete.txt', people, function(error) {
          if (error) { throw err; }

          console.log('finished');
        });
      });
    });
