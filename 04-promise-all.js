const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("foo"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1337), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: "Bob" }), 4000);
});

Promise.all([p3, p2, p1]).then((dittovalues) =>
  console.log("values", dittovalues)
); // this is going to be an array with the resolve of each promise


