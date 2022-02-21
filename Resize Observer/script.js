const container = document.querySelector('.container');
const box = document.querySelector('.box');

const observer = new ResizeObserver(entries => {
    // console.log(entries);
    const boxElement = entries[0];

    const isBoxSmall = boxElement.contentRect.width < 400;
    boxElement.target.style.backgroundColor = isBoxSmall ? 'blue' : 'crimson';

});

observer.observe(box);