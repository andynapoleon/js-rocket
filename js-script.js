// this function does this.
var doCoolStuff = function () {
	
	// changing back and forth between class names
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

var sayMyName = function (name) {
	alert('My name is' + name);
}

var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedon: false,
			numberofWheels: 4,
			seats: [
				'seat 1', 
				'seat 2', 
				'seat 3', 
				'seat 4'
			],
			turnOn: function() {
				this.isTurnedon = true;
			},
			fly: function() {
				alert('fly');
			},
			switchCar: function(isOn) {
				console.log('turn car ' + isOn);
				if (isOn == true) {
					this.isTurnedon = true;
				} else {
					this.isTurnedon = false;
				}
			}
		};
		
		console.log('hello there friends!');