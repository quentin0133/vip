function ajouteEvent(objet, typeEvent, nomFonction, typePropagation){
	if (objet.addEventListener){
		objet.addEventListener(typeEvent, nomFonction, typePropagation);
	}
	else if (objet.attachEvent) 		{
		objet.attachEvent('on'+typeEvent, nomFonction);
	}
}

function selectButton() {
	let selectButtonMetier = document.getElementById('SelecteurMetier');
  let checkButtonLiaison = document.getElementById('estLie');
  let checkButtonMariage = document.getElementById('estMarie');

	ajouteEvent (selectButtonMetier, 'change', ajoutFormulaireMetier, false);
  ajouteEvent (checkButtonLiaison, 'click', ajoutFormulaireLiaison, false);
  ajouteEvent (checkButtonMariage, 'click', ajoutFormulaireMariage, false);
}

window.onload=function () {
 selectButton();
}

function ajoutFormulaireMetier()
{
	let selectButton = document.getElementById('SelecteurMetier');
  let selectedValue = selectButton.options[selectButton.selectedIndex].value;
  alert(selectedValue);
}

function ajoutFormulaireLiaison()
{
	let checkButton = document.getElementById('estLie');
  if(checkButton.checked)
    alert("La case est cochée");
  else
    alert("La case n'est plus cochée");
}

function ajoutFormulaireMariage()
{
	let checkButton = document.getElementById('estMarie');
  if(checkButton.checked)
    alert("La case est cochée");
  else
    alert("La case n'est plus cochée");
}
