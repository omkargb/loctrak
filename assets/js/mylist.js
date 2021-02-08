	setInterval(click, 2000);
	function click()
	{
  		$("#showloc").click();
	}
	
			  
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    curlat.value = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
	lt=position.coords.latitude;		lo=position.coords.longitude;
	curlat.value= lt.toFixed(5);		curlong.value = lo.toFixed(5);

	
}

	function checkloc(){
		
////////////////////////////	if ( (Math.abs(clat-plat)<=3) && (Math.abs(clong-plong)<=3) ) 		// in +-5 range
	var clat = document.getElementById("curlat").value;	var clong = document.getElementById("curlong").value;

		
let lset = [
   [17.0628111, 73.6232525, "Devrukh bus stand"],
   [17.5252885, 73.5149865, "Chiplun bus stand"],
   [17.5304121, 73.5161621, "Chinchnaka chiplun"],
   [16.9918477, 73.2955975, "Ratnagiri bus stand"],
   [17.1693533, 73.5341472, "Sangameshwar bus stand संगमेश्वर बसस्थानक "],
   //chiplun sangameshwar road
   [17.5164226, 73.5092107, "Pag पाग "],
   [17.5116301, 73.5040991, "Kapsal कापसाळ "],
   [17.4935874, 73.5080513, "Kamthe hospital कामथे "],
   [17.4775470, 73.5149224, "Kamthe station कामथे स्टेशन " ],
   [17.4355965, 73.5294640, "Kondamala कोंडमळा "],
   [17.4148539, 73.5389332, "Sawarde सावर्डे "],
   [17.4075672, 73.5393916, "Dervan fata डेरवण फाटा "],
   [17.3871676, 73.5285910, "hotel pacific हॉटेल पसिफिक "],
   [17.3629735, 73.5291838, "Asurde असुर्डे "],
   [17.3145369, 73.5235431, "Aaravali आरवली "],
   [17.2670166, 73.5460183, "Tural तुरळ "],
   [17.2232294, 73.5454805, "Golavali fata गोळवली फाटा "],
   [17.2186857, 73.5457782, "Dhamni धामणी "],
   [17.1999117, 73.5466114, "Sangameshvar rly stn संगमेश्वर रेल्वे स्टेशन "],
   [17.1823239, 73.5465631, "Shastri pool शास्त्री पूल "],
   //sangameshwar bavnadi road
   [17.1605423, 73.4948421, "Kurdhunda कुरधुंडा "],
   [17.1373828, 73.4919460, "kolambe कोळंबे "],
   [17.1101953, 73.4528739, "Vandri वांद्री "],
   //devrukh bavnadi road
   [17.0708893, 73.6153336, "Sahyadrinagar सह्याद्रीनगर "],
   [17.0564910, 73.6199407, "Maitri pump मैत्री पंप  "],
   [17.0623675, 73.6060180, "Patgaon nursery पाटगाव नर्सरी "],
   [17.0530655, 73.5852758, "Vashi fata वाशी फाटा "],
   [17.0509397, 73.5705726, "Ambav college आंबव कॉलेज "],
   [17.0515814, 73.5684563, "Ambav khind आंबव कॉलेज "],
   [17.0448243, 73.5409721, "Nive sahaan  निवे सहाण "],
   [17.0449317, 73.5353780, "Nive निवे "],
   [17.0478320, 73.5260157, "Nagzari temple नागझरी मंदिर "],
   [17.0492591, 73.5134201, "Tulsani तुळसणी"],
   [17.0464578, 73.5009572, "Wayangane fata वायंगणे फाटा "],
   [17.0582892, 73.4922444, "Ghodavali fata घोडवली फाटा "],
   [17.0629210, 73.4745572, "Pangari mandir पांगरी "],
   //bavnadi ratnagiri road
   [17.0652316, 73.4516498, "Bav nadi बावनदी "],
   [17.0522052, 73.4343942, "Kovaje vathar कोवजे वठार"],
   [17.0401853, 73.4219356, "Nivali fata निवळी फाटा "],
   [17.0151490, 73.4058789, "Hatkhamba हातखंबा "],
   [16.9980558, 73.3578452, "Railway station रत्नागिरी रेल्वे स्टेशन रोड "],
   [16.9956132, 73.3307197, "JK files जेके फाईल "],
   [16.9902717, 73.3126410, "Maruti mandir मारुती मंदीर "]
];

for (let i = 0; i < lset.length ; i++) 		//no of locations
{
   for (let j = 0; j < 3; j++) 	//no of properties
   {
		if((Math.abs(clat-(lset[i][j]))<=0.003) && (Math.abs(clong-(lset[i][j+1]))<=0.003))
		{
			var temploc=lset[i][j+2];

			document.getElementById("lstat").innerHTML = temploc;
		    //console.log("REACHED : "+temploc);
		} 
		else
		{
			document.getElementById("lstat").innerHTML = "--";
			console.log("--");
		}
   }
}
}

