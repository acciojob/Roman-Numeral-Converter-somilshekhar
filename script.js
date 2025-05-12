// Function to convert the number to a Roman numeral
function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Invalid input";
  }

  const romanMap = [
    ['M', 1000],
	['CM',900],  
    ['D', 500],
	['CD',400],
    ['C', 100],
	['XC',90],
    ['L', 50],
	['XL',40],  
    ['X', 10],
	['IX',9],
	  ['IV',4],
    ['V', 5],
    ['I', 1]
  ];

  let result = "";

  for (let i = 0; i < romanMap.length; i++) {
    const [roman, value] = romanMap[i];
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// Function to handle the button click and display the result
function convertNumber() {
  const num = parseInt(document.getElementById('numInput').value);
  const romanNumeral = convertToRoman(num);
  document.getElementById('result').textContent = romanNumeral;
}
