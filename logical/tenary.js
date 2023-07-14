var authenticated = true;

// if (authenticated) {
//   console.log("Show sign out button");
// } else {
//   console.log("Show login Option");
// }

var validateUser = authenticated ? "Show signout button" : "Show login option";
console.log(`Authentication Status -> ${validateUser}`);

const getFee = (isMember) => {
  return isMember ? "$2.00" : "$10.00";
};

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(1));
