// Part 1 - .then() chaining

// Use $.get() and a chain of .then() calls to fetch these URLs one by one. 
// After each .get() is done, console log "data was fetched!"

var urls = [
	'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
 ];

 
 $.get('https://dog.ceo/api/breed/beagle/images/random')
		.then(function(value){
	 	return $.get('https://dog.ceo/api/breed/chow/images/random');
	 }) .then(function(value){
	 	return $.get('https://dog.ceo/api/breed/akita/images/random');
	 }) .then(function(value){
	 	return $.get('https://dog.ceo/api/breed/dingo/images/random');
	 }) .then(function(value){
	 	return $.get('https://dog.ceo/api/breed/eskimo/images/random');
	 }) .then(function(value){
	 	console.log('data was fetched!');
	 });


// Part 2 - Promise.all()

// Use Promise.all() to retreive all of the URLs above. 
// After it's done, console log "all the data was fetched!"	 

Promise.all([$.get('https://dog.ceo/api/breed/beagle/images/random'), 
		$.get('https://dog.ceo/api/breed/chow/images/random'),
		$.get('https://dog.ceo/api/breed/akita/images/random'),
		$.get('https://dog.ceo/api/breed/dingo/images/random'),
		$.get('https://dog.ceo/api/breed/eskimo/images/random')]).then(function(value){
 	console.log('all the data was fetched!');
 });


//  Part 3 - Resolve Reject

// Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers 
// and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. 

function addNumbers(x, y){
	return new Promise(function(resolve, reject){
		let sum = x + y;
		if (typeof sum === 'number') {
			return console.log("The answer is " + sum);
		} else {
			return console.log("Not a number");
		}
	});

};

addNumbers(2, 2);











