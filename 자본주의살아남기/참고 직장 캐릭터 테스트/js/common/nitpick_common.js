var kakaoSDKKey = '9d284dc8003f36ed54a4b004c351aec8';

//loading 
function showSpin(){
	$(".loading-spin-bg").css('display','flex');
}
function hideSpin(){
	$(".loading-spin-bg").css('display','none');
}


//Native App Bridge
function nativeAppBridge(methodName, params) {
	if (!methodName) { 
		return; 
	}
	//파라미터 첨부시 참고 
//	var params = { 
//		aa: '1234', 
//		bb: 'okok', 
//	}; 
	if (window.ICBOX_APP) {
		console.log("Android native APIs found."); 
		// Call Android interface 
		window.ICBOX_APP.callFromWeb(methodName, JSON.stringify(params)); 
	} else if (window.webkit 
			&& window.webkit.messageHandlers
			&& window.webkit.messageHandlers.ICBOX_APP) { // Call iOS interface 
		console.log("IOS native APIs found."); 
		var iosBody = { 
				methodName: methodName, 
				params: params, 
			}; 
		window.webkit.messageHandlers.ICBOX_APP.postMessage(iosBody); 
	} else { 
			// No Android or iOS interface found 
		console.log("No native APIs found."); 
	} 
}	


