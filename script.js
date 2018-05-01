// Part 1 - .then() chaining

// Use $.get() and a chain of .then() calls to fetch these URLs one by one. 
// After each .get() is done, console log "data was fetched!"

let urls = [
	'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
 ];

 
 $.get(urls[0])
		.then(function(value){
	 	return $.get(urls[1]);
	 }) .then(function(value){
	 	return $.get(urls[2]);
	 }) .then(function(value){
	 	return $.get(urls[3]);
	 }) .then(function(value){
	 	return $.get(urls[4]);
	 }) .then(function(value){
	 	console.log('data was fetched!');
	 });


// Part 2 - Promise.all()

// Use Promise.all() to retreive all of the URLs above. 
// After it's done, console log "all the data was fetched!"	 

let promises = urls.map(url => {
	return $.get(url);
});


Promise.all(promises)
	.then(function(responses){
 		console.log('all the data was fetched!');
 });


//  Part 3 - Resolve Reject

// Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers 
// and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. 

function addNumbers(x, y){
	return new Promise(function(resolve, reject){
		let sum = x + y;
		// if (typeof sum === 'number') {
		if ( !isNaN(x) && !isNaN(y) ) {
			resolve(x + y);
		} else {
			reject("Make sure to input 2 numbers");
		}
	});

}

addNumbers(2, 2)
	.then(function(data){
		console.log(data);
	}).catch(function(error){
		console.log(error);
	});



// Part 4 - Promisify

// The function below uses callbacks to report the result of dropping buttered toast on the floor.

let dropButteredToastOnFloor = (success, failure) => {
   let drop = Math.random();
   if (drop < 0.5) {
      console.log("Landed butter-side up!");
      success();
   } else {
      console.log("Landed butter-side down...");
      failure();
   }
}


// To react to the dropping of toast, we have to provide callbacks for each possibility: 
// dropping butter side up, or butter side down.

dropButteredToastOnFloor(()=>{
   alert('Whew, that was close!');
}, ()=>{
   alert('Well shucks, there goes my toast...');
});



// YOUR TASK- Write a function called dropToastPromisified(), make it return a new Promise(), 
// and use the dropButteredToastOnFloor() function to call either resolve() or reject(). 
// If done correctly, you should be able to run:


function dropToastPromisified(){
	return new Promise(function(resolve, reject){
		dropButteredToastOnFloor(function(){
			resolve()
		}, function(){
			reject()
		});
	});

};




dropToastPromisified()
   .then(()=>{
      alert('Whew, that was close!');
   }).catch(()=>{
      alert('Well shucks, there goes my toast...');
   });

   // or

   dropToastPromisified().then(function(){
   		console.log('Hooray')
   }).catch(function(){
   		console.log('boo')
   });







