
let englishMarks : number = 82;
let urduMarks : number = 80;
let educationMarks : number = 75;
let civicsMarks : number = 92;
let economicsMarks : number = 65;

let totalMarks : number = 500;
let obtMarks : number = englishMarks+urduMarks+educationMarks+civicsMarks+economicsMarks;
let percentage : number = (obtMarks/totalMarks)*100;


console.log("Warisha Turab Mark Sheet");
console.log("english Marks" , englishMarks);
console.log("urdu Marks" , urduMarks);
console.log("education Marks" , educationMarks);
console.log("civics Marks", civicsMarks);
console.log("economics Marks", economicsMarks);
console.log("total Marks", totalMarks);
console.log("obt Marks", obtMarks);
console.log("Percentage" , percentage.toFixed(2)+ "%");

if (percentage >=80) {
    console.log("Grade A+");
} else if (percentage >=70)     {
    console.log("Grade A");

} else if (percentage >=60){
    console.log("Grade B");
}  else if (percentage >=50){
    console.log("Grade C");
}  else if (percentage >=40){
    console.log("Grade D");
} else {
    console.log("Fail");
    
}
