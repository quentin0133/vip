function ajouteEvent(objet, typeEvent, nomFonction, typePropagation){
	if (objet.addEventListener){
		objet.addEventListener(typeEvent, nomFonction, typePropagation);
	}
	else if (objet.attachEvent) 		{
		objet.attachEvent('on'+typeEvent, nomFonction);
	}
}

function selectButton() {
	let checkButtonActeur = document.getElementById('estActeur');
	let checkButtonMannequin = document.getElementById('estMannequin');
	let checkButtonChanteur = document.getElementById('estChanteur');

  let checkButtonLiaison = document.getElementById('estLie');
	let checkButtonSepare = document.getElementById('estSepare');
  let checkButtonMariage = document.getElementById('estMarie');
	let checkButtonDivorce = document.getElementById('estDivorce');

	ajouteEvent (checkButtonActeur, 'click', ajoutFormulaireActeur, false);
	ajouteEvent (checkButtonMannequin, 'click', ajoutFormulaireMannequin, false);
	ajouteEvent (checkButtonChanteur, 'click', ajoutFormulaireChanteur, false);

  ajouteEvent (checkButtonLiaison, 'click', ajoutFormulaireLiaison, false);
	ajouteEvent (checkButtonSepare, 'click', ajoutFormulaireSepare, false);
  ajouteEvent (checkButtonMariage, 'click', ajoutFormulaireMariage, false);
	ajouteEvent (checkButtonDivorce, 'click', ajoutFormulaireDivorce, false);
}

window.onload = function () {
 selectButton();
}

window.onmousedown = function (e) {
    var el = e.target;
    if (el.tagName.toLowerCase() == 'option' && el.parentNode.hasAttribute('multiple')) {
        e.preventDefault();

        // toggle selection
        if (el.hasAttribute('selected'))
					el.removeAttribute('selected');
        else
					el.setAttribute('selected', '');

        // hack to correct buggy behavior
        var select = el.parentNode.cloneNode(true);
        el.parentNode.parentNode.replaceChild(select, el.parentNode);
    }
}

function ajoutFormulaireActeur() {
	let checkButton = document.getElementById('estActeur');
	let form = document.getElementById('formActeur');
	if(checkButton.checked)
		form.style.display = "inline";
	else
		form.style.display = "none";
}

function ajoutFormulaireMannequin() {
	let checkButton = document.getElementById('estMannequin');
	let form = document.getElementById('formMannequin');
	if(checkButton.checked)
		form.style.display = "inline";
	else
		form.style.display = "none";
}

function ajoutFormulaireChanteur() {
	let checkButton = document.getElementById('estChanteur');
	let form = document.getElementById('formChanteur');
	if(checkButton.checked)
		form.style.display = "inline";
	else
		form.style.display = "none";
}

function ajoutFormulaireLiaison()
{
	let checkButton = document.getElementById('estLie');
	let form = document.getElementById('formLie');
	let dateLiaison = document.getElementById('dateLiaison');
	let cause = document.getElementById('causeSeparation');
	if(checkButton.checked) {
		form.style.display = "inline";
		dateLiaison.required = true;
	}
	else {
		form.style.display = "none";
		dateLiaison.required = false;
		cause.required = false;
	}
}

function ajoutFormulaireSepare()
{
	let checkButton = document.getElementById('estSepare');
	let form = document.getElementById('formSepare');
	let cause = document.getElementById('causeSeparation');
	if(checkButton.checked) {
		form.style.display = "inline";
		cause.required = true;
	}
	else {
		form.style.display = "none";
		cause.required = false;
	}
}

function ajoutFormulaireMariage()
{
	let checkButton = document.getElementById('estMarie');
	let form = document.getElementById('formMariage');
	let lieu = document.getElementById('lieuMariage');
	let dateMariage = document.getElementById('dateMariage');
	let dateDivorce = document.getElementById('dateDivorce');
	let cause = document.getElementById('causeDivorce');
	if(checkButton.checked) {
		form.style.display = "inline";
		lieu.required = true;
		dateMariage.required = true;
		dateDivorce.required = true;
		cause.required = true;
	}
	else {
		form.style.display = "none";
		lieu.required = false;
		dateMariage.required = false;
		dateDivorce.required = false;
		cause.required = false;
	}
}

function ajoutFormulaireDivorce()
{
	let checkButton = document.getElementById('estDivorce');
	let form = document.getElementById('formDivorce');
	let dateDivorce = document.getElementById('dateDivorce');
	let cause = document.getElementById('causeDivorce');
	if(checkButton.checked) {
		form.style.display = "inline";
		dateDivorce.required = true;
		cause.required = true;
	}
	else {
		form.style.display = "none";
		dateDivorce.required = false;
		cause.required = false;
	}
}
