// Talking console
//
// Support: http://caniuse.com/#search=SpeechSynthesisUtterance
//
// Copy paste the code into dev console or
// use http://mrcoles.com/bookmarklet/ to create a bookmarklet.

/* ✂️ ......................................................................................... */
/*
if(console.log.name !== 'talkLog') {
	console.l = console.log;
	console.log = function talkLog(){
		Array.prototype.forEach.call(arguments, function(a){
			if(typeof a !== 'string'){
				try {  a = 'Object: ' + JSON.stringify(a); } catch (e) {}
			}
			window.speechSynthesis.speak(new SpeechSynthesisUtterance(a));
		});
		console.l.apply(this, arguments);
	};
}
*/

console.say = function talkLog(){
		Array.prototype.forEach.call(arguments, function(a){
			if(typeof a !== 'string'){
				try {  a = 'Object: ' + JSON.stringify(a); } catch (e) {}
			}
			window.speechSynthesis.speak(new SpeechSynthesisUtterance(a));
		});
		console.log.apply(this, arguments);
};

console.log('I\'m ready master! Let\'s debug', window.location.hostname);


/* ✂️ ......................................................................................... */
