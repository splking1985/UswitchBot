var form_data = {
	// Create your own example data here, using variable list
}

// Listen for message to start filling in the form
	chrome.runtime.onMessage.addListener(function(message, sender, send_response) {
		if (message.type == 'start-filling') {
			// Open tab and attach script (and jQuery) to page
				chrome.tabs.create({'url': 'INSERT URL HERE'}, function(tab) {
					// Attach to tab after delay (due to tab redirecting)
					setTimeout(function() {
						chrome.tabs.executeScript(tab.id, {'file': '/jquery-2.2.4.min.js', 'runAt': 'document_start'})
						chrome.tabs.executeScript(tab.id, {'file': '/formfiller.js'})
					}, 10000)
				})
		}
	})
// Listen for port messages
	chrome.runtime.onConnect.addListener(function(port) {
		var sender = port.sender
		port.onMessage.addListener(function(message) {
			// get-form-data --- To send form data to script
				if (message.type == 'get-form-data') {
					port.postMessage({'data': form_data})
				}
			// attach-again --- To attach script to page again (if script gets removed when moving to the next step, and the page reloads)
				if (message.type == 'attach-again') {
					setTimeout(function() {
						chrome.tabs.executeScript(sender.tab.id, {'file': '/jquery-2.2.4.min.js', 'runAt': 'document_start'})
						chrome.tabs.executeScript(sender.tab.id, {'file': '/formfiller.js'})
					}, 5000)
				}
		})
	})