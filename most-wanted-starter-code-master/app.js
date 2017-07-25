/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      searchByName(people);
    break;

    case 'no':
      searchByTrait(people);
    
    break;
    app(people); // restart app
    break;

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
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default: "Go back to Main Menu"
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
 var firstName = promptFor("What is the person's first name?", chars);
 var lastName = promptFor("What is the person's last name?", chars);
for(var i = 0; i < people.length; i++){
  if(firstName === people[i].firstName && lastName === people.[i].lastName){
    displayPerson(people[i])
  }
   else{

    alert("could not find individual")
   }
}
//This may continue to loop over and over and will not have and end, could be bronken witb a break.
 // firstName = data.data.length.firstName;  
 // lastName = data.[data.length].lastName;

 //iterate over people array of objects and look where firstname === people[2].firstname
 //if there's a match, then return that person
}
function searchByTrait(people){
var gender = promptFor("What is the person's gender?", chars);
var dob =  promptFor("what is the person's dob?"), chars;
var height =  promptFor("what is the person's height?"), chars;
var weight =  promptFor("what is the person's weight?"), chars;
var eyeColor =  promptFor("what is the person's eyeColor?"), chars;
var occupation =  promptFor("what is the person's occupation?"), chars;
gender.map(function gender{[people.length]
  return gender;
  });
dob.map(function dob{[people.length]
  return dob;
  });
height.map(function height{[people.length]
  return height;
  });
weight.map(function weight{[people.length]}
  return weight;
  });
eyeColor.map(function eyeColor{[people.length]
 return eyeColor;
 });
occupation.map(function occupation{[people.length]
  return occupation;
 });

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
 personInfo += "gender:" + persons.gender + "\n";
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
