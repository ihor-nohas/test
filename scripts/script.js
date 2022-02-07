document.addEventListener('DOMContentLoaded', function(){
	let items = function () {
		let itemHeader = document.querySelectorAll('.item-header');
		let selectItem = document.querySelectorAll('.select-item');
		/*Script for selectors*/
		itemHeader.forEach(item=>{
			item.addEventListener ('click', function() {
				this.parentElement.classList.toggle('is-active');
				let text = this.querySelectorAll ('.select-current');
				text.forEach(item=>{
					item.innerText = item.innerText == "Select" ? "No selected element" : "Select";
					item.style.color = item.innerText !== "Select" ? "rgb(153, 153, 153)" : "rgb(51, 51, 51)";				
				});
			});
		});
		selectItem.forEach(item => {
			item.addEventListener ('click', selectChoose);
		});
		function selectChoose () {
			let text = this.innerText;
			let str = text.toLowerCase();
			let select = this.closest ('.items');
			let currentText = this.closest ('.items').querySelector('.select-current');
			text = text.charAt(0) + str.slice(1);
			currentText.innerText = text;
			select.classList.remove ('is-active');
		}
	};
	items ();
});