// Acquiring length of the rectangle
const length = parseInt(prompt("Enter length of your rectngle in inches."));

// Acquiring width of the rectangle
const width = parseInt(prompt("Enter width of your rectngle in inches."));

// Calculating the area with provided length and width
const area = parseFloat(length * width);

// Calculating the perimeter with provided length and width
const per = parseFloat((length * 2) + (width * 2));

// HTML to display results
const html = '<div class="disp"><h3>Length:</h3> ' + length + ' inches<br><br><h3>Width:</h3> ' + width + ' inches<br><br><h2>Area:</h2> ' + area + ' square inches<br><br><h2>Perimeter:</h2> ' + per + ' inches</div>';

// Adding HTML to the page
document.write(html);