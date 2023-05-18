let slider = document.getElementById('slider')
let item = slider.querySelector('#item')
let result = document.getElementById('result')
result.innerHTML = '0%'

let sliderRect = slider.getBoundingClientRect()

item.onmousedown = function(e) {

	item.ondragstart = function() {
		return false
	}

	let itemRect = item.getBoundingClientRect()
	let moveX = e.pageX - itemRect.left

	let rightEnd = slider.offsetWidth - item.offsetWidth

	document.onmousemove = function(e) {

		let newLeft = e.pageX - sliderRect.left - moveX
		if(newLeft > rightEnd) {
			newLeft = rightEnd
		}
		if(newLeft < 0) {
			newLeft = 0
		}
		item.style.left = newLeft + 'px'
		result.style.left = newLeft + 'px'
		result.innerHTML = Math.round(newLeft / rightEnd * 100) + '%'
	};

	document.onmouseup = function() {
		document.onmousemove = null
		document.onmouseup = null
	}

}