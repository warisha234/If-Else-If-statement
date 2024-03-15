var englishMarks = 82;
var urduMarks = 80;
var educationMarks = 75;
var civicsMarks = 92;
var economicsMarks = 65;
var totalMarks = 500;
var obtMarks = englishMarks + urduMarks + educationMarks + civicsMarks + economicsMarks;
var percentage = (obtMarks / totalMarks) * 100;
console.log("Warisha Turab Mark Sheet");
console.log("english Marks", englishMarks);
console.log("urdu Marks", urduMarks);
console.log("education Marks", educationMarks);
console.log("civics Marks", civicsMarks);
console.log("economics Marks", economicsMarks);
console.log("total Marks", totalMarks);
console.log("obt Marks", obtMarks);
console.log("Percentage", percentage.toFixed(2) + "%");
if (percentage >= 80) {
    console.log("Grade A+");
}
else if (percentage >= 70) {
    console.log("Grade A");
}
else if (percentage >= 60) {
    console.log("Grade B");
}
else if (percentage >= 50) {
    console.log("Grade C");
}
else if (percentage >= 40) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}
