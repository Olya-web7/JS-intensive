//1
const num1 = +prompt('pls enter the first number');
const num2 = prompt('pls enter the second number');

if (typeof num1 === 'number' || typeof num2 === 'number') {
  console.log(parseInt(num1).toString(num2))
} else {
  console.log("Некорректный ввод!")
}

//2
const num3 = +prompt('pls enter the first number');
const num4 = +prompt('pls enter the second number');

if (isNaN(num3)) {
  console.log("Некорректный ввод!");
} else if (isNaN(num4)) {
  console.log("Некорректный ввод!")
} else {
  console.log(`Ответ: ${num3+num4}, ${num3/num4}.`)
}
