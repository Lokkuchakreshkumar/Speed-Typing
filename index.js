let rtext = document.querySelector(".reference-text");
let pstr = rtext.innerText;
let correct = 0;
let body = document.querySelector("body");
let timerstart = false;
rtext.innerHTML = pstr
  .split("")
  .map((el) => `<span>${el}</span>`)
  .join("");
let k = 0;
spans = document.querySelectorAll("span");
let utext = document.querySelector(".user-text");
let i = 0;
function animate() {
  utext.addEventListener("input", (event) => {
    let present = utext.value;
    if (!timerstart) {
      counter();
      some();
      timerstart = true;
    }
    let tocompare = present.slice(present.length - 1);
    textinspan = spans[i].textContent;
    if (event.inputType == "deleteContentBackward") {
      if (i > 0) {
        i--;
        k--;
        spans[i].style.backgroundColor = "transparent";
        if (present.length == 0) {
          for (let j = 0; j < k; j++) {
            spans[j].style.backgroundColor = "transparent";
          }
          i = 0;
        }
      }
    } else if (tocompare == textinspan) {
      spans[i].style.backgroundColor = "#4CAF50";
      console.log(correct);
      correct++;
      i++;
      k++;
    } else if (tocompare != textinspan) {
      spans[i].style.backgroundColor = "#D32F2F";
      i++;
      k++;
    }
    return present;
  });
}
animate();
let count = 1;
function counter() {
  let h2 = document.querySelector(".timer");
  h2.innerText = count;
  count++;
  if (count <= 10) {
    setTimeout(counter, 1000);
  }
}
let tocheckwords = (present) => {
  present = present.trim();
  let words = 0;
  for (let m = 0; m < present.length; m++) {
    if (present[m] == " ") {
      words += 1;
    }
  }
  return words + 1;
};
function some() {
  setTimeout(() => {
    let present = utext.value;
    let finalwords = tocheckwords(present);
    let rem = document.querySelector(".reminder");
    rem.innerHTML = `<span class="todo">wpm is </span><span class="highlighttext"">${finalwords}</span>`;
    let acc = accuracy();
    let h3 = document.querySelector("h3");
    h3.innerText = `Accuracy : ${acc}`;
    h3.style.color = "#8466dd";
  }, 10000);
}
function accuracy() {
  let acc = (correct / utext.value.length) * 100;
  return Math.floor(acc);
}
let darkbtn = document.querySelector(".darkbtn");
let lightbtn = document.querySelector(".light");
let light = 0;
darkbtn.classList.add("btntodark");
let timer = document.querySelector(".timer-container");
let timertext = document.querySelector(".timer");
darkbtn.classList.add("dark");
function lightmode() {
  lightbtn.addEventListener("click", () => {
    if (light == 0) {
      body.classList.add("backgroundforlight");
      rtext.classList.add("textforlight");
      utext.classList.add("typebackground");
      darkbtn.classList.remove("btntodark");
      lightbtn.classList.remove("inactivebtnforlight");
      lightbtn.classList.add("btntolight");
      timer.classList.add("timerforlight");
      timertext.classList.add("timertext");
      darkbtn.classList.add("inactivebtnfordark");
      light = 1;
    } else {
      body.classList.remove("backgroundforlight");
      rtext.classList.remove("textforlight");
      utext.classList.remove("typebackground");
      darkbtn.classList.add("btntodark");
      lightbtn.classList.add("inactivebtnforlight");
      lightbtn.classList.remove("btntolight");
      darkbtn.classList.remove("inactivebtnfordark");
      timertext.classList.remove("timertext");
      timer.classList.remove("timerforlight");
      light = 0;
    }
  });
  darkbtn.addEventListener("click", () => {
    if (light == 1) {
      body.classList.remove("backgroundforlight");
      rtext.classList.remove("textforlight");
      utext.classList.remove("typebackground");
      darkbtn.classList.add("btntodark");
      lightbtn.classList.add("inactivebtnforlight");
      lightbtn.classList.remove("btntolight");
      darkbtn.classList.remove("inactivebtnfordark");
      timer.classList.remove("timerforlight");
      timertext.classList.remove("timertext");
      light = 0;
    } else {
      body.classList.add("backgroundforlight");
      rtext.classList.add("textforlight");
      utext.classList.add("typebackground");
      darkbtn.classList.remove("btntodark");
      lightbtn.classList.remove("inactivebtnforlight");
      lightbtn.classList.add("btntolight");
      darkbtn.classList.add("inactivebtnfordark");
      timer.classList.add("timerforlight");
      timertext.classList.add("timertext");
      light = 1;
    }
  });
}

lightmode();
