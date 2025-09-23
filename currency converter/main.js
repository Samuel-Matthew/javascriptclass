const revBtn = document.getElementById('revbtn');
const hero = document.querySelector('.hero');

const heroCon = document.querySelector('.hero-content');
const up = document.querySelector('.up');

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
    const fromSel = document.getElementById("fromCurrency");
    const toSel = document.getElementById("toCurrency");
    const fromFlag = document.getElementById("fromflag");
    const toFlag = document.getElementById("toflag");

    const res = await fetch("https://api.frankfurter.app/currencies");
    const data = await res.json();

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
}




loadCurrencies();



// const convert = async () => {
//     const currency = await fetch("https://restcountries.com/v3.1")
//     const data = await currency.json();

//     const cha = await fetch("https://api.frankfurter.app/latest");
//     const change = await cha.json();

//     console.log(data);
//     // console.log(change);
// }
// convert();