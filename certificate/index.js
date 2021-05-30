// Default export is a4 paper, portrait, using millimeters for units
// const printBtn = document.getElementById('print');
// printBtn.addEventListener('click', () => {
//     window.print();
// });

window.onload = function() {
    titleEl = document.getElementById('title');
    nameEl = document.getElementById('name');
    mobileEl = document.getElementById('mobile');
    stateEl = document.getElementById('state');
    districtEl = document.getElementById('district');
    pincodeEl = document.getElementById('pincode');
    emailEl = document.getElementById('email');
}

function submit() {
    // let url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSUTJsZjKa18v-D6AKMPATVaTNvb8Wd5GZZTM3pmDpPz-0BQ/formResponse";
    let obj = {
        title: titleEl.value,
        name: nameEl.value,
        mobile: mobileEl.value,
        state: stateEl.value,
        district: districtEl.value,
        pincode: pincodeEl.value,
        email: emailEl.value
    };
    saveData(obj);
    window.location.href = 'certificate.html';
}


function saveData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}



