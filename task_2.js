/*task_2 by temi*/
function returnPrime(p){
	var val=Math.round(p);//this finds the estimation of our argument value to the nearest integer
	if(val==1){
		return false;//returns false because 1 is not a prime number
	}else if(val==2){
		return true;//returns true here because 2 is a prime number
	}else{
		for(bs=2;bs<val;bs++){//a loop is created to count back on the values less than the value being tested because no value greater than the value tested will result in a integer, the loop starts from 2 because all values can be divided by 1, setting the minimum value of the loop to 1 will result in all values being prime numbers
			if(val%bs==0){
				return false;//returns false because the modulus of any prime number should result decimal numbers not whole numbers or integers
			}
		}
		return true;//this returns
	}
}
alert(returnPrime(10))//should return false;remove after test