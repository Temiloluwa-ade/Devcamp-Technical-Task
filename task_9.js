/*task_9 by temi*/
function checkWord(word){
	if(word){
			var newWord="";
		for(zz=word.length;zz>=0;zz--){//backwards loop
			newWord=newWord+word.charAt(zz);
		}
		if(newWord==word){
				return "Yes";
		}else{
				return 'No';
		}
	}else{
		return "No value given";
	}
};
alert(checkWord("jeol"))//this should return No;Remove after test