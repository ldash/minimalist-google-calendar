	//---- PROCESS URL HASHES ----//
	var hash = window.location.hash.substr(1);
	document.getElementById("refresh").setAttribute("style","");

	if (hash == "update") {
		document.getElementById("nge").setAttribute("class", "current");
		document.getElementById("OPTnge").setAttribute("style", "display: block;");
		document.getElementById("updated").setAttribute("style", "");
		last = "nge";
	} else if (hash == "imps") {
		document.getElementById("imp").setAttribute("class", "current");
		document.getElementById("OPTimp").setAttribute("style", "display: block;");
		$("#announce").attr("style", "");
		document.getElementById("refreshEI").setAttribute("style","display: block;");
		last = "imp";
	} else if (hash == null || hash == "") {
		document.getElementById("gen").setAttribute("class", "current");
		document.getElementById("OPTgen").setAttribute("style", "display: block;");
		last = "gen";
	} else {
		document.getElementById(hash).setAttribute("class", "current");
		document.getElementById("OPT" + hash).setAttribute("style", "display: block;");
		last = hash;
	}
	//---- END PROCESS URL HASHES ----//

