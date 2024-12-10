
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

 let userpaid = false;
 let userIsAdmin = true;

 const showproducts = userpaid || userIsAdmin;
 console.log(showproducts);

 const userIsadmin = true;
 const discount = userIsAdmin ? 30 : 0;
 console.log(discount);

 let userDistance = 35;
 const shipping = userDistance <= 40 ? 10 : 15;
 console.log(shipping);

 const userisAdmin = false;
 const userIsStudent = true;
 let Discount;

 if(userisAdmin){
    console.log("you are admin!")
    Discount = 25;
 } else if(userIsStudent){
    console.log("you are student!")
    Discount = 15;
 } else{
    console.log("you are user!")
    Discount = 0;
 }
 console.log(Discount);

 let userFirstName = `null`;
 let welcomeMessage = `welcome to our website ${userFirstName}!`;
 console.log(welcomeMessage);

 let testResult = [23,55,67,88,23,12,43,66,77,42];
 console.log(testResult[testResult.length-1]);

 let downloadProgress = 0;
 while(downloadProgress <=100){
    console.log(`progress: ${downloadProgress}%`)
    downloadProgress +=10;
 }

 let sec=20;
 while(sec>=0){
    if(sec>10){
        console.log("yoy have time");
    } else{
        console.log("you have little time!");
    }
    sec --;
 }

 for(dp=0; dp<=100; dp+=10){
    console.log(`progress: ${dp}%`);
 }

 let testScore = [15,30,45,60,75,90]
 for(let i=0; i<testScore.length; i++){
    console.log(testScore[i]);
 }

 let testscore = [15,27,12,20,79,99]
 for(let i=0; i<testScore.length; i++){
    if(testscore[i]>30){
    console.log(testscore[i]);
   }
 }

 const technologies = ["html","css","javascript","react"]
 let search = "javascript"
 for(let i = 0; i<technologies.length; i++) {
    if(technologies[i] == search) {
        console.log(`${technologies[i]} found!`);
        break;
    }
 }

 const studentScore = [77,81,86,95,55,77,86,55]
 for(i = 0; i<studentScore.length; i++){
    for(j = i+1; j<studentScore.length; j++){
        if(studentScore[i] == studentScore[j]){
            console.log(`point ${studentScore[i]} is seem`);
        }
    }
 }