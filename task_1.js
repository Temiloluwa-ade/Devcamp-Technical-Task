/*task_1 by temi*/
function evenOddSum(array){//this is the function
	var odd=even=0;//this are the variables that hold the sum of odd and even
if(typeof array=="object"){//this checks whether the argument or array is actually an array
	for(zz=0;zz<array.length;zz++){//this loop counts throught the index of the arrays index
		if(array[zz]%2==0){//we use the modulus operator which will equal 0 is can be divisible by 2; 
			even=even+array[zz];//sum of even values in index
		}else{
			odd=odd+array[zz];//sum of odd values in index
		};
	}
	return [even,odd];//this returns the array
}else{
	return "can only use arrays";//this is the error if the argument is not an array
	}
};
alert(evenOddSum([1,3,2,5,4]))//this is a test should return 6 and 9, clear this after testing