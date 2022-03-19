function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence && !isTired && isSober)
        return "You can drive";
    else if(!hasDrivingLiscence)
        return "You cannot drive";
    else
        return "You shouldn't drive";
}

module.exports = CanDrive;
