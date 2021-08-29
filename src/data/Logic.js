function ageGetter(inputAge, inputGender) {
    
   if(inputGender == '1') { //male
      if (inputAge < 25) {
            scoreSheetArr.push(mPuScoreSheet17_24, mSuScoreSheet17_24, mRtScoreSheet17_24);
            return scoreSheetArr;
      }else{
        alert("Error too high of a number")
       }
    } else { //female
        if (inputAge < 25) {
            scoreSheetArr.push(fPuScoreSheet17_24, fSuScoreSheet17_24, fRtScoreSheet17_24);
            return scoreSheetArr;  
        }else{
            alert("Error too high of a number")
         }

  
    };
}