const main = document.querySelector('.main');
const con = document.querySelector('.con');
const txt = document.querySelector('#txt');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    main.style.backgroundColor = '#17dfb1';

    con.style.border = '2px solid #fff';
    con.style.backgroundColor = '#17dfb1';
    con.style.boxShadow = '15px 15px 20px rgba(0, 255, 0, 0.5), -15px -15px 20px rgba(0, 255, 0, 0.5), 0 0 100px rgba(0, 255, 0, 0.5)';

    txt.innerHTML = 'ILOOOOVEYOUUUUSOOOMUCHH GAAA <br><br> CANT WAIT TO SEE YOU NEXT MONTH BABY!';
    txt.style.color = '#fff';
    txt.style.textShadow = '1px 1px #fff, -1px -1px #fff, 0 0 20px #fff';
});

noBtn.addEventListener('click', () => {
    const pos1 = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const pos2 = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${pos1}px`;
    noBtn.style.top = `${pos2}px`;
});
