const directions = [
  "Starting point: Ironhack Barcelona",
  "↑ Head east on C/ Pamplona toward diagonal",
  "➔ Turn right onto S Barcelona Ave",
  "* Chipotle Mexican Grill 891 S Barcelona Ave, Barcelona",
];

function getDirections(step, callback, errorCallback) {
  setTimeout(() => {
    // this timeout is to mimic the behavior of the server
    console.log(directions[step]);

    if (!directions[step]) errorCallback("Instructions not found.");
    else callback();
  }, Math.floor(Math.random() * 3000));
}

getDirections(0, () => {
  getDirections(1, () => {
    getDirections(2, ()=>{
        getDirections(3, ()=>{
            console.log("END");
        })
    })
  });
});


