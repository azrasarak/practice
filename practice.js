// max 
let nums = [1, 2, 3, 4, 5, 6, 9]
let max = nums[0];
    for (let i= 0; i<nums.length; i++){
    if(nums[i] >= max){
        max = nums[i];
    }
    }
console.log(max);

// min
let min = nums[0];
    for (let i= 0; i<nums.length; i++){
    if(nums[i] <= min){
        min = nums[i];
    }
    }
console.log(min);

// sum of how many odd numbers 
let sumOdd = 0 
for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){
        sumOdd += nums[i]
    }
}
console.log (sumOdd)

//animals at zoo
let animals= ['tiger','elephant', 'dolphin', 'shark(favorite animal)']

for (let i = 0; i < animals.length; i ++) {
    console.log(animals[i])
}

let numFs= 0 
for (let i = 0; i < animals.length; i++){
    if (animals[i].startsWith('shark')){
        numFs++
    }
}
console.log(numFs)

// F to C 
let celcius= ['0']
let fahrenheit= celcius * 9/5 + 32;
    
console.log(fahrenheit)

//Count wowels
let vowels= ['a','e','i','o','u']
function countVowels(sentence){
    let counts = 0; 
    for (let i=0; i<vowels.length;i++){
        if( vowels.includes(vowels[i])){
            counts++; 
        }
    }
    return console.log(counts);
}
countVowels('AaEeIiOoUu');

//divisable by 5 
for (let i= 0; i<nums.length; i++){
    if(nums[i] % 3 === 0){
        console.log(nums[i])
    }
}


//apple reversed 
let word = ['A','P','P','L','E']

word[0] // "e"
for (let i=0; i< word.length; i++){
    console.log(word[4])
}
word[0] // "l"
for (let i=0; i< word.length; i++){
    console.log(word[3])
}
word[0] // "p"
for (let i=0; i< word.length; i++){
    console.log(word[2])
}
word[0] // "p"
for (let i=0; i< word.length; i++){
    console.log(word[1])
}
word[0] // "a"
for (let i=0; i< word.length; i++){
    console.log(word[0])
}

