// Increment cookie count function.
function incrementCookie() {
    var data = document.getElementById('number').innerText; 
	document.getElementById('number').innerText = ++data; 
}

// Reset cookie count to zero function. 
function reset() {
    var data = document.getElementById('number').innerText; 
	document.getElementById('number').innerText = 0; 	
}
