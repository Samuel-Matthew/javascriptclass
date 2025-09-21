const btn = document.getElementById('btn');

btn.addEventListener('click', showToast);

function showToast() {
    // toast.style.display = "block";
    const output = document.getElementById('output');


    const toast = document.createElement('div');
    toast.classList.add('toast');

    toast.innerHTML = `<p>this is a toast</p>`;

    setTimeout(() => {
        output.innerHTML = "";
    }, 2000);
    output.appendChild(toast);
};


