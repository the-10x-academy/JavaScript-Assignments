// This function should return the BMI for a person 
function BMICalculator(mass,height){
    let bmi=mass/(height**2);
    if (mass<=0 || height<=0){
        return('INVALID INPUT')
    }else{
        return(bmi)
    }
}


    // Write your code here


module.exports = BMICalculator;
