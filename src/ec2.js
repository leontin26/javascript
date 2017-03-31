function citeste(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	
	var coef = [a, b, c];
	
	return coef;
}

// -----------------------------------------------------

function calcul_delta(coeficient){
	return coeficient[1] * coeficient[1] - 4 * coeficient[0] * coeficient[2];
}


// -----------------------------------------------------

function calcul_radacini(coef, delta){
var x1_re;
var x1_im;
var x2_re;
var x2_im; 
if (delta >= 0) {
		 x1_re = (-coef[1] - Math.sqrt(delta)) / (2 * coef[0]);
		 x1_im = 0;
		 x2_re = (-coef[1] - Math.sqrt(delta)) / (2 * coef[0]);
		 x2_im = 0;
	}
	else {
		 x1_re = (-coef[1]) / (2 * coef[0]);
		 x1_im = - Math.sqrt(-delta) / (2 * coef[0]);
		 x2_re = (-coef[1] ) / (2 * coef[0]);
		 x2_im = + Math.sqrt(-delta) / (2 * coef[0]);
	}
return [x1_re, x1_im, x2_re, x2_im];
}
// -----------------------------------------------------
function afiseaza(radacini){
	if (radacini[1] >= 0)
		document.getElementById("x1").innerHTML = radacini[0].toString() + " + " + radacini[1].toString() + " i";
	else
		document.getElementById("x1").innerHTML = radacini[0].toString() + radacini[1].toString() + " i";
	if (radacini[3] >= 0)
		document.getElementById("x2").innerHTML = radacini[2].toString() + " + " + radacini[3].toString() + " i";
	else
		document.getElementById("x2").innerHTML = radacini[2].toString() + radacini[3].toString() + " i";
}

// -----------------------------------------------------
function rezolva()
{
	
	var coef = citeste();
	var delta = calcul_delta(coef);
	var radacini = calcul_radacini(coef, delta);
	afiseaza(radacini);
	
}


