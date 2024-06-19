
const wrapper = document.querySelector('.wrapper');
qrinput = wrapper.querySelector('.form input');
generateBtn = wrapper.querySelector('.form button');
qrimg = wrapper.querySelector('.qr-code img');
let prevalue;

generateBtn.addEventListener('click', () => {
    let qrvalue = qrinput.value.trim();
    if (!qrvalue || qrvalue === prevalue) return;
    prevalue = qrvalue;
    generateBtn.innerText = 'Generating QR Code...';
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrvalue}`;
    qrimg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate QR Code';
    });
});

qrinput.addEventListener('keyup', () => {
    if (!qrinput.value.trim()) {
        wrapper.classList.remove('active');
        prevalue = null;
    }
});