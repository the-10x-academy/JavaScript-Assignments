// This function should return the BMI for a person 
function BMICalculator(mass, height) {

    // Write your code here
    //  if ((mass>0)||(height!=0))
    if ((mass>0)&&(height>0))
     {
           BMI=mass/(height*height)
           return BMI
     }
     else
     {
         return "INVALID INPUT"
     }
}
// mass=parseInt(readLine())
// height=parseInt(readLine())
// console.log(BMICalculator(mass, height))
module.exports = BMICalculator;
