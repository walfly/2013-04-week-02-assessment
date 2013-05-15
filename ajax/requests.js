/*  == Don't worry about this code, it will ensure     ==
    == that your ajax calls are allowed by the browser == */

$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
});

/* ========================================================= */

var url = 'https://api.parse.com/1/classes/tweets';

var tweet = {
  username: "sharksforcheap",
  text: "Hack Reactor is the GREATEST!!!1!"
};

// Write your GET request here
$.ajax(url, {
	type: "GET",
	contentType: "application/JSON",
	data:{order: "-createdAt"},
	success: function(data){
		console.log(data.results[0].username, data.results[0].text);
	}
})

// Write your POST request here
$.ajax(url, {
	type: "POST",
	contentType: "application/JSON",
	data: JSON.stringify(tweet),
	success: function(data){
		console.log(success);
	}
})