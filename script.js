// Select elements
const amount = document.querySelector("#amount");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const convertBtn = document.querySelector("#convertBtn");
const resultDiv = document.querySelector("#result");

// API endpoint
const API_URL = "https://api.exchangerate-api.com/v4/latest/";

// Fetch exchange rates and update DOM
function calculate() {
    // Get currency codes
    const fromCurrency = from.value;
    const toCurrency = to.value;

    // Make sure amount is a number
    const amountValue = parseFloat(amount.value);

    // Fetch exchange rates
    fetch(`${API_URL}${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            // Get exchange rate
            const exchangeRate = data.rates[toCurrency];

            // Calculate converted amount
            const convertedAmount = (amountValue * exchangeRate).toFixed(2);

            // Update DOM
            resultDiv.innerHTML = `${amountValue} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        });
}

// Event listener for convert button
convertBtn.addEventListener("click", calculate);
