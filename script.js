//fixme and switch to currency
$(document).ready(function() {
    console.log("hello world");
   $("#currencySubmit").click(function(e) {
	e.preventDefault();
       var value = $("#currencyInput").val();
       console.log(value);
       var myurl= "http://www.apilayer.net/api/live?access_key=3d2580d0b18edb66521afd59f0d912c1";
	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json);
		console.log(json.quotes.USDARS * value)
		var results = "";
		results += "<p>$" + value + " is equal to<br/>" + (Number(value) * Number(json.quotes.USDARS)).toFixed(2) + " Argentine Pesos</p>"
		$("#currencyResults").html(results);
	}})
   })
})
			     


