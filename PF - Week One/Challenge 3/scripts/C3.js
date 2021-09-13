// Acquiring the cost of dinner
const cost = parseInt(prompt("Enter cost of dinner."));

//Acquiring the desired percentage to tip
const tip = parseInt(prompt("Enter perentage of dinner you would like to tip."));

// Calculating the total cost of dinner and tip
const total = parseFloat(cost + ((tip / 100) * cost));

//HTML to be added to the page
const html = "<div class='disp'><h2>Cost of Dinner:</h2> $" + cost + "<br><br><h2>Percentage to Tip:</h2> " + tip + "% <br><br><h2>Total Cost:</h2> $" + total + "</div>";

//Displaying the totals to the user
document.write(html);