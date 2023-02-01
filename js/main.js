//    _____ _       _           _  __      __        _       _     _
//   / ____| |     | |         | | \ \    / /       (_)     | |   | |
//  | |  __| | ___ | |__   __ _| |  \ \  / /_ _ _ __ _  __ _| |__ | | ___  ___
//  | | |_ | |/ _ \| '_ \ / _` | |   \ \/ / _` | '__| |/ _` | '_ \| |/ _ \/ __|
//  | |__| | | (_) | |_) | (_| | |    \  / (_| | |  | | (_| | |_) | |  __/\__ \
//   \_____|_|\___/|_.__/ \__,_|_|     \/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/

"use strict";
const grigliaEl = document.querySelector(".blocco-grande");
const dimensioneGriglia = 100;

//    _____          _         ____          _                     _
//   / ____|        | |       / __ \        | |                   | |
//  | |     ___   __| | ___  | |  | |_ __   | |     ___   __ _  __| |
//  | |    / _ \ / _` |/ _ \ | |  | | '_ \  | |    / _ \ / _` |/ _` |
//  | |___| (_) | (_| |  __/ | |__| | | | | | |___| (_) | (_| | (_| |
//   \_____\___/ \__,_|\___|  \____/|_| |_| |______\___/ \__,_|\__,_|

generaGriglia(grigliaEl, dimensioneGriglia);

//   ______                _   _
//  |  ____|              | | (_)
//  | |__ _   _ _ __   ___| |_ _  ___  _ __  ___
//  |  __| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
//  | |  | |_| | | | | (__| |_| | (_) | | | \__ \
//  |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/

/**
 * Funzione che genera la la griglia dentro il blocco grande.
 *
 * @param {} griglia Elemento griglia cioè il blocco grande.
 * @param {} dimensione Quanti quadrati contiene il blocco grande.
 *
 */
function generaGriglia(griglia, dimensione) {
	const whitelist = [];
	for (let i = 0; i < dimensione; i++) {
		whitelist.push(i + 1);
	}

	for (let i = 0; i < dimensione; i++) {
		const numeroIndex = 0;
		// const randomIndex = generaNumeroCasuale(0, whitelist.length - 1);
		const valoreBloccoPiccolo = whitelist[numeroIndex];

		whitelist.splice(numeroIndex, 1);

		const bloccoPiccoloEl = document.createElement("div");

		bloccoPiccoloEl.append(valoreBloccoPiccolo);

		bloccoPiccoloEl.classList.add("blocco-piccolo");
		griglia.append(bloccoPiccoloEl);

		bloccoPiccoloEl.addEventListener("click", function () {
			this.classList.toggle("active");
			console.log(valoreBloccoPiccolo);
		});
	}
}

/**
 * Funzione che genere un numero random gra 2 valori (valori inclusi).
 *
 * @param {int} min il valore minimo del numero generato
 * @param {int} max il valore massimo del numero generato
 * @returns {int} numero randomico generato tra i valori minimo e massimo
 *
 */
function generaNumeroCasuale(min, max) {
	const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return randomNumber;
}
