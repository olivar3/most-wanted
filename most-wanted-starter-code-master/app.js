/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    var person = searchByName(people);
    mainMenu(person, people);
    break;
    case 'no':
    // TODO: search by traits
    {break;}
    default:"Search again"
    app(people); // restart app
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    var info = displayPerson(person);
    if (info === true);{
      displayPerson(person);
    }
    // TODO: get person's info
    break;
    case "family":
    if (family === true){
      displayFamily(people);
    }
    break;
    case "descendants":
     
      displayDescendants(people,person);
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    if(quit === true){
      app(people);
    }
    return true; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
var firstName = promptFor("What is the person's first name?", chars);
var lastName = promptFor("What is the person's last name?", chars);
for(var i = 0; i < people.length; i++){
 if(firstName === people[i].firstName && lastName === people[i].lastName)
   return people[i]
 
 else if(firstName !== people[i].firstName && lastName !== people[i].lastName)
   people[i]++;
 else{
  alert("could not find individual")
  app(people)
   break;
    }
  }
}
//This may continue to loop over and over and will not have and end, could be bronken witb a break.
 // firstName = data.data.length.firstName;  
 // lastName = data.[data.length].lastName;

 //iterate over people array of objects and look where firstname === people[2].firstname
 //if there's a match, then return that person



// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}


function displayPerson(person){
 // print all of the information about a person:
 // height, weight, age, name, occupation, eye color.
 var personInfo = "first Name: " + person.firstName + "\n";
 personInfo += "Last Name: " + person.lastName + "\n";
 personInfo += "gender:" + person.gender + "\n";
 personInfo += "height:" + person.height + "\n";
 personInfo += "eyeColor:" + person.eyeColor + "\n";
 personInfo += "weight:" + person.weight + "\n";
 personInfo += "occupation:" + person.occupation + "\n";
 personInfo += "dob:" + person.dob + "\n";
 personInfo += "id:" + person.id + "\n";
 personInfo += "parents:" + person.parents + "\n";
 personInfo += "curentSpouse:" + person.curentSpouse + "\n";
 alert(personInfo);
}

function findDescendants(person, people){
  people.map(function(){
    if (person.id === element.parents){
      return descendants
    }
  });
}
function displayDescendants(people, person){
  for(var i = 0; i < people.length; i++){
   
    if (person.id === people[i].parents){
      people[i].push(descendantsBlood);
      people[i]++
       var descendantsBlood=[];
     return true;
   }
    else if(person.id !== people[i].parents){
      people[i]++;
    
    return true;
    } 
    else{
      return false;
      alert("No Descendants Found!");
    }
  }
}
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
