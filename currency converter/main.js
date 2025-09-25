const revBtn = document.getElementById('revbtn');
const hero = document.querySelector('.hero');

const heroCon = document.querySelector('.hero-content');
const up = document.querySelector('.up');
const fromSel = document.getElementById("fromCurrency");
const toSel = document.getElementById("toCurrency");
const fromFlag = document.getElementById("fromflag");
const toFlag = document.getElementById("toflag");
const mrates = document.getElementById("mrates");

revBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    up.classList.toggle('show');
    hero.classList.toggle('shrink');
    revBtn.classList.add('hidden');
});

heroCon.addEventListener('click', () => {
    if (up.classList.contains('show')) {
        hero.classList.remove('shrink');
        up.classList.remove('show');
        revBtn.classList.remove('hidden');
    }
});


async function loadCurrencies() {

    const res = await fetch("https://api.frankfurter.app/currencies");
    const data = await res.json();

    //     const resp = await fetch(`https://api.frankfurter.app/latest?amount=${fromVal}&from=${fromCur}&to=${toCur}`);
    //   const datap = await resp.json();

    // Map currency codes to country codes for flags
    const flagMap = {
        AUD: "au", // Australia
        BGN: "bg", // Bulgaria
        BRL: "br", // Brazil
        CAD: "ca", // Canada
        CHF: "ch", // Switzerland
        CNY: "cn", // China
        CZK: "cz", // Czech Republic
        DKK: "dk", // Denmark
        EUR: "eu", // European Union
        GBP: "gb", // United Kingdom
        HKD: "hk", // Hong Kong
        HUF: "hu", // Hungary
        IDR: "id", // Indonesia
        ILS: "il", // Israel
        INR: "in", // India
        ISK: "is", // Iceland
        JPY: "jp", // Japan
        KRW: "kr", // South Korea
        MXN: "mx", // Mexico
        MYR: "my", // Malaysia
        NOK: "no", // Norway
        NZD: "nz", // New Zealand
        PHP: "ph", // Philippines
        PLN: "pl", // Poland
        RON: "ro", // Romania
        SEK: "se", // Sweden
        SGD: "sg", // Singapore
        THB: "th", // Thailand
        TRY: "tr", // Turkey
        USD: "us", // United States
        ZAR: "za"  // South Africa
    };

    //      const [currency, value] = Object.entries(datap.rates)[0];
    //   mrates.textContent = `1 ${fromCur} = ${value / fromVal} ${currency}`;



    // Fill both selects
    Object.entries(data).forEach(([code]) => {
        const option1 = document.createElement("option");
        option1.value = code;
        option1.textContent = `${code}`;
        fromSel.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = code;
        option2.textContent = `${code}`;
        toSel.appendChild(option2);
    });

    // (Optional) Set default selections
    // fromSel.value = "USD";
    // toSel.value = "EUR";

    // Show flag when currency changes
    function updateFlag(selectEl, flagEl) {
        const code = selectEl.value;       // e.g. "USD"
        const country = flagMap[code];     // e.g. "us"

        // Clear out anything inside the flag container first
        flagEl.innerHTML = "";

        if (country) {
            const img = document.createElement("img"); // create <img>
            img.src = `https://flagcdn.com/48x36/${country}.png`;
            img.alt = `${code} flag`;
            img.width = 48; // optional, matches CDN size
            img.height = 36; // optional

            flagEl.appendChild(img); // put image inside container
            console.log("Inserted flag for:", code, "->", img.src);
        } else {
            console.log("No flag found for:", code);
        }
    }



    fromSel.addEventListener("change", () => updateFlag(fromSel, fromFlag));
    toSel.addEventListener("change", () => updateFlag(toSel, toFlag));

    // Set defaults + show default flags
    fromSel.value = "USD";
    toSel.value = "EUR";
    updateFlag(fromSel, fromFlag);
    updateFlag(toSel, toFlag);

    console.log("Currencies loaded:", data);



    // const fromAmt = document.getElementById("fromcur");
    // const toAmt = document.getElementById("tocur");
    const drates = document.getElementById("mrates");


    let amt = 1;
    const from = fromSel.value;
    const to = toSel.value;

    async function showRate() {
        const from = fromSel.value;
        const to = toSel.value;
        const resp = await fetch(
            `https://api.frankfurter.app/latest?amount=${amt}&from=${from}&to=${to}`
        );
        const dataa = await resp.json();

        const frate = Object.values(dataa.rates);

        const disp = document.createElement('p');

        disp.innerHTML = `1 ${from} = ${frate} ${to}`
        // toAmt.value = data.rates[to];
        drates.innerHTML = '';
        drates.appendChild(disp);
    }

    const resp = await fetch(
        `https://api.frankfurter.app/latest?amount=${amt}&from=${from}&to=${to}`
    );
    const dataa = await resp.json();

    const frate = Object.values(dataa.rates);

    const disp = document.createElement('p');

    disp.innerHTML = `1 ${from} = ${frate} ${to}`
    // toAmt.value = data.rates[to];
    drates.innerHTML = '';
    drates.appendChild(disp);

    fromSel.addEventListener("change", showRate);
    toSel.addEventListener("change", showRate);

    const swapBtn = document.getElementById("icn");

swapBtn.addEventListener("click", () => {
    const fromSel = document.getElementById("fromCurrency");
    const toSel = document.getElementById("toCurrency");
    const fromAmt = document.getElementById("fromcur");
    const toAmt = document.getElementById("tocur");

    // swap currencies
    let tempCurrency = fromSel.value;
    fromSel.value = toSel.value;
    toSel.value = tempCurrency;

    // swap amounts
    let tempAmount = fromAmt.value;
    fromAmt.value = toAmt.value;
    toAmt.value = tempAmount;

    // trigger updates (flags + rate display)
    updateFlag(fromSel, document.getElementById("fromflag"));
    updateFlag(toSel, document.getElementById("toflag"));
    showRate(); // your function that updates rate text
});

}

