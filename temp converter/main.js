const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

function convert(e){
    const inputValue = +e.target.value;

    switch (e.target.name) {
        case 'celsius':
            fahrenheit.value = (inputValue * 1.8 + 32).toFixed(2);
            kelvin.value = (inputValue + 273.32).toFixed(2);
            break;

        case 'fahrenheit':
            celsius.value = ((inputValue - 32) / 1.8).toFixed(2);
            kelvin.value = ((inputValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case 'kelvin':
            celsius.value = (inputValue - 273.32).toFixed(2);
            fahrenheit.value = ((inputValue - 273.32) * 1.8 + 32).toFixed(2);
            break;

        default:
            break;
    }
}