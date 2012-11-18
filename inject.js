window.addEventListener("keydown", function(event)
{
 
 
if (event.keyCode == 179) {
	// Send message to background page to play/pause
	chrome.extension.sendRequest({play_pause: true}, function(response) {
 
	});
 } else if (event.keyCode == 176) {
	// Send message to background page
	chrome.extension.sendRequest({next: true}, function(response) {
 
	});
 } else if (event.keyCode == 177) {
	// Send message to background page
	chrome.extension.sendRequest({prev: true}, function(response) {
 
	});
 }
}, false);