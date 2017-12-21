var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var claimReservation = function (inputName) {
  //var inputName = prompt('Please enter the name for your reservation');

  var person = findPerson(inputName);
  if (person){
    
    if (person.claimed)
      alert("reservation already exists under your name");
    else
      alert("Welcome");
  }

  else
    addReservation(inputName);
  }

 var addReservation = function(nameToAdd) {
  reservations[nameToAdd] = {claimed : true};
  alert("Hello! A reservation was made for you");
 }

 var findPerson = function(nameToFind) {
   //add checking lower case
  if(reservations[nameToFind])
    return reservations[nameToFind];
  else
    for (var key in reservations){
      if (key.toLowerCase() === nameToFind)
        return reservations[key];
    }
    
    return null;
}

claimReservation("Ted");
claimReservation("Bob");
claimReservation("ted");
claimReservation("Karen");
claimReservation("bob");

