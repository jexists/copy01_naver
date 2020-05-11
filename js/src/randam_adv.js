// console.log('haha')

const footAdv = document.querySelector('.footadv');
const footAdvLink = footAdv.querySelector('a');
// console.log(footAdvLink);

const sideAdv = document.querySelector('.sideadv');
const sideAdvLink = sideAdv.querySelector('a');
const img_num = 3;
// console.log(sideAdvLink);

// const foot_image = ['adv/foot_adv_01.jpg','adv/foot_adv_02.jpg','adv/foot_adv_03.png'];
// const side_image = ['adv/side_adv_01.jpg','adv/side_adv_02.jpg','adv/side_adv_03.jpg'];
// console.log(image[1])
function Foot_advImage(n){
	const image = new Image();
	let foot_imageUrl = `../img/adv/foot_adv_0${n+1}.jpg`;
	// image.classList.add('bgIamge');
	// footAdvLink.prepend(image);
	footAdvLink.style.backgroundImage = "url(" + foot_imageUrl+ ")";
}

function Side_advImage(n){
	const image = new Image();
	let side_imageUrl = `../img/adv/side_adv_0${n+1}.jpg`;
	sideAdvLink.style.backgroundImage = "url(" + side_imageUrl+ ")";
}

function nRandom(){
	const n = Math.floor(Math.random() * 3);
	return n;
}

function imgFn(){
	const randomN_F = nRandom();
	const randomN_S = nRandom();
	Foot_advImage(randomN_F);
	Side_advImage(randomN_S);
}
imgFn();