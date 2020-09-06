/*task_10 by temi*/
function mostString(ee){
	var num=[];
for(cc=0;cc<ee.length;cc++){//first loop for counting through the string
	num[cc]=0;
	for(lo=0;lo<ee.length;lo++){//second loop for comparing each character collected from first loops index to be used in checking the whole initail string for any match
		var lin=ee.charAt(cc);
		if(lin==ee.charAt(lo)){
			num[cc]=num[cc]+1;//this adds the in the total number of appearance of each value in the given string
		}
	}
}
for(zo=0;zo<num.length;zo++){
if(Math.max(...num)==num[zo]){//the three dot or spread operator is used to expand arrays of numbers into list of arguments, max is a math method used to find the maximum number in an array or group of numbers
	if(Math.min(...num)==num[zo]){//just like max, min is a math method used to find the minimum number in an array or group of numbers
		return "there is no most occuring value in "+ee;
		break;
	}else{
		return ee.charAt(zo);//gets the character at the loops index
		break;//used to stop loops
		}
	
 }
}
}
alert(mostString("joel"))//this should bring up there is no most occuring value in joel; remove after test