var port = chrome.runtime.connect({'name': 'formfiller'})
port.postMessage({ 'type': 'get-form-data' })

// Add native 'click' and 'change' events to be triggered using jQuery
	jQuery.fn.extend({
		'vchange': function () {
			var change_event = document.createEvent('HTMLEvents')
			change_event.initEvent('change', false, true)
			return $(this).each(function () {
				$(this)[0].dispatchEvent(change_event)
			})
		},
		'vclick': function () {
			var click_event = document.createEvent('HTMLEvents')
			click_event.initEvent('click', false, true)
			return $(this).each(function () {
				$(this)[0].dispatchEvent(click_event)
			})
		},
		'vkeyup': function () {
			var keyup_event = document.createEvent('HTMLEvents')
			keyup_event.initEvent('keyup', false, true)
			return $(this).each(function () {
				$(this)[0].dispatchEvent(keyup_event)
			})
		},
	})

port.onMessage.addListener(function (message) {
	var data = message.data
	var loc = document.location.href
	if (loc == "URL of Page 1 of Form") {
		group1()
	}
	if (loc == "URL of Page 2 of Form") {
		group2()
	}
	if (loc == "URL of Page 3 of Form") {
		group3()
	}

	function group1() {
		// Fill in stuff
		return true;
	}
	function group2() {
		// Fill in stuff
		return true;
	}
	function group3() {
		// Fill in stuff
		return true;
	}