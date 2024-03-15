//write an basic self introduction
//personal information
var perName = "Fatima";
var age = 23;
var education = ["Intermediate at I.Com, Continue Graduation"];
var skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"];
var experience = "less then 5 months";
var project = ["hello world", "bmi_calculator", "45 assignments of node js and typescript"];
//print personal information
console.log("My name is ".concat(perName, ", and I am ").concat(age, " years old."));
console.log("I am a self-taught commerce with educational background as ".concat(education, "."));
console.log("I have skills in :");
skills.forEach(function (skills) { return console.log("- " + skills); });
console.log("I have  ".concat(experience, " experience in web developement field."));
console.log("Some of my projects includes");
project.forEach(function (project) { return console.log("* " + project); });
// conclusion
console.log("Thank you for getting to know me as a web developer..");
