var tabId = [];

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (tabId == []) return;
	for (var i = 0; i < tabId.length; i++) {
		if (request.play_pause) {
			chrome.tabs.executeScript(tabId[i], {code: "if (document.getElementById(\"movie_player\").getPlayerState() == 1) {document.getElementById(\"movie_player\").pauseVideo();} else {document.getElementById(\"movie_player\").playVideo();}"})
		} else if (request.next) {
			chrome.tabs.executeScript(tabId[i], {file: "ytnext.js"});
		} else if (request.prev) {
			chrome.tabs.executeScript(tabId[i], {file: "ytprev.js"});
		}
	}
 });

chrome.webNavigation.onCommitted.addListener(function(e) {
  if (e.url.indexOf('youtube.com/watch') != -1) {
    if (tabId.indexOf(e.tabId) == -1) {
		tabId.push(e.tabId);
	}
  }
});


