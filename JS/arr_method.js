// const numbers = [12,34,56,7,88,90]
// //ForEach
// numbers.forEach((number)=>{console.log(number*2)})

//map

const mapArr =  numbers.map((name)=>{return name * 2})
console.log(numbers);
console.log(mapArr);

const skill = ["HTML", "Java script", "React", "Redux", "Angular"]

numbers.map((number)=>{return`
<p>${skill}</p>
`}).join('')
document.querySelector('body').insertAdjacentHTML('beforeend', skillEl)

//filter
const filteredNumbers = numbers.filter((numner)=>{number > 30})
console.log(filtered)