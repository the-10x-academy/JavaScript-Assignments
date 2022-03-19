// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (height !== 0 || mass !== 0)
        return mass/(height*height)
    else
        return "INVALID INPUT" 
}

module.exports = BMICalculator;
