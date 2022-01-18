function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence==true && isTired == false && isSober==true){
        return "You can drive";
    }
    else if(hasDrivingLiscence==true && (isTired == true || isSober==false)){
        return "You shouldn't drive";
    }
    else{
        return "You cannot drive";
    }
}

module.exports = CanDrive;
