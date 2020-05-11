
const myMonth = ['01','02','03','04','05','06','07','08','09','10','11','12'];
const myWeek = ['일','월','화','수','목','금','토'];

function getTime() {
	const now = document.querySelector('.keydate');
	const today = document.querySelector('.today a');
	const date = new Date();
	let nowY = date.getFullYear();
	let nowM = date.getMonth();
	let nowD = date.getDate();
	let nowW = date.getDay();
	let nowH = date.getHours();
	let nowMin = date.getMinutes();

	now.innerText = `${nowY}.${myMonth[nowM]}.${nowD < 10 ? `0${nowD}` : nowD} ${nowH < 10 ? `0${nowH}` : nowH}:${nowMin < 10 ? `0${nowMin}` : nowMin} 기준`;

	today.innerText=`${myMonth[nowM]}.${nowD < 10 ? `0${nowD}` : nowD}. (${myWeek[nowW]})`
}
function init() {
	getTime();
	setInterval(getTime, 6000);
}
init();
