const data = [
  { name: "User1", age: 25 },
  { name: "User2", age: 30 },
  { name: "User3", age: 35 },
  { name: "User4", age: 40 },
];

function getUser(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(data[index]);
      reject({ status: 404, message: "Unable to get the user, not found" });
    }, Math.floor(Math.random() * 4000));
  });
}

// getUser(1).then((result) => console.log(result));

// now I'm telling it we are going to have asynchronous code inside the function
async function getAllUsers() {
  try {
    const user1 = await getUser(0); // I'm telling my code to wait until the promise is resolved
    // the next line INSIDE THE SCOPE IS WAITING
    const user2 = await getUser(1);
    const user3 = await getUser(2);
    const user4 = await getUser(3);
    console.log(user1, user2, user3, user4);
  } catch (error) {
    console.log(error);
    // we can also: throw new Error(error)
  }
}

console.log("THIS IS OUTSIDE OF THE FUNCTION");

getAllUsers();
