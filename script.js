const btn = document.getElementById("btn"),
  value = document.getElementById("value"),
  main = document.getElementById("main"),
  hex = document.getElementById("hex"),
  random = document.getElementById("random"),
  footer = document.getElementById("footer");

let hexOrRandom = 2;

const letters = ["a", "b", "c", "d", "e", "f"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let rl = letters[Math.floor(Math.random() * letters.length)];
let rn = numbers[Math.floor(Math.random() * numbers.length)];

// Random Rgb Color
function getRandomRgb() {
  let rn = Math.floor(Math.random() * 255);

  let a = `rgb(${rn},${rn},${rn})`;
  let b = `rgb(${Math.floor(Math.random() * 255)},${rn},${rn})`;
  let c = `rgb(${rn},${Math.floor(Math.random() * 255)},${rn})`;
  let d = `rgb(${rn},${rn},${Math.floor(Math.random() * 255)})`;
  let e = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${rn})`;

  let f = `rgb(${rn},${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)})`;

  let g = `rgb(${Math.floor(Math.random() * 255)},${rn},${Math.floor(
    Math.random() * 255
  )})`;

  // Random 1,2,3
  let h = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;

  const randCombination = [a, b, c, d, e, f, g, h];
  return randCombination[Math.floor(Math.random() * randCombination.length)];
}

// Generating random color Hex color

const getRandomColor = () => {
  // All Rendom
  let a = `#${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }`;
  // initial same
  let b = `#${rl + rl}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }`;

  let c = `#${rn}${rn}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }`;

  //middle same
  let d = `#${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rl + rl}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }`;

  let e = `#${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rn}${rn}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }`;

  // Last same
  let f = `#${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rl + rl}`;
  let g = `#${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rn}${rn}`;

  // Initial two same
  let h = `#${rn}${rn}${rn}${rn}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }`;

  let i = `#${rl}${rl}${rl}${rl}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }`;
  // Last Two Same
  let j = `#${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rn}${rn}${rn}${rn}`;

  let k = `#${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rl + rl}${rl + rl}`;

  // Initial and last same
  let l = `#${rn}${rn}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rn}${rn}`;

  let m = `#${rl}${rl}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rl}${rl}`;

  // Initial nn and last ll
  let n = `#${rn}${rn}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rl}${rl}`;

  // Initial ll and last nn
  let o = `#${rl}${rl}${
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)]
  }${rn}${rn}`;
  // All Same
  let p = `#${rn}${rn}${rn}${rn}${rn}${rn}`;
  let q = `#${rl}${rl}${rl}${rl}${rl}${rl}`;
  //
  let r = `#${rl}${rl}${rn}${rn}${rn}${rn}`;
  let s = `#${rn}${rn}${rl}${rl}${rl}${rl}`;

  const randCombination = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
  ];
  return randCombination[Math.floor(Math.random() * randCombination.length)];
};

// Changing color
const changeColor = (e) => {
  const randomColorType = [
    getRandomColor(),
    getRandomRgb(),
    "red",
    "blue",
    "pink",
    "yellow",
    "black",
    "white",
    "grey",
    "brown",
    "purple",
    "red",
    "green",
  ];

  let color = randomColorType[Math.floor(Math.random() * hexOrRandom)].trim();

  main.style.backgroundColor = color;
  value.innerText = color;
  footer.style.backgroundColor = color;
  console.log();
};

//Alll the Event Listeners
btn.addEventListener("click", changeColor);
value.addEventListener("click", (e) => {
  const color = e.target.innerText;
});

// Show Only Hex values
hex.addEventListener("click", () => {
  hexOrRandom = 1;
});

// Show Random values
random.addEventListener("click", () => {
  hexOrRandom = 13;
});
