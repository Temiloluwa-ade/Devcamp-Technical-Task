/*task_4 by temi*/
function validatePass(pass){
	var hasNum=hasChar=hasSpec=false;
if(pass!=""){//check if pass has a value or not
	if(/[a-z]/gi.test(pass)){//the regular expression  checks for strings globally(g) irrespective of case(i),test is a method for testing values
		hasChar=true;
	}
	if(/[\d]/g.test(pass)){//this regular expression checks for digits(0-9) globally(g)
		hasNum=true;
	}

	if(/[\W]/g.test(pass)){//this tests for both characters or alphabet regardless of its case, digits and special characters globally 
		hasSpec=true;
	}
		if(hasChar && hasSpec && hasNum){
			return 3;
		}else if(hasChar && hasNum){
			return 2;
		}else if(hasNum){
			return 1;
		}else if(hasChar){
			return 0;
		}

	}else{
		return 0;
	}
};