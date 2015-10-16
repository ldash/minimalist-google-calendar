$(function(){
	//---- LOAD ----//
		// defaults
		if (!localStorage["options"]) localStorage["options"] = "{}";
		if (!localStorage["backCLR"]) localStorage["backCLR"] = "#ffffff";
		if (!localStorage["borderCLR"]) localStorage["borderCLR"] = "#BBCCFF";
		if (!localStorage["linkCLR"]) localStorage["linkCLR"] = "#2200cc";
		if (!localStorage["Hcolor"]) localStorage["Hcolor"] = "#bbbbbb";
		if (!localStorage["todayCLR"]) localStorage["todayCLR"] = "#FAD163";
		if (!localStorage["BTNcolor"]) localStorage["BTNcolor"] = "#000000";
		if (!localStorage["BTNborder"]) localStorage["BTNborder"] = "#bbbbbb";
		if (!localStorage["BTNbottom"]) localStorage["BTNbottom"] = "#f9f9f9";
		if (!localStorage["BTNtop"]) localStorage["BTNtop"] = "#e3e3e3";
		if (!localStorage["customCSSval"]) localStorage["customCSSval"] = " ";
		if (!localStorage["EIC_1"]) localStorage["EIC_1"] = "";
		if (!localStorage["EIC_2"]) localStorage["EIC_2"] = "";
		if (!localStorage["EIC_3"]) localStorage["EIC_3"] = "";

	if(localStorage['options']){
		var o = JSON.parse(localStorage['options']);
		// GENERAL
			$("#mcicon").prop('checked', o.mcicon);
			$("#favicon").prop('checked', o.favicon);
			$("#backC").prop('checked', o.backC);
				if ((o.backCLR != null) && (o.backCLR != ""))
					$("#backCLRsub").attr("style","background-color:" + o.backCLR + ";");
			$("#borders").prop('checked', o.borders);
				if ((o.borderCLR != null) && (o.borderCLR != ""))
					$("#borderCLRsub").attr("style","background-color:" + o.borderCLR + ";");
			$("#linkC").prop('checked', o.linkC);
				if ((o.linkCLR != null) && (o.linkCLR != ""))
					$("#linkCLRsub").attr("style","background-color:" + o.linkCLR + ";");
			$("#todayH").prop('checked', o.todayH);
				if ((o.todayCLR != null) && (o.todayCLR != ""))
					$("#todayCLRsub").attr("style","background-color:" + o.todayCLR + ";");
			$("#weekends").prop('checked', o.weekends);
			$("#weekendM").prop('checked', o.weekendM);
			$("#hours").prop('checked', o.hours);
				if ((o.Hcolor != null) && (o.Hcolor != ""))
					$("#Hcolor").attr("style","background-color:" + o.Hcolor + ";");	
				if ((o.Hweight != null) && (o.Hweight != ""))
					$("#Hweight").val(o.Hweight);
				if ((o.Hsize != null) && (o.Hsize != ""))
					$("#Hsize").val(o.Hsize);
			$("#BTN").prop('checked', o.BTN);
				if ((o.BTNcolor != null) && (o.BTNcolor != ""))
					$("#BTNcolorSUB").attr("style","background-color:" + o.BTNcolor + ";");
				if ((o.BTNborder != null) && (o.BTNborder != ""))
					$("#BTNborderSUB").attr("style","background-color:" + o.BTNborder + ";");
				if ((o.BTNbottom != null) && (o.BTNbottom != ""))
					$("#BTNbottomSUB").attr("style","background-color:" + o.BTNbottom + ";");
				if ((o.BTNtop != null) && (o.BTNtop != ""))
					$("#BTNtopSUB").attr("style","background-color:" + o.BTNtop + ";");
			$("#testButton").attr("style","color: " + o.BTNcolor + ";border: 1px solid " + o.BTNborder + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + o.BTNbottom + "),to(" + o.BTNtop + "));");
			$("#corners").prop('checked', o.corners);
			$("#trans").prop('checked', o.trans);
			$("#customCSS").prop('checked', o.customCSS);
			if ((o.customCSSval != null) && (o.customCSSval != ""))
				$("#customCSSval").val(localStorage["customCSSval"]);
		// GOOGLE BAR
			$("#gbarH").prop('checked', o.gbarH);
			$("#gbarO").prop('checked', o.gbarO);
			$("#gbarB").prop('checked', o.gbarB);
			$("#gbar").prop('checked', o.gbar);
			$("#cbar").prop('checked', o.cbar);
				if ((o.c_n_1 != null) && (o.c_n_1 != ""))
					$("#c_n_1").val(o.c_n_1);
				else $("#c_n_1").val("Gmail");
				if ((o.c_u_1 != null) && (o.c_u_1 != ""))
					$("#c_u_1").val(o.c_u_1);
				else $("#c_u_1").val("https://mail.google.com");
				if ((o.c_t_1 != null) && (o.c_t_1 != ""))
					$("#c_t_1").val(o.c_t_1);
				else $("#c_t_1").val("_blank");
				if ((o.c_n_2 != null) && (o.c_n_2 != ""))
					$("#c_n_2").val(o.c_n_2);
				else $("#c_n_2").val("Calendar");
				if ((o.c_u_2 != null) && (o.c_u_2 != ""))
					$("#c_u_2").val(o.c_u_2);
				else $("#c_u_2").val("http://www.google.com/calendar");
				if ((o.c_t_2 != null) && (o.c_t_2 != ""))
					$("#c_t_2").val(o.c_t_2);
				else $("#c_t_2").val("_blank")
				if ((o.c_n_3 != null) && (o.c_n_3 != ""))
					$("#c_n_3").val(o.c_n_3);
				else $("#c_n_3").val("Documents");
				if ((o.c_u_3 != null) && (o.c_u_3 != ""))
					$("#c_u_3").val(o.c_u_3);
				else $("#c_u_3").val("http://docs.google.com");
				if ((o.c_t_3 != null) && (o.c_t_3 != ""))
					$("#c_t_3").val(o.c_t_3);
				else $("#c_t_3").val("_blank")
				if ((o.c_n_4 != null) && (o.c_n_4 != ""))
					$("#c_n_4").val(o.c_n_4);
				else $("#c_n_4").val("Reader");
				if ((o.c_u_4 != null) && (o.c_u_4 != ""))
					$("#c_u_4").val(o.c_u_4);
				else $("#c_u_4").val("http://www.google.com/reader");
				if ((o.c_t_5 != null) && (o.c_t_5 != ""))
					$("#c_t_5").val(o.c_t_5);
				else $("#c_t_5").val("_blank")
				if ((o.c_n_5 != null) && (o.c_n_5 != ""))
					$("#c_n_5").val(o.c_n_5);
				else $("#c_n_5").val("Photos");
				if ((o.c_u_5 != null) && (o.c_u_5 != ""))
					$("#c_u_5").val(o.c_u_5);
				else $("#c_u_5").val("http://picasaweb.google.com");
				if ((o.c_n_6 != null) && (o.c_n_6 != ""))
					$("#c_n_6").val(o.c_n_6);
				else $("#c_n_6").val("Web");
				if ((o.c_u_6 != null) && (o.c_u_6 != ""))
					$("#c_u_6").val(o.c_u_6);
				else $("#c_u_6").val("http://www.google.com");
				if ((o.c_t_6 != null) && (o.c_t_6 != ""))
					$("#c_t_6").val(o.c_t_6);
				else $("#c_t_6").val("_blank")
				$("#cbarM").prop('checked', o.cbarM);
			$("#user").prop('checked', o.user);
			$("#labs").prop('checked', o.labs);
			$("#settings").prop('checked', o.settings);
			$("#help").prop('checked', o.help);
			$("#out").prop('checked', o.out);
		// HEADER
			$("#header").prop('checked', o.header);
			$("#headerS").prop('checked', o.headerS);
			$("#logoH").prop('checked', o.logoH);
			$("#logo").prop('checked', o.logo);
			if ((o.logoSRC != null) && (o.logoSRC != ""))
				$("#logoSRC").val(o.logoSRC);
			else $("#logoSRC").val("http://www.example.com/image.jpg");
			$("#s_all").prop('checked', o.s_all);
			$("#s_button").prop('checked', o.s_button);
			$("#s_link").prop('checked', o.s_link);
		// MAIN
			$("#t_top").prop('checked', o.t_top);
			$("#n_create").prop('checked', o.n_create);
			$("#n_quick").prop('checked', o.n_quick);
			$("#t_today").prop('checked', o.t_today);
			$("#t_nav").prop('checked', o.t_nav);
			$("#t_date").prop('checked', o.t_date);
			$("#t_printI").prop('checked', o.t_printI);
			$("#t_printL").prop('checked', o.t_printL);
			$("#t_refresh").prop('checked', o.t_refresh);
			$("#t_v1").prop('checked', o.t_v1);
			$("#t_v2").prop('checked', o.t_v2);
			$("#t_v3").prop('checked', o.t_v3);
			$("#t_v4").prop('checked', o.t_v4);
			$("#t_v5").prop('checked', o.t_v5);
		// NAVIGATION
			$("#nav").prop('checked', o.nav);
			$("#navO").prop('checked', o.navO);
			//$("#navWC").prop('checked', o.navWC);
			if ((o.navW != null) && (o.navW != ""))
				$("#navW").val(o.navW);
			else $("#navW").val("180");
			$("#n_cal").prop('checked', o.n_cal);
			$("#n_mine").prop('checked', o.n_mine);
			$("#n_linksM").prop('checked', o.n_linksM);
			$("#n_other").prop('checked', o.n_other);
			$("#n_add").prop('checked', o.n_add);
			$("#n_linksO").prop('checked', o.n_linksO);
		localStorage["uncheckedUpdate"] = false;
		$("#EIC_1").val(localStorage["EIC_1"]);
		$("#EIC_2").val(localStorage["EIC_2"]);
		$("#EIC_3").val(localStorage["EIC_3"]);
	}
	//---- END LOAD ----//
	
	//---- SAVE ----//
	function save(){
		localStorage['options'] = JSON.stringify({
			// GENERAL
				"mcicon":$("#mcicon").prop('checked'),
				"favicon":$("#favicon").prop('checked'),
				"backC":$("#backC").prop('checked'),
					"backCLR":localStorage["backCLR"],
				"borders":$("#borders").prop('checked'),
					"borderCLR":localStorage["borderCLR"],
				"linkC":$("#linkC").prop('checked'),
					"linkCLR":localStorage["linkCLR"],
				"todayH":$("#todayH").prop('checked'),
					"todayCLR":localStorage["todayCLR"],
				"weekends":$("#weekends").prop('checked'),
				"weekendM":$("#weekendM").prop('checked'),
				"hours":$("#hours").prop('checked'),
					"Hcolor":localStorage["Hcolor"],
					"Hweight":$("#Hweight").val(),
					"Hsize":$("#Hsize").val(),
				"BTN":$("#BTN").prop('checked'),
					"BTNcolor":localStorage["BTNcolor"],
					"BTNborder":localStorage["BTNborder"],
					"BTNbottom":localStorage["BTNbottom"],
					"BTNtop":localStorage["BTNtop"],
				"corners":$("#corners").prop('checked'),
				"trans":$("#trans").prop('checked'),
				"customCSS":$("#customCSS").prop('checked'),
					"customCSSval":$("#customCSSval").val().replace(/(\r\n|\n|\r)/gm,""),
			// GOOGLE BAR
				"gbarH":$("#gbarH").prop('checked'),
				"gbarO":$("#gbarO").prop('checked'),
				"gbarB":$("#gbarB").prop('checked'),
				"gbar":$("#gbar").prop('checked'),
				"cbar":$("#cbar").prop('checked'),
					"c_n_1":$("#c_n_1").val(),
					"c_u_1":$("#c_u_1").val(),
					"c_t_1":$("#c_t_1").val(),
					"c_n_2":$("#c_n_2").val(),
					"c_u_2":$("#c_u_2").val(),
					"c_t_2":$("#c_t_2").val(),
					"c_n_3":$("#c_n_3").val(),
					"c_u_3":$("#c_u_3").val(),
					"c_t_3":$("#c_t_3").val(),
					"c_n_4":$("#c_n_4").val(),
					"c_u_4":$("#c_u_4").val(),
					"c_t_4":$("#c_t_4").val(),
					"c_n_5":$("#c_n_5").val(),
					"c_u_5":$("#c_u_5").val(),
					"c_t_5":$("#c_t_5").val(),
					"c_n_6":$("#c_n_6").val(),
					"c_u_6":$("#c_u_6").val(),
					"c_t_6":$("#c_t_6").val(),
					"cbarM":$("#cbarM").prop('checked'),
				"user":$("#user").prop('checked'),
				"labs":$("#labs").prop('checked'),
				"settings":$("#settings").prop('checked'),
				"help":$("#help").prop('checked'),
				"out":$("#out").prop('checked'),
			// HEADER
				"header":$("#header").prop('checked'),
				"headerS":$("#headerS").prop('checked'),
				"logoH":$("#logoH").prop('checked'),
				"logo":$("#logo").prop('checked'),
					"logoSRC":$("#logoSRC").val(),
				"s_all":$("#s_all").prop('checked'),
				"s_button":$("#s_button").prop('checked'),
				"s_link":$("#s_link").prop('checked'),
			// MAIN
				"t_top":$("#t_top").prop('checked'),
				"t_today":$("#t_today").prop('checked'),
				"t_nav":$("#t_nav").prop('checked'),
				"t_date":$("#t_date").prop('checked'),
				"t_printI":$("#t_printI").prop('checked'),
				"t_printL":$("#t_printL").prop('checked'),
				"t_refresh":$("#t_refresh").prop('checked'),
				"t_v1":$("#t_v1").prop('checked'),
				"t_v2":$("#t_v2").prop('checked'),
				"t_v3":$("#t_v3").prop('checked'),
				"t_v4":$("#t_v4").prop('checked'),
				"t_v5":$("#t_v5").prop('checked'),
			// NAVIGATION
				"nav":$("#nav").prop('checked'),
				"navO":$("#navO").prop('checked'),
				//"navWC":$("#navWC").prop('checked'),
				"navW":$("#navW").val(),
				"top":$("#top").prop('checked'),
				"n_create":$("#n_create").prop('checked'),
				"n_quick":$("#n_quick").prop('checked'),
				"n_cal":$("#n_cal").prop('checked'),
				"n_mine":$("#n_mine").prop('checked'),
				"n_linksM":$("#n_linksM").prop('checked'),
				"n_other":$("#n_other").prop('checked'),
				"n_add":$("#n_add").prop('checked'),
				"n_linksO":$("#n_linksO").prop('checked'),
		});
		localStorage["customCSSval"] = $("#customCSSval").val();
		localStorage["EIC_1"] = $("#EIC_1").val();
		localStorage["EIC_2"] = $("#EIC_2").val();
		localStorage["EIC_3"] = $("#EIC_3").val();
		$("#announce").attr("style", "");
		$("#refreshEI").attr("style", "");
		$("#refresh").attr("style", "display: block !important;");
	}
	//---- END SAVE ----//
	
	//---- SAVE LISTENERS ----//
	document.getElementById("OPTgen").addEventListener("keyup", save, false);
	document.getElementById("OPTgen").addEventListener("click", save, false);
	document.getElementById("OPTthe").addEventListener("click", save, false);
	document.getElementById("OPTgoo").addEventListener("keyup", save, false);
	document.getElementById("OPTgoo").addEventListener("click", save, false);
	document.getElementById("OPThea").addEventListener("keyup", save, false);
	document.getElementById("OPThea").addEventListener("click", save, false);
	document.getElementById("OPTmai").addEventListener("click", save, false);
	document.getElementById("OPTgat").addEventListener("keyup", save, false);
	document.getElementById("OPTgat").addEventListener("click", save, false);
	document.getElementById("EIC_1").addEventListener("keyup", save, false);
	document.getElementById("EIC_2").addEventListener("keyup", save, false);
	document.getElementById("EIC_3").addEventListener("keyup", save, false);
	var pickers = document.getElementsByClassName("colorPicker");
	for (var i = 0; i < pickers.length; i++) {
		pickers[i].addEventListener("click", save, false);
		pickers[i].addEventListener("keyup", save, false);
	}
	//---- END SAVE LISTENERS ----//
	
	//---- IMAGE PREVIEW ----//
	imagePreview = function(){
			xOffset = -25;
			yOffset = -100;
		$("label").hover(function(e){
			this.t = this.title;
			this.title = "";
			var c = (this.t != "") ? "<br /><span>" + this.t : "" + "</span>";
			$("body").append("<p id='preview'><img src='img/screens/"+ this.getAttribute("for") +".png' alt='Image preview' />"+ c +"</p>");
			$("#preview img")
				.css("max-width", window.innerWidth - 100)
				.css("max-height", window.innerHeight - 100);
			if ($("#preview").width() > (window.innerWidth - e.pageX - 130)) {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX - ($("#preview").width() - (window.innerWidth - e.pageX) + 75)) + "px")
					.fadeIn("fast");
			} else if ($("#preview").height() > (window.innerHeight - e.pageY - 55)) {
				$("#preview")
					.css("top",(e.pageY - ($("#preview").height() + 55)) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		},
		function(){
			this.title = this.t;
			$("#preview").remove();
		});
		$("a.preview").mousemove(function(e){
			if ($("#preview").width() > (window.innerWidth - e.pageX - 100) || $("#preview").height() > (window.innerHeight - e.pageY - 25)) {
				$("#preview")
					.css("top",(e.pageY + 75 - ($("#preview").height() - (window.innerHeight - e.pageY))) + "px")
					.css("left",(e.pageX - 75 - ($("#preview").width() - (window.innerWidth - e.pageX))) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		});
	};
	$(document).ready(function(){
		imagePreview();
	});
	//---- END IMAGE PREVIEW ----//
});

// UPDATE EXAMPLE BUTTON
function updateButton() {
	$("#testButton").attr("style","border: 1px solid #" + localStorage["BTNborder"] + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(#" + localStorage["BTNbottom"] + "),to(#" + localStorage["BTNtop"] + "));");
}

// RESET CUSTOM BUTTONS COLORS
function cButtonReset() {
	localStorage["BTNcolor"] = "#000000";
	localStorage["BTNborder"] = "#bbbbbb";
	localStorage["BTNbottom"] = "#f9f9f9";
	localStorage["BTNtop"] = "#ded5de";
	window.location.reload();
}

//---- EXPORT/IMPORT ----//
function eport(EIid) {
	var prefOut = new Array();
		prefOut[0] = localStorage["options"];
		prefOut[1] = localStorage["borderCLR"];
		prefOut[2] = localStorage["Hcolor"];
		prefOut[3] = localStorage["todayCLR"];
		prefOut[4] = localStorage["BTNcolor"];
		prefOut[5] = localStorage["BTNborder"];
		prefOut[6] = localStorage["BTNbottom"];
		prefOut[7] = localStorage["BTNtop"];
		prefOut[8] = localStorage["customCSSval"];
		prefOut[9] = localStorage["backCLR"];
		prefOut[10] = localStorage["linkCLR"];
	var prefsOut = prefOut[0];	// fencepost
	for (var i = 1; i <= 10; i++) {
		prefsOut += '\n' + prefOut[i];
	}
	document.getElementById(EIid).innerHTML = prefsOut;
	if (EIid == "EIC_3") localStorage["EIC_3"] = prefsOut;	// backup existing to Custom 3
}

function iport(EIid) {
	var prefsIn = document.getElementById(EIid).value;
	var prefIn = prefsIn.split("\n");
		localStorage["options"] = prefIn[0];
		localStorage["borderCLR"] = prefIn[1];
		localStorage["Hcolor"] = prefIn[2];
		localStorage["todayCLR"] = prefIn[3];
		localStorage["BTNcolor"] = prefIn[4];
		localStorage["BTNborder"] = prefIn[5];
		localStorage["BTNbottom"] = prefIn[6];
		localStorage["BTNtop"] = prefIn[7];
		localStorage["customCSSval"] = prefIn[8];
		localStorage["backCLR"] = prefIn[9];
		localStorage["linkCLR"] = prefIn[10];
	window.location.hash = "imps";
	window.location.reload();
}
//---- END EXPORT/IMPORT ----//

// EASTER EGG
function easterEgg() {
	if (!localStorage['easterEgg']) {
		localStorage['easterEgg'] = true;
		$('#easterEgg_off').attr('style','display:none;');
		$('#easterEgg_on').attr('style','display:block;');
	} else {
		localStorage.removeItem('easterEgg');
		$('#easterEgg_on').attr('style','display:none;');
		$('#easterEgg_off').attr('style','display:block;');
	}
}

