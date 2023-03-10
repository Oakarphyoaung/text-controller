//Variable
const fonts = ["Alex Regular", "Algerian Regular", "Blackadder ITC Regular"];

//Selecter

const fontFamily = document.querySelector("#fontFamily");
const text = document.querySelector("#text");
const output = document.querySelector("#output");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");

fonts.forEach((font) => {
  fontFamily.append(new Option(font, font));
});

//Action
// text ထဲ စာရို်တာနဲ့ Out put ထွက်မယ်

text.addEventListener("keyup", (event) => {
  // console.log(e.target.value);
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", () => {
  output.style.color = color.value;
});
fontSize.addEventListener("change", (event) => {
  output.style.fontSize = event.target.value + "px";
});
fontFamily.addEventListener("change",(event)=>{
    output.style.fontFamily = event.target.value;
});