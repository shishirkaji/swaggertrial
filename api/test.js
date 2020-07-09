const express = require("express");
const { PromiseProvider } = require("mongoose");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Hi from test");
});
var test =1 
router.get("/prime/:num",  (req, res) => {
  var num = req.params.num;
  
   res.send(`${test}`);
   test  = test +1;
   return 0;
//   return res.send(
//     //   isPrime(num)
//     (await promisePrime(num))
//       ? // just testing efficency of two different function
//         "is prime"
//       : "not prime"
//   );
});
const isPrime = (num) => {
  var hero = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) hero = false;
    console.log(i);
  }
  console.log(hero);
  return hero;
};
const promisePrime = (num) => {
  return new Promise((resolve) => {
    console.log(`from promise prime function ${num}`);

    resolve(isPrime(num));
  });
};
module.exports = router;
