// Iteration 1: Names and Imput
let hacker1 = 'AHeber1'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Felipe'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`The driver longest name has ${hacker1.length}`)
} else if (hacker1.length<hacker2.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3:
let hacker1reverse = ""
for (i=0;i<hacker1.length;i++){
    hacker1reverse += hacker1[i].toUpperCase() + " "
}
console.log(hacker1reverse)
let hacker2Reverse = ""
for (i=hacker2.length-1;i>=0; i--){
    hacker2Reverse+=hacker2[i]
}
console.log(hacker2Reverse)

let arr = []
let arr2=[]
arr.push(hacker1)
arr.push(hacker2)
arr2=arr.sort()
console.log(arr2)
if (arr2[0]===hacker1){
    console.log(`The driver's name goes first`)
}
else if(arr2[0]===hacker2){
    console.log('Yo, the navigator goes first definitely.')
}
else {
    console.log('What?! You both have the same name?')
}