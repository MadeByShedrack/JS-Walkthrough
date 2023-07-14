var num1 = 7;
var num2 = 6;

console.log(num1 * num2);

var answer = num1 > num2;
console.log(answer);

//Formula D = (L - S) / L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(
  `The discount percentage is -> ${Math.round(discountPercent)} % off`
);

var result = listingPrice > sellingPrice;
console.log(typeof result);
