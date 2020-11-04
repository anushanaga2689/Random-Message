// declare a variable to store the messages to be displayed
const SaleMsgconst = [
  [" 10 % ", " 20 % ", " 50 % ", "60 %"],
  ["Mens Clothes", "Shoes", "School Uniforms", "Outdoor Toys", "Stationery"],
  ["S-MART", "LIND-SHOP", "SHOPPERS-SPOT", "DS-MALL", "BIG-SHOP"],
];
//function to generate random number and return a random message
function generateRMsg(arr) {
  let randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
}
//function to display random message to the user
function SalesDisplayMessage(arr1) {
  let greetMessage = ""; //initialize greetMessage to empty string
  for (let i = 0; i < arr1.length; i++) {
    let displayMsg = generateRMsg(arr1[i]);
    switch (i) {
      case 0:
        greetMessage += `SALE : UPTO ${displayMsg} OFF \n`;
        break;
      case 1:
        greetMessage += `ON : ${displayMsg} \n`;
        break;
      case 2:
        greetMessage += `VISIT OUR STORE : ${displayMsg}`;
        break;
      default:
        break;
    }
  }

  return greetMessage;
}
console.log(SalesDisplayMessage(SaleMsgconst));
