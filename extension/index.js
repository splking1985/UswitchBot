$(document).ready(function() {
	$('a').click(function(event) {
		event.preventDefault()
		chrome.runtime.sendMessage({
			'type': 'start-filling',
		})
		window.close()
	})
})