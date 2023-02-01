"use strict";

//    _____          _         ____          _                     _
//   / ____|        | |       / __ \        | |                   | |
//  | |     ___   __| | ___  | |  | |_ __   | |     ___   __ _  __| |
//  | |    / _ \ / _` |/ _ \ | |  | | '_ \  | |    / _ \ / _` |/ _` |
//  | |___| (_) | (_| |  __/ | |__| | | | | | |___| (_) | (_| | (_| |
//   \_____\___/ \__,_|\___|  \____/|_| |_| |______\___/ \__,_|\__,_|

const grigliaEl = document.querySelector(".blocco-grande");
generaGriglia(grigliaEl);

//   ______                _   _
//  |  ____|              | | (_)
//  | |__ _   _ _ __   ___| |_ _  ___  _ __  ___
//  |  __| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
//  | |  | |_| | | | | (__| |_| | (_) | | | \__ \
//  |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/

/**
 * Funzione che genera la la griglia dentro il blocco grande.
 *
 * @param {*} grigliaEl Elemento griglia cioè il blocco grande.
 *
 */
function generaGriglia(griglia) {
	for (let i = 0; i < 100; i++) {
		const bloccoPiccoloEl = document.createElement("div");
		bloccoPiccoloEl.classList.add("blocco-piccolo");
		griglia.append(bloccoPiccoloEl);

		bloccoPiccoloEl.addEventListener("click", function () {
			this.classList.toggle("active");
		});
	}
}
