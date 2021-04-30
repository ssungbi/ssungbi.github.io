function calTestResult(options) {
	var resultStr = "";
	for (var i = 0; i < options.length; i++) {
		switch (i) {
		case 0:
			if (options[i] > 4) {
				resultStr += "I";
			} else {
				resultStr += "E";
			}
			break;
		case 1:
			if (options[i] > 4) {
				resultStr += "N";
			} else {
				resultStr += "S";
			}
			break;
		case 2:
			if (options[i] > 4) {
				resultStr += "F";
			} else {
				resultStr += "T";
			}
			break;
		case 3:
			if (options[i] > 4) {
				resultStr += "P";
			} else {
				resultStr += "J";
			}
			break;
		}
	}
	return resultStr;
}
function calTestResultMC(options) {
	var resultStr = "";
	for (var i = 0; i < options.length; i++) {
		switch (i) {
		case 0:
			if (options[i] <= 4) {
				resultStr += "I";
			} else {
				resultStr += "E";
			}
			break;
		case 1:
			if (options[i] <= 4) {
				resultStr += "N";
			} else {
				resultStr += "S";
			}
			break;
		case 2:
			if (options[i] <= 4) {
				resultStr += "F";
			} else {
				resultStr += "T";
			}
			break;
		case 3:
			if (options[i] <= 4) {
				resultStr += "P";
			} else {
				resultStr += "J";
			}
			break;
		}
	}
	return resultStr;
}
function calTestResultHyundai(options) {
	var resultStr = "";
	var resultStrOpt = "";
	var result = [2];
	for (var i = 0; i < options.length; i++) {
		switch (i) {
		case 0:
			if (options[i] > 4) {
				resultStr += "I";
			} else {
				resultStr += "E";
			}
			break;
		case 1:
			if (options[i] > 4) {
				resultStr += "N";
			} else {
				resultStr += "S";
			}
			break;
		case 2:
			if (options[i] > 4) {
				resultStr += "F";
			} else {
				resultStr += "T";
			}
			break;
		case 3:
			if (options[i] > 4) {
				resultStr += "P";
			} else {
				resultStr += "J";
			}
			break;
		case 4:
			if (options[i] > 4) {
				resultStrOpt = "B";
			} else {
				resultStrOpt = "A";
			}
			break;
		}
	}
	result[0] = resultStr;
	result[1] = resultStrOpt;
	return result;
}
//콤마찍기
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
