function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence===True && isTired===False && isSober===True ){
        return "You can drive"
    }
    if(hasDrivingLiscence===False && isTired===False && isSober===True ){
        return "You cannot drive"
    }
    if(hasDrivingLiscence===True && isTired===True && isSober===False ){
        return "You shouldn't drive"
    }

}

module.exports = CanDrive;
