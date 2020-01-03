
const myMonth = ['01','02','03','04','05','06','07','08','09','10','11','12'];

function getTime() {
	const now = document.querySelector('.keydate');
	const date = new Date();
	let nowY = date.getFullYear();
	let nowM = date.getMonth();
	let nowD = date.getDate();
	let nowH = date.getHours();
	let nowMin = date.getMinutes();

	now.innerText = `${nowY}.${myMonth[nowM]}.${nowD < 10 ? `0${nowD}` : nowD} ${nowH < 10 ? `0${nowH}` : nowH}:${nowMin < 10 ? `0${nowMin}` : nowMin}기준`;
}
function init() {
	getTime();
	setInterval(getTime, 6000);
}
init();
