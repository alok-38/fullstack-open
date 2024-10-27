function calculator(num1, num2, operation) {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        return "Division by zero!";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operation";
      break;
  }

  return result;
}

console.log(calculator(1, 0, "divide"));
console.log(calculator(1, 1, "add"));
console.log(calculator(5, 3, "subtract"));
console.log(calculator(2, 3, "multiply"));
console.log(calculator(10, 5, "divide"));
console.log(calculator(4, 2, "unknown"));
