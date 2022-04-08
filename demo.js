let yourAnswersArray = ["a", "b", "c"];
let rightAnswersArray = ["a", "a", "a"];

for (let i in yourAnswersArray) {

    if (yourAnswersArray[i]==rightAnswersArray[i]) {
        console.log("Your answer was "+yourAnswersArray[i]+" this is true.");
    } else {
        (console.log("Your answer was "+yourAnswersArray[i]+". this is false. Right answer is: "+rightAnswersArray[i]))}
};