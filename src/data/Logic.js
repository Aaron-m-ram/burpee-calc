
    let mBurp17_24 = [
        {count: 30, points: 1},
        {count: 31, points: 4},
        {count: 32, points: 7},
        {count: 33, points: 10},
        {count: 34, points: 10.6},
        {count: 35, points: 11},
        {count: 36, points: 11.6},
        {count: 37, points: 12},
        {count: 38, points: 12.6},
        {count: 39, points: 13},
        {count: 40, points: 13.6},
        {count: 41, points: 14},
        {count: 42, points: 14.4},
        {count: 43, points: 14.6},
        {count: 44, points: 15},
        {count: 45, points: 15.4},
        {count: 46, points: 15.6},
        {count: 47, points: 16},
        {count: 48, points: 16.2},
        {count: 49, points: 16.6},
        {count: 50, points: 16.8},
        {count: 51, points: 17},
        {count: 52, points: 17.2},
        {count: 53, points: 17.4},
        {count: 54, points: 17.6},
        {count: 55, points: 17.7},
        {count: 56, points: 17.8},
        {count: 57, points: 18},
        {count: 58, points: 18.2},
        {count: 59, points: 18.4},
        {count: 60, points: 18.6},
        {count: 61, points: 18.8},
        {count: 62, points: 19},
        {count: 63, points: 19.2},
        {count: 64, points: 19.4},
        {count: 65, points: 19.6},
        {count: 66, points: 19.8},
        {count: 67, points: 20},
      ]; // push up scoresheet
    
    let fBurp17_24 = [
        {count: 15, points: 1},
        {count: 16, points: 4},
        {count: 17, points: 7},
        {count: 18, points: 10},
        {count: 19, points: 11},
        {count: 20, points: 11.6},
        {count: 21, points: 12},
        {count: 22, points: 12.6},
        {count: 23, points: 13},
        {count: 24, points: 14},
        {count: 25, points: 14.4},
        {count: 26, points: 14.6},
        {count: 27, points: 15},
        {count: 28, points: 16},
        {count: 29, points: 16.2},
        {count: 30, points: 16.4},
        {count: 31, points: 16.6},
        {count: 32, points: 16.8},
        {count: 33, points: 17},
        {count: 34, points: 17.2},
        {count: 35, points: 17.6},
        {count: 36, points: 17.8},
        {count: 37, points: 18},
        {count: 38, points: 18.2},
        {count: 39, points: 18.4},
        {count: 40, points: 18.6},
        {count: 41, points: 18.8},
        {count: 42, points: 19},
        {count: 43, points: 19.2},
        {count: 44, points: 19.4},
        {count: 45, points: 19.6},
        {count: 46, points: 19.8},
        {count: 47, points: 20}
      
    ]; // push up scoresheet

    const ageGetter = (inputAge, inputGender) => {
        if(inputGender === '1') { //male
            if (inputAge < 25) {
                return mBurp17_24;
            }else{
                alert("Error too high of a number")
            }
        } 
        else if(inputGender === "2"){ //female
            if (inputAge < 25) {
                return fBurp17_24;  
            }else{
                alert("Error too high of a number")
            }
        }else{
            alert("Error you didn't pick gender")
        }
    }

    function burpee(burp, scoreSheet) {
        if(burp < scoreSheet[0].count || burp === null || burp === undefined || isNaN(burp) === true){
            return 0
        } else if(burp > scoreSheet[scoreSheet.length - 1].count){
        return 20
        } else{
            for(var i = 0; i<scoreSheet.length; i++){
                console.log("burp: " + burp)
                console.log(scoreSheet[i].count)
                // eslint-disable-next-line
                if(burp == scoreSheet[i].count){
                return scoreSheet[i].points
                }
            }
        }
    };

export{
    ageGetter,
    burpee,
} 