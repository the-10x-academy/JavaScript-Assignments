function BMICalculator(mass, height) {
    let bmi;
    if (mass <= 0 || height <= 0){
      return  "INVALID INPUT" }
    else{ 
        bmi = mass / (height * height);
     }
     return bmi
    }
    
    module.exports = BMICalculator;