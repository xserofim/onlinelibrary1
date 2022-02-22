const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 20)}%`;
    btn.style.top = `${random(0, 20)}%`;
});

const never = new Audio('music/tolled.mp3');
btn.addEventListener('click', () => {
    alert('Congrats! You successfully logged in account!');
    never.play();
});