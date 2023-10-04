function convert()
{
    const celsiusInput = document.getElementById("celsius");
	const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");

	celsiusInput.addEventListener("input", function() {
	  const celsiusTemp = parseFloat(celsiusInput.value);
	  const fahrenheitTemp = (celsiusTemp * (9/5)) + 32;
      const kelvinTemp = (celsiusTemp+273);

	  if (!isNaN(fahrenheitTemp) && !isNaN(kelvinTemp)) {
	    fahrenheitInput.value = fahrenheitTemp.toFixed(2);
        kelvinInput.value = kelvinTemp.toFixed(2);
	  }
	  else {
	    fahrenheitInput.value = "";
        kelvinInput.value= "";
	  }
	});

	fahrenheitInput.addEventListener("input", function() {
	  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
	  const celsiusTemp = (fahrenheitTemp - 32) * (5/9);
      const kelvinTemp = (celsiusTemp +273);

	  if (!isNaN(celsiusTemp) && !isNaN(kelvinTemp)) {
	    celsiusInput.value = celsiusTemp.toFixed(3);
        kelvinInput.value = kelvinTemp.toFixed(3);
	  }
	  else {
	    celsiusInput.value = "";
        kelvinInput.value= "";
	  }
	});
    
    kelvinInput.addEventListener("input", function() {
	  const kelvinTemp = parseFloat(kelvinInput.value);
      const celsiusTemp = parseFloat(kelvin-273);
	  const fahrenheitTemp = (celsiusTemp * (9/5)) + 32;

	  if (!isNaN(fahrenheitTemp) && !isNaN(celsiusTemp) ) {
	    fahrenheitInput.value = fahrenheitTemp.toFixed(3);
        celsiusInput.value = celsiusTemp.toFixed(3);
	  }
	  else {
	    fahrenheitInput.value = "";
        celsiusInput.value = "";
	  }
	});

}