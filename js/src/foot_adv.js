// console.log('haha')

const footAdv = document.querySelector('.footadv');
const footAdvLink = footAdv.querySelector('a');
// console.log(footAdvLink);
const img_num = 3;

const image = ['adv/foot_adv_01.jpg','adv/foot_adv_02.jpg','adv/foot_adv_03.png']
// console.log(image[1])
function advImage(n){
	const image = new Image();
	let imageUrl = `../../img/adv/foot_adv_0${n+1}.jpg`;
	// image.classList.add('bgIamge');
	// footAdvLink.prepend(image);
	footAdvLink.style.backgroundImage = "url(" + imageUrl+ ")"
}

function nRandom(){
	const n = Math.floor(Math.random() * 3);
	return n;
}

function imgFn(){
	const randomN = nRandom();
	advImage(randomN);
}
imgFn();