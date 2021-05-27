(function(){
	function hjjLayout(){
		let html = document.querySelector('html');
		let userAgent = navigator.userAgent;
		
		html.className = '';
		if(userAgent.indexOf('iPhone') != -1){
			html.classList.add('iPhone');
		}else if(userAgent.indexOf('Android') != -1){
			html.classList.add('Android');
		}else if(userAgent.indexOf('iPad') != -1){
			html.classList.add('iPad');
		}else{
			html.classList.add('pc');
		}
		
		if(window.innerWidth < 640){
			html.classList.add('lt640');
			html.classList.add('lt960');
			html.classList.add('lt1200');
		}else if(window.innerWidth < 960){
			html.classList.add('lt960');
			html.classList.add('lt1200');
			html.classList.add('gt640');
		}else if(window.innerWidth < 1200){
			html.classList.add('gt960');
			html.classList.add('lt1200');
			html.classList.add('gt640');
		}else{
			html.classList.add('gt960');
			html.classList.add('gt1200');
			html.classList.add('gt640');
		}
		
		// rem布局
		let screenWidth = window.innerWidth;
		let danwei = screenWidth/3.75;
		html.style.fontSize = danwei + 'px';
	}
	
	hjjLayout();
	
	window.onresize = function(){
		hjjLayout();
	}
})()