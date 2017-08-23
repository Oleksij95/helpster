function checkkalk () {
	var ch1 = document.getElementById('ch1'),
		ch2 = document.getElementById('ch2'),
		ch3 = document.getElementById('ch3'),
		ch4 = document.getElementById('ch4'),
		k = 0;
		if (ch1.checked){
			k = k + 1;
		}
		if (ch2.checked){
			k = k + 1;
		}
		if (ch3.checked){
			k = k + 1;
		}
		if (ch4.checked){
			k = k + 1;
		}
		
	 	document.getElementById('calc').innerHTML = k;
};

function closePanel () {
		$('.LogPastServices').css({
			'display':'none',
		});

		$('.Cars').css({
			'top':'50px',
		});

		$('.UpcomingRecommendedServices').css({
			'top':'500px',
		});
};

var a = 1; 

function openuser() {
	if (a % 2 !== 0){
		$('.openUser').css({
			'display':'block',
		});
		return a +=1; 
	} else { 
		$('.openUser').css({
			'display':'none',
		});
		return a +=1;
	}
};


function Check () {
	var ch4 = document.getElementById('myonoffswitch_4'),
		ch1 = document.getElementById('myonoffswitch'),
		ch2 = document.getElementById('myonoffswitch_2'),
		ch3 = document.getElementById('myonoffswitch_3');

		
		(function () {
		var ch4 = document.getElementById('myonoffswitch_4'),
			ch1 = document.getElementById('myonoffswitch'),
			ch2 = document.getElementById('myonoffswitch_2'),
			ch3 = document.getElementById('myonoffswitch_3');

			if (ch1.checked || ch2.checked || ch3.checked){
				ch4.checked = false;
			}

			if (!ch1.checked && !ch2.checked && !ch3.checked){
				ch4.checked = true;
			}	
		}());
}


function Validation() {
	var name = document.getElementById('Name').value,
		email = document.getElementById('Email').value,
		phone = document.getElementById('Phone').value,
		zipCode = document.getElementById('ZipCode').value,
		adress = document.getElementById('Adress').value,
		pattern = /^[\s]+$/,
		pattern_number = /^[\d]+$/,
		pattern_email = /^[a\@?]+$/,
		pattern_world = /^[\D]+$/; // не цифровой

		if (name == "" || pattern.test(name) || pattern_number.test(name)){
			$('#Name').css({
				'border':'1px solid red',
			});
		}

		if (email == "" || pattern.test(email)){
			$('#Email').css({
				'border':'1px solid red',
			});
		}

		if (phone == "" || pattern.test(phone) || pattern_world.test(phone)){
			$('#Phone').css({
				'border':'1px solid red',
			});
		}

		if (zipCode == "" || pattern.test(zipCode)){
			$('#ZipCode').css({
				'border':'1px solid red',
			});
		}

		if (adress == "" || pattern.test(adress)){
			$('#Adress').css({
				'border':'1px solid red',
			});
		}
};

function ValidationPassrord() {
	var	oldpassword = document.getElementById('OldPassword').value,
		newpassword = document.getElementById('NewPassword').value,
		confirmpassword = document.getElementById('ConfirmPassword').value,
		pattern = /^[\s]+$/;

		if(oldpassword == "" || pattern.test(oldpassword)){
			$('#OldPassword').css({
				'border':'1px solid red',
			});
		}

		if(newpassword.length < 6){
			$('#NewPassword').css({
				'border':'1px solid red',
			});
		}
		if(newpassword !== confirmpassword){
			$('#NewPassword').css({
				'border':'1px solid red',
			})

			$('#ConfirmPassword').css({
				'border':'1px solid red',
			})
		}

		if(confirmpassword == "" || pattern.test(confirmpassword)){
			$('#ConfirmPassword').css({
				'border':'1px solid red',
			});
		}
}

