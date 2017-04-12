function animation(){
	var container = document.getElementById('container')
	var first = document.querySelectorAll('.slider')[0]
	first.classList.toggle('closed');
	setTimeout(function(){
		container.appendChild(first)
		first.classList.toggle('closed');
	},500) //等动画执行完成再操作
}
setInterval(animation,2000)  