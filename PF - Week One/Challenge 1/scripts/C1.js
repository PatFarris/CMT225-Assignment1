//Acquiring degrees of first angle in triangle
const ang1 = parseInt(prompt("Enter degrees of angle 1 of your triangle."));

//Acquiring degrees of second angle in triangle
const ang2 = parseInt(prompt("Enter degrees of angle 2 of your triangle."));

//Determining degrees of the third angle of the triangle
const ang3 = parseFloat(180 - (ang1 + ang2));

//HTML to be added to display the results
const html = '<div id="result"><h2>Angle 1:</h2> ' + ang1 + '&deg;<br><br><h2>Angle 2:</h2> ' + ang2 + '&deg;<br><br><h2>Angle 3:</h2> ' + ang3 + '&deg;</div>';

// Displaying the results to the user
document.write(html)