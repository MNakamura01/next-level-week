


function populateUFs() {
	const ufSelect = document.querySelector ("select[name=uf]")
	fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
	.then( (res) => {return res.json()})
	.then( states => {
		for (state of states)
			ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
	})
}

	// () => {} = arrow function = fução anonima

populateUFs()

function getCities(event) {
	const citySelector = document.querySelector ("select[name=city]")
	const stateInput = document.querySelector ("input[name=state]")
	const ufValue = event.target.value
	
	const indexOfselectedState = event.target.selectedIndex
	stateInput.value = event.target.options[indexOfselectedState].text

	

	const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
	
	citySelector.innerHTML = '<option value> Select your city </option>'
	citySelector.disabled = true


	fetch(url)
	.then( (res) => {return res.json()})
	.then( cities => {
			for (city of cities)
			citySelector.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
			
			citySelector.disabled = false
	})
}

document
	.querySelector("select[name=uf]") //QUERYSELECTOR = procura no documetno html o elemento entre parênteses.
	.addEventListener("change", getCities ) // EVENTLISTENER = procura por eventos (onclick, change...)
	// () => {} = arrow function = fução anonima