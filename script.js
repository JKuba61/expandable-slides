const body = document.querySelector(`body`)
const cards = document.querySelectorAll(`.card`)

function showCard() {
	cards.forEach(card => {
		card.classList.remove(`active`)
		this.classList.add(`active`)
		body.setAttribute('data-bg', this.getAttribute('data-color'))
	})
}
cards.forEach(card => card.addEventListener(`click`, showCard))
