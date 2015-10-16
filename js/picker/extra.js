		//---- COLOR PICKERS ----//
		(function($){
			var initLayout = function() {
				$('#backCLR').ColorPicker({
					color: localStorage["backCLR"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#backCLR div').css('backgroundColor', '#' + hex);
						localStorage["backCLR"] = "#" + hex;
					}
				});
				$('#borderCLR').ColorPicker({
					color: localStorage["borderCLR"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#borderCLR div').css('backgroundColor', '#' + hex);
						localStorage["borderCLR"] = "#" + hex;
					}
				});
				$('#linkCLR').ColorPicker({
					color: localStorage["linkCLR"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#linkCLR div').css('backgroundColor', '#' + hex);
						localStorage["linkCLR"] = "#" + hex;
					}
				});
				$('#Hcolor').ColorPicker({
					color: localStorage["Hcolor"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#Hcolor div').css('backgroundColor', '#' + hex);
						localStorage["Hcolor"] = "#" + hex;
					}
				});
				$('#todayCLR').ColorPicker({
					color: localStorage["todayCLR"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#todayCLR div').css('backgroundColor', '#' + hex);
						localStorage["todayCLR"] = "#" + hex;
					}
				});
				$('#BTNcolor').ColorPicker({
					color: localStorage["BTNcolor"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#BTNcolor div').css('backgroundColor', '#' + hex);
						$('#testButton').css('color', '#' + hex);
						localStorage["BTNcolor"] = "#" + hex;
					}
				});
				$('#BTNborder').ColorPicker({
					color: localStorage["BTNborder"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#BTNborder div').css('backgroundColor', '#' + hex);
						$('#testButton').css('border-color', '#' + hex);
						localStorage["BTNborder"] = "#" + hex;
					}
				});
				$('#BTNbottom').ColorPicker({
					color: localStorage["BTNbottom"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#BTNbottom div').css('backgroundColor', '#' + hex);
						$('#testButton').css('background', '-webkit-gradient(linear,0% 40%,0% 70%,from(#' + hex + '),to(' + top + '))');
						bottom = "#" + hex;
						localStorage["BTNbottom"] = "#" + hex;
					}
				});
				$('#BTNtop').ColorPicker({
					color: localStorage["BTNtop"],
					onShow: function (colpkr) {
						$(colpkr).fadeIn(500);
						return false;
					},
					onHide: function (colpkr) {
						$(colpkr).fadeOut(500);
						return false;
					},
					onChange: function (hsb, hex, rgb) {
						$('#BTNtop div').css('backgroundColor', '#' + hex);
						$('#testButton').css('background', '-webkit-gradient(linear,0% 40%,0% 70%,from(' + bottom + '),to(#' + hex + '))');
						top = "#" + hex;
						localStorage["BTNtop"] = "#" + hex;
					}
				});
			};
			EYE.register(initLayout, 'init');
		})(jQuery)
		//---- END COLOR PICKERS ----//
		// NAVIGATION HANDLER
		var last = "gen";
		function navigate(link) {
			$("#OPT" + last).attr("style", "");
			$("#OPT" + link).attr("style", "display: block;");
			//document.getElementById("OPT" + link).scrollTop = 0;
			$("#" + last).attr("class", "");
			$("#" + link).attr("class", "current");
			//document.getElementById("OPTside").scrollTop = 0;
			last = link;
		}