loadCurrencies();



// const convert = async (e) => {
//     // const currency = await fetch("https://restcountries.com/v3.1")
//     // const data = await currency.json();

//     const fromCur = document.getElementById('fromcur');
//     const toCur = document.getElementById('tocur');

//     let amount = 30;

//     try {
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?${}`
//     );
//     const data = await res.json();
//     console.log(data);

//     toCur.value = data.rates[to];
//   } catch (err) {
//     console.error("Conversion error:", err);
//   }
// }

async function convert(direction) {
    //   const fromSel = document.getElementById("fromCurrency");
    //   const toSel = document.getElementById("toCurrency");
    const fromAmt = document.getElementById("fromcur");
    const toAmt = document.getElementById("tocur");
    const mrates = document.getElementById("mrates");

    const from = fromSel.value;
    const to = toSel.value;

    // If currencies aren’t selected, don’t try conversion
    if (!from || !to) {
        fromAmt.value = "";
        toAmt.value = "";
        return;
    }

    //   if(!fromAmt && !toAmt){

    //   }

    try {
        if (direction === "from") {
            const amt = fromAmt.value;
            if (!amt) {
                toAmt.value = "";
                return;
            }

            const res = await fetch(
                `https://api.frankfurter.app/latest?amount=${amt}&from=${from}&to=${to}`
            );
            const data = await res.json();
            toAmt.value = data.rates[to];
        }

        else if (direction === "to") {
            const amt = toAmt.value;
            if (!amt) {
                fromAmt.value = "";
                return;
            }

            const res = await fetch(
                `https://api.frankfurter.app/latest?amount=${amt}&from=${to}&to=${from}`
            );
            const data = await res.json();
            fromAmt.value = data.rates[from];
        }
    } catch (err) {
        console.error("Conversion error:", err);
    }



}


// async function displayRates() {
//     const fromAmt = document.getElementById("fromcur");
//     const toAmt = document.getElementById("tocur");
//     const drates = document.getElementById("rates");

//     const from = fromSel.value;
//     const to = toSel.value;

// const res = await fetch(
//                 `https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`
//             );
//             const data = await res.json();

//             const disp = document.createElement('p');

//             disp.innerHTML = `1 ${from} = ${data.rates}`
//             // toAmt.value = data.rates[to];

//             drates.appendChild(disp);

// }



