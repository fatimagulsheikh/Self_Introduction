//write an basic self introduction

//personal information
const perName: string = "Fatima"
const age: number = 23
const education: string [] = ["Intermediate at I.Com, Continue Graduation"]
const skills: string [] = ["HTML","CSS","JAVASCRIPT","TYPESCRIPT"]
const experience: string = "less then 5 months"
const project: string [] = ["hello world","bmi_calculator","45 assignments of node js and typescript"]

//print personal information
console.log(`My name is ${perName}, and I am ${age} years old.`)
console.log(`I am a self-taught commerce with educational background as ${education}.`)
console.log("I have skills in :")
skills.forEach(skills => console.log("- " + skills))
console.log(`I have  ${experience} experience in web developement field.`)
console.log("Some of my projects includes")
project.forEach(project => console.log("* " + project));

// conclusion
console.log("Thank you for getting to know me as a web developer..")