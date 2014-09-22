(function(func) {
    var scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
    scr.onload = function() {
        func(jQuery.noConflict(true));
    };
    document.body.appendChild(scr);
    var scr = document.createElement("script");
    scr.src = "https://na2hiro.github.io/Kifu-for-JS/src/kifuforjs.js";
    scr.onload = function() {
//        func(jQuery.noConflict(true));
		Kifu.settings.ImageDirectoryPath = "https://na2hiro.github.io/Kifu-for-JS/images";
		var target = $("#KifuR");
		var targetId, kifuPath;
		if(target.length>0){
			target.replaceWith("<div id='KifuR'></div>");
			targetId="KifuR";
			kifuPath = so.variables.kifu.replace(/\.Z$/g, "");
		}
		Kifu.load(kifuPath, targetId);
    };
    document.body.appendChild(scr);
	var link = document.createElement('link');
	link.type='text/css';
	link.href='https://na2hiro.github.io/Kifu-for-JS/css/kifuforjs.css';
	link.rel='stylesheet';
	document.getElementsByTagName('head')[0].appendChild(link);
})(function($) {
    console.log($().jquery);
});