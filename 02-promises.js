const directions = [
  "Starting point: Ironhack Madrid",
  "➔ Turn right toward P. de la Chopera",
  "← At the roundabout, take the 1st exit onto P. de la Chopera",
  "* Lune Creperie P. de la Chopera 33, Madrid",
];

function obtainDirections(step) {
  return new Promise(function (fulfilled, broken) {
    setTimeout(() => {
      console.log(directions[step]);

      if (!directions[step]) broken("Instructions not found.");
      else fulfilled();
    }, Math.floor(Math.random() * 3000));
  });
}

obtainDirections(0)
  .then(() => obtainDirections(1)) // here we are telling our code to wait BECAUSE obtainDirections returns a PROMISE
  .then(() => obtainDirections(22)) // when it's rejected it jumps to the catch
  // .catch(() => console.log("catch in the middle")) // this way it's going to run the rest of them
  .then(() => obtainDirections(3))
  .then(() => console.log("You arrived at your destination!"))
  .catch((dittoError) => console.log(dittoError))
  .finally(() => console.log("This is the finally block"));
