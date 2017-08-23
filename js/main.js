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

