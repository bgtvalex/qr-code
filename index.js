alert()
const form = document.getElementById('form')
const input = document.getElementById('input')
const qr = document.getElementById('qr')
const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
	const request = `http://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${input.value}`

	const img = `<img src="${request}" alt="QR-code">`
	qr.innerHTML = img
	text.textContent = input.value
	qr.classList.add('open')
	input.value = ''
	console.log('request', request);
	
})