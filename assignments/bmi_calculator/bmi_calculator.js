// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if (mass > 0 && height > 0){
        return (mass/height**2);
    }
    else{
        return "INVALID INPUT";
    }
}

module.exports = BMICalculator;
