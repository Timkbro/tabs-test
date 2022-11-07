// Табы
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);
		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}
document.querySelector('.tabs__nav-btn').click();
// Добавление значения инпута в список 
// Горный велосипед
function addLi() {
	let txtVal = document.getElementById('txtVal').value
	if (txtVal) {
		listNode = document.getElementById('list'),
		liNode = document.createElement('LI')
		txtNode = document.createTextNode(txtVal);
		liNode.appendChild(txtNode);
		listNode.appendChild(liNode);
	}
}
// Женский велосипед
function addList() {
	let txtValidator = document.getElementById('txtValidator').value
	if (txtValidator) {
		listNode = document.getElementById('list2'),
		liNode = document.createElement('LI')
		txtNode = document.createTextNode(txtValidator);
		liNode.appendChild(txtNode);
		listNode.appendChild(liNode);
	}
}
// Аккордион
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}