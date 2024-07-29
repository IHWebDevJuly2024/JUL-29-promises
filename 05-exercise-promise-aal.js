const instructions = [
  "Place the ingredients in different bowls",
  "Take the apples and peel them",
  "Cut the apples into small pieces",
  "Add the apples to the bowl",
  "Add the sugar",
  "Add the cinnamon",
  "Mix everything together",
  "Use the blender to mix everything",
  "Add the flour",
  "Add the butter",
  "keep mixing",
  "Start the oven to 180 degrees",
  "Put the mix in a baking tray",
  "Put the tray in the oven",
  "Wait 30 minutes",
];

function getInstructions(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!instructions[step]) reject("Instructions not found");
      else resolve(instructions[step]);
    }, Math.floor(Math.random() * 4000));
  });
}

/* const promisesArray = [];

for (let i = 0; i < instructions.length; i++) {
  promisesArray.push(getInstructions(i));
} */

// when we are not going to use the first parameter we can add an underscore (AKA useless ditto 🤣)

const promisesArray = instructions.map((_, index) => getInstructions(index));

Promise.all(promisesArray).then(
  // values is going to be the return of all the promises resolved
  //(values) => console.log(values)

  (values) => values.forEach((eachInstruction) => console.log(eachInstruction)) // eachInstruction is a ditto
);

/*
every promise is going inside the response array (values)
values
[]

after the first promise is resolved:
["first instruction"]

then the second promise
["first instruction", "second instruction"]

... and so on

when all the promises are fulfilled, the array of values contains all the instructions

*/
