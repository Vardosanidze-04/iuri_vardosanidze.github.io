
let myAge = 20;
myAge = myAge*2.5;
console.log(myAge);

 let totalCourseMonths = 3;
 let monthsPassed = 1;
 let monthsLeft = totalCourseMonths - monthsPassed;
 console.log(monthsLeft);

 const testBariers = 51;
 let myResults = 48;
 
 const testResults = myResults >= testBariers;
 console.log(testResults);

 const barier = 80;
 let javaScriptResult = 25;
 let htmlResult = 35;
 let cssResult = 25;

 const TestResult = javaScriptResult + htmlResult + cssResult >= barier;
 console.log(TestResult);

 let president = true;
 let premierMinister = true;
 let generalOfArmies = false;

 const bombWillLaunch = president && premierMinister && generalOfArmies;
 console.log(bombWillLaunch);

 let userLoggedIn = true;
 let userPaid = false;
 let userisAdmin = false;

 const showProducts = userLoggedIn && (userIsAdmin || userPaid);
 const showBuyButton = !(userIsAdmin || userPaid);
 console.log(showProducts); 
 console.log(showBuyButton);

 let userpaid = false;
 let userIsAdmin = true;

 const showproducts = userpaid || userIsAdmin;
 console.log(showproducts);
