/*task_7 by temi*/
function standardDiv(dd){
	var totalSum=topSum=mean=0;
if(typeof dd != "object"){
	return "an array is required";
}else{
for(l=0;l<dd.length;l++){
	if(typeof dd[l]=="number"){//checks if each of the array values are numbers
		totalSum=totalSum+dd[l];
	}else{
		return dd[l]+" is not a number and will not be included in the calculation";//alerts and removes values that are not numbers
	}
}
mean=totalSum/dd.length;

for(o=0;o<dd.length;o++){
	topSum=topSum+Math.pow((dd[o]-mean),2);//math.pow is a method used for finding squares, cubes etc
}
return "standard deviation: "+(Math.sqrt(topSum/totalSum)).toFixed(3);//toFixed method is for estimation
	}
};
alert(standardDiv([3,5,7,8,6,4]))//should return  0.728; remove this after test