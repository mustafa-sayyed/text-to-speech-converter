let btn = document.querySelector("button");
let select = document.querySelector("select");
let text = document.querySelector("textarea");
console.log(select.value);
console.log(text);

const getVoices = () => {
  if (typeof speechSynthesis === "undefined") {
    return;
  }
  let voices = speechSynthesis.getVoices();
  console.log(voices);
  voices.forEach((voice) => {
    let option = document.createElement("option");
    option.textContent = voice.name;
    option.value = voice.name;
    select.appendChild(option);
  });
};

speechSynthesis.onvoiceschanged = getVoices;

btn.addEventListener("click", () => {
  let voices = speechSynthesis.getVoices();
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text.value;
  utterance.voice = voices.find((voice) => voice.name == select.value);
  console.log(utterance.voice);
  speechSynthesis.speak(utterance);
});

getVoices();


let cb = document.getElementById("checkbox");
cb.addEventListener("click", () => {
    document.body.classList.toggle("lightmode")
})