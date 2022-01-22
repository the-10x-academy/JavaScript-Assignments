function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(!hasDrivingLiscence){
        return "You cannot drive";
    }else{
        if (isTired || !isSober){
            return "You shouldn't drive";
        }
    }
    return "You can drive";
}

module.exports = CanDrive;
