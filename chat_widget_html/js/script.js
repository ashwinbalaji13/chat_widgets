let active = false;
function openChatWindow() {
	// if (active) {
	// 	document.getElementById('chat-window').style.display = 'none';
	// } else {
	// 	document.getElementById('chat-window').style.display = 'visible';
	// }
	// console.log(active);

	// active = !active;
	var currentstate = document.getElementById('chat-window').style.visibility;
	//Make newstate the opposite of the current state.
	var newstate = currentstate == 'hidden' ? 'visible' : 'hidden';
	var popupicon = newstate == 'hidden' ? 'visible' : 'hidden';

	//Apply the new state.
	document.getElementById('chat-window').style.visibility = newstate;
	console.log('popupicon', popupicon);

	document.getElementById('chat_icon').style.visibility = popupicon;
}

window.onload = function() {
	//Start with the div visible
	document.getElementById('chat-window').style.visibility = 'hidden';
	document.getElementById('chat_icon').style.visibility = 'visible';

	//Listen for click on button.
	// document.getElementById('chat_icon').addEventListener('click', function() {
	// 	//Get current state of CSS display property.
	// });
};
