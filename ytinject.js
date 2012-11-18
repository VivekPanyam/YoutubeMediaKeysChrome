window.onload = function() {
	var mediaKeys_playlist = [];
	var mediaKeys_current;
	var mediaKeys_currentIDX = 0;
	try {
	mediaKeys_playlist = document.getElementById('playlist-bar').getElementsByClassName('video-list')[0].getElementsByTagName('a');
	mediaKeys_current = document.getElementById('playlist-bar').getElementsByClassName('video-list')[0].getElementsByClassName('playlist-bar-item-playing')[0].getAttribute('data-video-id');
	} catch (e) {}
	for (var i=0; i< mediaKeys_playlist.length; i++) {
	 if (mediaKeys_playlist[i].href.indexOf(mediaKeys_current) != -1) {
		mediaKeys_currentIDX = i;
	 }
	}
}