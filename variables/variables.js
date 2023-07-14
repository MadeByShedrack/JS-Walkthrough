var fullName = "Abel Shedrack";
console.log(fullName);

var courseName = "React JS Bootcamp";
console.log(courseName);

var isLoggedIn = true;
console.log(isLoggedIn);

var loggedCount = 34;
console.log(loggedCount);

var paymentMode = "Debit Card";

if (typeof paymentMode === "undefined") {
  console.log("The variable is Not working");
} else {
  console.log("Make your payment");
}

paymentMode = "Credit Card";
console.log(paymentMode);
console.log(typeof paymentMode);
