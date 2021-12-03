// Write a function to convert a name into initials. This function takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let initialName = name.split(" ");
  let firstName = initialName[0];
  let lastName = initialName[1];
  initialName = firstName[0] + "." + lastName[0];
  name = initialName.toUpperCase();
  return name;
}

// abbreveName Function is created and the "name" argument is being passed through
// A new variable called "initialName" is declared in order to represent the split
// ".split" is a string method used to split a string into an array. Where the string will
//be split is determined by the separator "()"
// The split method is being used to split at the "space" between the two names. Once split, the string will be split into an array Ex: John Doe = ["John", "Doe"]
// A new variable called "firstName" is declared to represent the 1st index of the newly created array (initialName). Ex: firstName = John
// A new variable called "lastName" is declared to represent the 2nd index of the newly created array (initialName). Ex: lastName = Doe
// initialName variable is being redefined to represent the first index of "firstName" and "lastName". Both indexes are being concatonated between a period in the middle. Ex: John Doe = J.D
// The "name" variable is being redefined to take the initials from the "initialName" variable and capitolize those letters by using the ".toUpperCase" method. Ex: john doe = J.D
