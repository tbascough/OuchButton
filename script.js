let hp = 100
const ouch = document.getElementById('ouch')
let audio1 = new Audio()
audio1.src = 'audio/ouch.mp3'
let playAgain = document.getElementById('playAgain')


function restart(){
	hp = 100
	healthbar.style.width = "100%"
	document.getElementById("healthbar").innerHTML = hp
	ouch.style.display = "block"
	playAgain.style.display = "none"

}
function mover(xMove, yMove){
		ouch.style.right = `${xMove}%`
		ouch.style.top = `${yMove}%`
		
}		
function clickbutton(){
	document.getElementById("healthbar").innerHTML = hp
	if (hp>10){
		hp = hp - 10
		console.log('HIT', hp)
		healthbar.style.width = hp+"%"
		var randomX = Math.floor(Math.random() * 100)
		var randomY = Math.floor(Math.random() * 100)
		mover(randomX, randomY)
		audio1.load();
		audio1.play();
	} else {
		hp = 0
		healthbar.style.width = hp+"%"
		playAgain.style.display = "flex"
		ouch.style.display = "none"

	}
}
window.onload = function(){
	ouch.style.display = "block"
	playAgain.style.display = "none"
	ouch.style.position = "absolute"
	ouch.style.top = "30%"
	ouch.style.right = "50%"
	ouch.style.transform = "translate(50%,-50%)"
}










// function test1(){
// 	let first = document.getElementById("test");
// 	console.log(first);
// }

// let test2 = function test2(){
// 	document.getElementById("test").setAttribute("class","class2");
// }



// // let sentence = "this is a sentence";

// // let test3 = (sentence) => {
// // 	document.getElementById("test").innerHTML = test;
// // }

// test1()
// test2()
// // test3()
