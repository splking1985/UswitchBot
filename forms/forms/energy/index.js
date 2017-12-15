$(document).ready(function() {

	$("#plan_type").on('change', function() {
		if ($(this).val() == "Gas & Electricity") {
			$("#gasOnly").hide();
			$("#electricityOnly").hide();
			$("#gasAndElectricity").show();
		} else if ($(this).val() == "Gas Only") {
			$("#gasAndElectricity").hide();
			$("#electricityOnly").hide();
			$("#gasOnly").show();
		} else {
			$("#gasAndElectricity").hide();
			$("#gasOnly").hide();
			$("#electricityOnly").show();
		}
	});

	$("#ge_economy_seven_meter").on('change', function() {
		if ($(this).val() == 'Yes') {
			$("#ge_economy_seven_usage, label[for='ge_economy_seven_usage']").parent().show();
		} else {
			$("#ge_economy_seven_usage, label[for='ge_economy_seven_usage']").parent().hide();
		}
	});

	$("#ge_usage").on('change', function() {
		if ($(this).val() == 'Yes, I know how much I use in kWh') {
			$("#ge_usage_div").show();
			$("#ge_spend_div").hide();
			$("#ge_dont_know_div").hide();
		} else if ($(this).val() == 'Yes, I know how much I spend') {
			$("#ge_usage_div").hide();
			$("#ge_spend_div").show();
			$("#ge_dont_know_div").hide();
		} else {
			$("#ge_usage_div").hide();
			$("#ge_spend_div").hide();
			$("#ge_dont_know_div").show();
		}
	});

	$("#g_usage").on('change', function() {
		if ($(this).val() == 'Yes, I know how much I use in kWh') {
			$("#g_usage_div").show();
			$("#g_spend_div").hide();
			$("#g_dont_know_div").hide();
		} else if ($(this).val() == 'Yes, I know how much I spend') {
			$("#g_usage_div").hide();
			$("#g_spend_div").show();
			$("#g_dont_know_div").hide();
		} else {
			$("#g_usage_div").hide();
			$("#g_spend_div").hide();
			$("#g_dont_know_div").show();
		}
	});

	$("#e_usage").on('change', function() {
		if ($(this).val() == 'Yes, I know how much I use in kWh') {
			$("#e_usage_div").show();
			$("#e_spend_div").hide();
			$("#e_dont_know_div").hide();
		} else if ($(this).val() == 'Yes, I know how much I spend') {
			$("#e_usage_div").hide();
			$("#e_spend_div").show();
			$("#e_dont_know_div").hide();
		} else {
			$("#e_usage_div").hide();
			$("#e_spend_div").hide();
			$("#e_dont_know_div").show();
		}
	});

	$("#ge_home_type").on('change', function() {
		if ($(this).val() == "House") {
			$("#ge_house").show();
			$("#ge_flat").hide();
		} else if ($(this).val() == "Flat") {
			$("#ge_house").hide();
			$("#ge_flat").show();
		}
	});

	$("#g_home_type").on('change', function() {
		if ($(this).val() == "House") {
			$("#g_house").show();
			$("#g_flat").hide();
		} else if ($(this).val() == "Flat") {
			$("#g_house").hide();
			$("#g_flat").show();
		}
	});

	$("#e_home_type").on('change', function() {
		if ($(this).val() == "House") {
			$("#e_house").show();
			$("#e_flat").hide();
		} else if ($(this).val() == "Flat") {
			$("#e_house").hide();
			$("#e_flat").show();
		}
	});

	function save() {
		var d = {};
		d.postcode = $("#postcode").val();
		d.house_no = $("#house_no").val();
		d.rent = $("#rent").val();
		d.plan_type = $("#plan_type").val();

		if (d.plan_type == "Gas & Electricity") {
			d.ge_dual = $("#ge_dual").val();
			d.ge_payment = $("#ge_payment").val();
			d.ge_economy_seven_meter = $("#ge_economy_seven_meter").val();
			if (d.ge_economy_seven_meter == 'Yes') {
				d.ge_economy_seven_usage = $("#ge_economy_seven_usage").val();
			}
			d.ge_usage = $("#ge_usage").val();
			d.g_usage = $("#ge_usage").val();
			d.e_usage = $("#ge_usage").val();
			if (d.ge_usage == "Yes, I know how much I use in kWh") {
				d.ge_gas_usage = $("#ge_gas_usage_num").val() + " kWh every " + $("#ge_gas_usage").val();
				d.g_gas_usage = $("#ge_gas_usage_num").val() + " kWh every " + $("#ge_gas_usage").val();
				d.ge_electricity_usage = $("#ge_electricity_usage_num").val() + " kWh every " + $("#ge_electricity_usage").val();
				d.e_electricity_usage = $("#ge_electricity_usage_num").val() + " kWh every " + $("#ge_electricity_usage").val();
			} else if (d.ge_usage == "Yes, I know how much I spend") {
				d.ge_gas_spend = "I spend £" + $("#ge_gas_spend_num").val() + " every " + $("#ge_gas_spend").val();
				d.g_gas_spend = "I spend £" + $("#ge_gas_spend_num").val() + " every " + $("#ge_gas_spend").val();
				d.ge_electricity_spend = "I spend £" + $("#ge_electricity_spend_num").val() + " every " + $("#ge_electricity_spend").val();
				d.e_electricity_spend = "I spend £" + $("#ge_electricity_spend_num").val() + " every " + $("#ge_electricity_spend").val();
			} else {
				d.ge_home_type = $("#ge_home_type").val();
				d.g_home_type = $("#ge_home_type").val();
				d.e_home_type = $("#ge_home_type").val();
				if (d.ge_home_type == "House") {
					d.ge_house_type = $("#ge_house_type").val();
					d.g_house_type = $("#ge_house_type").val();
					d.e_house_type = $("#ge_house_type").val();
				} else {
					d.ge_flat_type = $("#ge_flat_type").val();
					d.g_house_type = $("#ge_house_type").val();
					d.e_house_type = $("#ge_house_type").val();
				}
				d.ge_home_built = $("#ge_home_built").val();
				d.g_home_built = $("#ge_home_built").val();
				d.e_home_built = $("#ge_home_built").val();
				d.ge_num_bedrooms = $("#ge_num_bedrooms").val();
				d.g_num_bedrooms = $("#ge_num_bedrooms").val();
				d.e_num_bedrooms = $("#ge_num_bedrooms").val();
				d.ge_num_adults = $("#ge_num_adults").val();
				d.g_num_adults = $("#ge_num_adults").val();
				d.e_num_adults = $("#ge_num_adults").val();
				d.ge_most_enrgy = $("#ge_most_enrgy").val();
				d.g_most_enrgy = $("#ge_most_enrgy").val();
				d.e_most_enrgy = $("#ge_most_enrgy").val();
			}
		} else if (d.plan_type == "Gas Only") {
			d.g_usage = $("#g_usage").val();
			d.ge_usage = $("#g_usage").val();
			d.e_usage = $("#g_usage").val();
			if (d.g_usage == "Yes, I know how much I use in kWh") {
				d.g_gas_usage = $("#g_gas_usage_num").val() + " kWh every " + $("#g_gas_usage").val();
				d.ge_gas_usage = $("#g_gas_usage_num").val() + " kWh every " + $("#g_gas_usage").val();
			} else if (d.g_usage == "Yes, I know how much I spend") {
				d.g_gas_spend = "I spend £" + $("#g_gas_spend_num").val() + " every " + $("#g_gas_spend").val();
				d.ge_gas_spend = "I spend £" + $("#g_gas_spend_num").val() + " every " + $("#g_gas_spend").val();
			} else {
				d.g_home_type = $("#g_home_type").val();
				d.ge_home_type = $("#g_home_type").val();
				d.e_home_type = $("#g_home_type").val();
				if (d.g_home_type == "House") {
					d.g_house_type = $("#g_house_type").val();
					d.ge_house_type = $("#g_house_type").val();
					d.e_house_type = $("#g_house_type").val();
				} else {
					d.g_flat_type = $("#g_flat_type").val();
					d.ge_flat_type = $("#g_flat_type").val();
					d.e_flat_type = $("#g_flat_type").val();
				}
				d.g_home_built = $("#g_home_built").val();
				d.ge_home_built = $("#g_home_built").val();
				d.e_home_built = $("#g_home_built").val();
				d.g_num_bedrooms = $("#g_num_bedrooms").val();
				d.ge_num_bedrooms = $("#g_num_bedrooms").val();
				d.e_num_bedrooms = $("#g_num_bedrooms").val();
				d.g_num_adults = $("#g_num_adults").val();
				d.ge_num_adults = $("#g_num_adults").val();
				d.e_num_adults = $("#g_num_adults").val();
				d.g_most_enrgy = $("#g_most_enrgy").val();
				d.ge_most_enrgy = $("#g_most_enrgy").val();
				d.e_most_enrgy = $("#g_most_enrgy").val();
			}
		} else {
			d.e_usage = $("#e_usage").val();
			d.ge_usage = $("#e_usage").val();
			d.g_usage = $("#e_usage").val();
			if (d.e_usage == "Yes, I know how much I use in kWh") {
				d.e_electricity_usage = $("#e_electricity_usage_num").val() + " kWh every " + $("#e_electricity_usage").val();
				d.ge_electricity_usage = $("#e_electricity_usage_num").val() + " kWh every " + $("#e_electricity_usage").val();
			} else if (d.e_usage == "Yes, I know how much I spend") {
				d.e_electricity_spend = "I spend £" + $("#e_electricity_spend_num").val() + " every " + $("#e_electricity_spend").val();
				d.ge_electricity_spend = "I spend £" + $("#e_electricity_spend_num").val() + " every " + $("#e_electricity_spend").val();
			} else {
				d.e_home_type = $("#e_home_type").val();
				d.ge_home_type = $("#e_home_type").val();
				d.g_home_type = $("#e_home_type").val();
				if (d.e_home_type == "House") {
					d.e_house_type = $("#e_house_type").val();
					d.ge_house_type = $("#e_house_type").val();
					d.g_house_type = $("#e_house_type").val();
				} else {
					d.e_flat_type = $("#e_flat_type").val();
					d.ge_flat_type = $("#e_flat_type").val();
					d.g_flat_type = $("#e_flat_type").val();
				}
				d.e_home_built = $("#e_home_built").val();
				d.ge_home_built = $("#e_home_built").val();
				d.g_home_built = $("#e_home_built").val();
				d.e_num_bedrooms = $("#e_num_bedrooms").val();
				d.ge_num_bedrooms = $("#e_num_bedrooms").val();
				d.g_num_bedrooms = $("#e_num_bedrooms").val();
				d.e_num_adults = $("#e_num_adults").val();
				d.ge_num_adults = $("#e_num_adults").val();
				d.g_num_adults = $("#e_num_adults").val();
				d.e_most_enrgy = $("#e_most_enrgy").val();
				d.ge_most_enrgy = $("#e_most_enrgy").val();
				d.g_most_enrgy = $("#e_most_enrgy").val();
			}
		}

		d.energy_payment = $("#energy_payment").val();
		d.alert_future = $("#alert_future").val();
		d.first_name = $("#first_name").val();
		d.surname = $("#surname").val();
		d.email_address = $("#email_address").val();
		d.confirm_email = $("#confirm_email").val();
		d.email_alerts = $("#email_alerts").val();
		d.password = $("#password").val();
		d.confirm_password = $("#confirm_password").val();

		var data_string = JSON.stringify(d)
		if ($('#mainForm').valid()) {
			$.ajax({
				'url': 'https://MYDOMAINNAME.com/api/update_user_data',
				'method': 'POST',
				'dataType': 'JSON',
				'data': {
					'id': $('input[name="user_id"]').val(),
					'type': 'mse',
					'data': data_string,
				},
			}).done(function(data) {
				if (data['status'] == 'success') {
					$('body > *').fadeOut('250')
					setTimeout(function() { $('body').append($('<h3>').attr('id', 'done').text('Successfully saved Energy Plan data!')) }, 250)
				}
				else {
					console.log('Error saving data:', data['error'])
					alert('There was an error when saving the energy plan data. Please try again, or contact support.')
				}
			}).error(function(data) {
				console.log('Error saving data:', data['error'])
				alert('There was an error when saving the energy plan data. Please try again, or contact support.')
			})
		}
		else {
			alert('There are errors with the data you entered (or failed to enter), please check them and then try again.')
		}
	}

	/* VALIDATION */

	$("form[id='mainForm']").validate({
		// Specify validation rules
		rules: {
			ignore: ":not(:visible)",
			// The key name on the left side is the name attribute
			// of an input field. Validation rules are defined
			// on the right side
			email_address: {
				required: true,
				email: true
			},
			confirm_email: {
				required: true,
				email: true
			},
			email_alerts: {
				email: true
			},
			postcode: {
				required: true,
				minlength: 6,
				maxlength: 8,
				pattern: /^[a-z0-9]+$/i
			},
			house_no: {
				required: true
			},
			password: {
				required: true,
			},
			confirm_password: {
				required: true,
				equalTo: "#password"
			},
			confirm_email: {
				required: true,
				equalTo: "#email_address"
			},
			ge_gas_usage_num: {
				required: true,
				max: 100000
			},
			ge_electricity_usage_num: {
				required: true,
				max: 100000
			},
			g_gas_usage_num: {
				required: true,
				max: 100000
			},
			e_electricity_usage_num: {
				required: true,
				max: 100000
			},
			ge_gas_spend_num: {
				required: true
			},
			ge_electricity_spend_num: {
				required: true
			},
			g_gas_spend_num: {
				required: true
			},
			e_electricity_spend_num: {
				required: true
			},
			first_name: {
				required: true,
				pattern: /^[a-z\-\s]+$/i
			},
			surname: {
				required: true,
				pattern: /^[a-z\-\s]+$/i
			}
		},
		// Specify validation error messages
		messages: {
			email: "Please enter a valid email address"
		},
		submitHandler: function(form) {
			// do other things for a valid form
			save();
		}

	});

});