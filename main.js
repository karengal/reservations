var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

//this is not ignoring case yet
var claimReservation = function () {
  var inputName = prompt('Please enter the name for your reservation');
  var inputLower = inputName.toLowerCase();
  if(!reservations[inputName])
    //if(!reservations[inputLower] && inputName.toLowerCase() != inputLower)
      addReservation(inputName);
  else{
      if (reservations[inputName].claimed)
        alert("reservation already exists under your name");
      else 
        alert("Welcome");    
  } 
}
claimReservation();

 var addReservation = function(nameToAdd) {
  reservations[nameToAdd] = {claimed : true};
  alert("Hello! A reservation was made for you");
 }


