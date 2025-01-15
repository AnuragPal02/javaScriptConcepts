const hex = '0123456789ABCDEFGH';

const randomColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
// console.log(color);
let intervalReference;
const startChangingColor = () => {
  if (!intervalReference) {
    intervalReference = setInterval(() => {
      document.querySelector('body').style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(intervalReference);
  intervalReference = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
