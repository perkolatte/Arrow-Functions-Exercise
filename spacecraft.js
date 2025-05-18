/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters
// that print `"Hyperdrive activated!"` to the console.
// Call `activateHyperdrive` to test it.

activateHyperdrive = () => {
  console.log("Hyperdrive activated!");
};
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO:
// Create an arrow function named `scanForLife`
// that implicitly returns `"No lifeforms detected"` without using curly braces.
// Print the result of calling `scanForLife`.

scanForLife = () => "No lifeforms detected";
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates`
// that returns an object with properties `x`, `y`, and `z`, representing coordinates in space.
//  Use implicit return. Print the returned object from `currentCoordinates`.

currentCoordinates = () => ({
  x: 100,
  y: 200,
  z: 300,
});
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
// TODO:
// Inside an object named `spacecraft`,
// create a method named `receiveMessage` using arrow function syntax.
// This method should log `"Message received: "`
// followed by a message it receives as a parameter.
// Directly call `receiveMessage` within `spacecraft` and observe.
// Observe and explain the behavior of `this` in this context as a comment.

const spacecraft = {
  receiveMessage: (message) => {
    console.log(`Message received: ${message}`);
    this.receiveMessage("Hello from Home Base!");
  },
};
spacecraft.receiveMessage("Hello from Home Base!");

/*
 * Observations:
 * TODO: Explain here.
 * The `this` keyword in the context of an arrow function does not refer to the object it is defined in,
 * so it does not have access to the properties of the `spacecraft` object.
 */
