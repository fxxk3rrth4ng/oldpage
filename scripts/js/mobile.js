var filter = "win16|win32|win64|mac|macintel|Linux x86_64";
if(navigator.platform){
	if(filter.indexOf(navigator.platform.toLowerCase())<0){
		location.href = "/scripts/htmls/mobile.html"
	}
}