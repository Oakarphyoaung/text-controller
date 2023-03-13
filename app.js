//Variable
const fonts = ["Alex Regular", "Algerian Regular", "Blackadder ITC Regular"];

//Selecter

const fontFamily = document.querySelector("#fontFamily");
const text = document.querySelector("#text");
const output = document.querySelector("#output");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const textToSpeech = document.querySelector("#textToSpeech")
const speechToText = document.querySelector("#speechToText")
const synth = window.speechSynthesis;

const listen = () => {
  var recognition = new webkitSpeechRecognition();

  //set language and recognizing
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start",()=>{
    speechToText.classList.add("active");
    speechToText.innerHTML = `
    <div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    `
  });
  recognition.addEventListener("end", () =>{
    speechToText.classList.remove("active");
    speechToText.innerHTML = `<i class="bi bi-mic"></i>`;
  });

  //when a speech result is returned
  recognition.onresult = function (event) {
    //Get the transcript of the spoken words
    var transcript = event.results[0][0].transcript;
    //Display the transcript in the text box
    text.value = transcript;
  };
  
};
speechToText.addEventListener("click", listen);


const speak = (text) =>{
  const utterThis = new SpeechSynthesisUtterance();
  utterThis.rate = 0.9;
  utterThis.text = text;
  utterThis.voice = synth.getVoices()[0];
  utterThis.addEventListener("start",()=>{
    textToSpeech.classList.add("active");
  });
  utterThis.addEventListener("end",()=>{
    textToSpeech.classList.remove("active");
  });
  synth.speak(utterThis);
};

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

color.addEventListener("change", (event) => {
  output.style.color = event.target.value;
});
fontSize.addEventListener("change", (event) => {
  output.style.fontSize = event.target.value + "px";
});
fontFamily.addEventListener("change",(event)=>{
    output.style.fontFamily = event.target.value;
});

textToSpeech.addEventListener("click",()=>{
  speak(text.value);
});