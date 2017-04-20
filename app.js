//getting average word count of an array
//initiates for loop to run through each
//array item's length and adds it to count
//it then creates a variable called average
//which is count/array.length and sets it to
//two decimel points. It then alters the html
//to display the average
function wordAvg(array){
	var count = 0;
	for (var i = 0; i < array.length; i++) { 
		count += array[i].length;
	}
	var average = (count/(array.length)).toFixed(2);
	$(".js-average-wordLength").text(average + " characters");
}

//gets word count of an array
//and displays it on the webpage
function wordCount(array){
	$(".js-wordCount").text(array.length);
}

//this initiates uniqArray and then a for loop.
//it runs through each item of the array and uses
//indexOf to see if the array item already appears
//in uniqArray. If it does then it does nothing
//if indexOf return -1 then it means that it was not
//found in uniqArray so it pushes it to the array.
//finally it displays the uniqArray.length on the webpage
//as any word in uniqArray is unique from the original array
function uniqWord(array){
	var uniqArray = [];
	for (var i = 0; i < array.length; i++) {
		if(uniqArray.indexOf(array[i]) == -1){
			uniqArray.push(array[i]);
		}
	}
	$(".js-unique-wordCount").text(uniqArray.length);
}

function removeHidden(item){
	$(item).removeClass("hidden");
}


//pulling text from user input and creating
//an array of alpha characters split by spaces
//and addending the length to word count
//textArray is the variable that is used for all 
//the functions as it is an array of individual strings
//without special characters.
function pullText(){
	$('.js-form').submit(function(e){
		e.preventDefault();
		var allText = $("#user-text").val();
		var alphaText = allText.replace(/[^a-zA-Z ]/g, "");
		var textArray = alphaText.split(" ");
		wordCount(textArray);
		uniqWord(textArray);
		wordAvg(textArray);
		removeHidden(".text-report");
	})
}

$(function(){
	pullText();
})