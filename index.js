let body = document.querySelector("body");
let arr = [
  "JavaScript is a core web technology with HTML and CSS. Most websites use it for client-side behavior. Web browsers have dedicated JavaScript engines to execute code. These engines are also used in servers and apps. The most popular runtime for non-browser use is Nodejs. JavaScript is high level and supports various programming styles. It has APIs for text, dates, and the DOM. JavaScript and Java are different despite similar names. Netscape introduced JavaScript in its Navigator browser. Microsoft created JScript for Internet Explorer, leading to compatibility issues. Mozilla later revived JavaScript development with Firefox. Ajax technology boosted JavaScript growth, enabling dynamic web applications. This led to many JavaScript libraries, like jQuery and Dojo Toolkit.",
  "R is a programming language for statistical computing and data visualization. It is widely used in data mining, bioinformatics and analysis. The core language is extended with many packages containing reusable code, documentation and sample data. R is open-source software under the GNU Project. It is written mainly in C, Fortran and R. Precompiled versions are available for multiple operating systems. As an interpreted language, R provides a command line interface with graphical environments like RStudio and Jupyter. It was created by Ross Ihaka and Robert Gentleman at the University of Auckland. Inspired by the S language, it introduced lexical scoping. The name R comes from their initials. CRAN hosts its source code, documentation and thousands of packages.",
  "Generative artificial intelligence is revolutionizing various industries including healthcare and finance . This technology enables machines to generate text , images , and even music autonomously . Many companies use it to improve automation and efficiency . It learns patterns from vast data and creates realistic outputs . Challenges include ethical concerns and misinformation risks . The potential applications are endless from personalized assistants to advanced problem solving tools . Researchers continuously improve models to make them more reliable and unbiased . As advancements continue , businesses and individuals must stay informed about its implications . Understanding its capabilities and risks will ensure responsible use . This field will shape the future in ways beyond imagination .",
  "Artificial intelligence has transformed industries by automating tasks and improving efficiency . It allows systems to analyze large data sets and generate meaningful insights . Businesses use it for customer service , medical diagnosis , and fraud detection . Machine learning helps models become smarter over time by identifying patterns . Ethical concerns arise due to bias in data and decision making processes . Developers work on improving transparency and fairness in models . With rapid advancements , artificial intelligence will play a greater role in society . Researchers focus on making systems more adaptable and human like in interactions . The impact of this technology will be profound in various domains . Its future remains exciting and unpredictable .",
  "Elon Musk was born in Pretoria South Africa to a wealthy family His mother was Canadian which allowed him to obtain Canadian citizenship in his youth In pursuit of better opportunities he moved to Canada in his late teens before later relocating to the United States He attended the University of Pennsylvania where he studied physics and economics Musk displayed an early interest in technology and entrepreneurship leading him to move to California to explore opportunities in the tech industry His journey into business began in the software sector where he co founded Zip two which was later acquired providing him with the capital to launch further ventures His early experiences laid the foundation for his future successes in multiple industries",
  "Mark Elliot Zuckerberg was born in White Plains New York to a dentist father and a psychiatrist mother He grew up in Dobbs Ferry along with his three sisters and showed an early interest in computers By his early teens he developed ZuckNet a program that allowed communication between home and his fathers dental office During high school he created Synapse Media Player which used machine learning to analyze music preferences He joined Harvard in two thousand two and became known for his programming skills While there he created Facemash a site for ranking student photos which was shut down due to privacy concerns This project laid the foundation for the creation of Facebook which launched in two thousand four",
  "OpenAI Inc is an American artificial intelligence AI research organization founded in December and based in San Francisco California It focuses on developing safe and beneficial artificial general intelligence AGI highly autonomous systems that outperform humans in most economically valuable work OpenAI is known for the GPT language models DALL E image generation and Sora text to video Its ChatGPT release in November sparked global interest in generative AI The organization includes non profit OpenAI Inc and for profit OpenAI Global LLC Microsoft owns percent of OpenAI after investing billion and provides cloud resources via Azure In and OpenAI faced copyright lawsuits and leadership turmoil as CEO Sam Altman was briefly removed then reinstated amid internal conflicts",
  "Google LLC is an American multinational technology company specializing in AI, online advertising, search engines, cloud computing, and consumer electronics. Founded by Larry Page and Sergey Brin in nineteen ninety eight, it became a subsidiary of Alphabet Inc in twenty fifteen. Google dominates markets with products like Google Search, YouTube, Chrome, Android, and Google Cloud. It leads in AI with Google Assistant, DeepMind, and TensorFlow. CEO Sundar Pichai oversees both Google and Alphabet. Despite its innovations, Google faces criticism for privacy concerns, antitrust issues, and monopolistic practices. In twenty twenty four, a court ruled Google held an illegal monopoly over internet search, reinforcing concerns about its market dominance and influence over global digital infrastructure.",
  "Samuel Harris Altman is an American technology entrepreneur and investor. He is the chief executive officer of OpenAI and chairman of Oklo Inc and Helion Energy. Altman dropped out of Stanford University and founded Loopt, raising venture capital. He later joined Y Combinator, becoming its president. In 2015, he co-founded OpenAI with major investors. He also co-founded Tools For Humanity, which developed Worldcoin. Altman has invested in companies like Humane, Retro Biosciences, Boom Technology, and Helion Energy. He testified before the United States Senate on AI oversight and met global leaders to discuss AI regulations. His work in AI and startups has made him a key figure in the industry, with a strong influence on global technology.",
  "Andrej Karpathy is a Slovak Canadian computer scientist. He was the director of artificial intelligence and autopilot vision at Tesla. He cofounded OpenAI and specialized in deep learning and computer vision. Born in Slovakia he moved to Toronto as a teenager. He earned degrees in computer science and physics from the University of Toronto and a masters from the University of British Columbia. He completed a PhD at Stanford under Fei Fei Li focusing on deep learning. Karpathy created Stanfords deep learning course. He worked at Tesla and later returned to OpenAI before leaving. He founded Eureka Labs and coined vibe coding predicting English as the dominant programming language. He explores artificial intelligence and its impact on technology and education.",
  "LeetCode LLC is a private software company founded by Winston Tang in Palo Alto California. The CEO is Hercy Chang. LeetCode is an online platform for coding interview preparation offering coding problems and algorithmic challenges. It provides free and premium access with premium users getting exclusive interview questions. Solutions are ranked by execution speed and memory usage. LeetCode hosts contests mock interviews and daily challenges. It supports Java Python JavaScript C and more. Problems are categorized into topics like arrays trees graphs and dynamic programming. LeetCode expanded to China and secured funding from Lightspeed China Partners. It is widely used by job seekers and coding enthusiasts.",
  "Peter Andreas Thiel is an entrepreneur , venture capitalist and political activist . He co founded PayPal , Palantir Technologies and Founders Fund . He was the first outside investor in Facebook . Thiel has worked as a securities lawyer , a speechwriter and a derivatives trader . He founded Thiel Capital Management in the nineties and was PayPal chief executive officer until its sale to eBay . After PayPal , he launched Clarium Capital and Palantir Technologies . Thiel is a conservative libertarian who has funded right wing causes . He was controversially granted New Zealand citizenship . Through the Thiel Foundation , he funds artificial intelligence research and life extension projects . He studied philosophy and law at Stanford University .",
  "ChatGPT is a chatbot made by OpenAI. It was launched in the year twenty twenty two. It runs on the GPT four o model and creates human like responses. ChatGPT helps users shape conversations by adjusting the length and style. This chatbot played a big role in the AI boom which led to heavy investments in artificial intelligence. Some fear it may replace human thinking or spread wrong information. ChatGPT uses special models designed for conversations. It improves using feedback from humans. OpenAI first made it free but later added paid plans. Free users get basic access while paid users get extra features. ChatGPT became the fastest growing software. Many competitors appeared like Gemini and Claude. Microsoft used GPT four for Copilot. OpenAI worked with Apple to add ChatGPT to Apple Intelligence. ChatGPT was among the most visited websites. ChatGPT learns from sources like manuals and Wikipedia. It can write code , answer questions , make music and translate text. It also plays games and simulates a Linux system. OpenAI made plugins for web search and math tools. ChatGPT can now browse the web for better answers.",
  "Grok is an artificial intelligence chatbot developed by xAI, a company founded by Elon Musk. Introduced in November two thousand twenty three, Grok is designed to generate text and engage in conversations with users. Unlike other chatbots, it can access information in real time through X, formerly known as Twitter, and is programmed to respond to edgy and provocative questions with witty and rebellious answers. In February two thousand twenty five, xAI released Grok three, the latest iteration of the chatbot, aiming to compete with other AI models in the market. Grok three offers advanced text generation, image creation, and reasoning capabilities, making it a versatile tool for various applications.",
  "​Lex Fridman is an American computer scientist and podcaster. Born in Russia, he moved to the United States in the 1990s. He earned a Bachelor of Science, Master of Science, and Ph.D. from Drexel University. Fridman worked briefly at Google before joining the Massachusetts Institute of Technology as a research scientist. His research focuses on artificial intelligence, autonomous vehicles, and human-robot interaction. In 2018, he launched the Lex Fridman Podcast, featuring in-depth conversations with notable figures from various fields. Guests have included Elon Musk, Mark Zuckerberg, and Kanye West. Fridman also practices Brazilian jiu-jitsu and holds a black belt. He combines his interests in technology and martial arts to explore human potential.",
  "Nodejs is an open source , cross platform JavaScript runtime environment that allows developers to execute JavaScript code outside a web browser . Built on Chromes V8 JavaScript engine , it enables the creation of scalable network applications by utilizing an asynchronous , event driven architecture . Nodejs is designed to build scalable network applications . It is widely used for server side development , offering efficiency and performance for data intensive real time applications . With a vast ecosystem of packages available through its package manager , npm , developers can easily extend its functionalities . Nodejs has become a popular choice for building web servers , APIs , and real time applications due to its non blocking I O operations and scalability .",
  "Three js is a popular JavaScript library used for creating D graphics in web applications It helps developers build interactive D experiences without needing deep knowledge of computer graphics It uses WebGL to render complex scenes directly in a browser without extra plugins Three js supports various features like lighting shadows textures animations and physics This makes it useful for games simulations data visualization and creative web projects Many developers use it to create immersive applications with smooth performance and high quality visuals It provides an easy to use API that simplifies the development of D content With a strong community and extensive documentation Three js remains one of the best tools for web based graphics development",
  "React is a popular JavaScript library for building user interfaces It is maintained by a large community and is widely used for developing web applications React allows developers to create reusable components making development faster and more efficient It uses a virtual document object model which improves performance by updating only the necessary parts of a page React supports state management which helps in building dynamic applications with smooth interactions Many modern web applications use React because of its simplicity and flexibility It is compatible with various libraries and frameworks making it a preferred choice for front end development Reacts ecosystem includes tools for routing state management and testing providing a complete solution for building interactive web applications",
  "Cursor is an artificial intelligence powered code generation and completion tool designed to assist developers in writing and optimizing code It enhances productivity by providing intelligent suggestions and auto completing code snippets based on context Cursor integrates with various development environments making coding faster and more efficient It understands different programming languages and adapts to user preferences to improve accuracy and relevance Developers use Cursor to reduce errors and streamline workflows by automating repetitive tasks It also helps in debugging and offers explanations for complex code structures By leveraging advanced machine learning techniques Cursor continues to evolve providing more accurate and adaptive assistance for coding tasks across multiple domains and programming frameworks",
  "Git is a distributed version control system designed to handle projects efficiently It allows developers to track changes manage code and collaborate seamlessly across teams Git enables users to create branches merge updates and revert modifications without losing previous work It provides strong support for non linear development and ensures data integrity by storing snapshots of files instead of differences Developers use Git for open source projects and enterprise applications due to its speed and reliability It integrates with platforms like GitHub and GitLab enhancing workflow automation and project management Git simplifies collaboration by allowing multiple contributors to work on the same codebase while maintaining a detailed history of all changes ensuring efficient software development and maintenance",
  "NVIDIA is a technology company known for its graphics processing units and artificial intelligence solutions It was founded in California and has revolutionized gaming deep learning and data centers Its GPUs power high performance computing and drive advancements in autonomous vehicles and robotics NVIDIA architecture accelerates scientific research and medical innovations It develops AI tools for industries like healthcare finance and entertainment The companys deep learning frameworks optimize machine learning models making AI more efficient NVIDIA cloud computing solutions support businesses and researchers by providing scalable infrastructure Its graphics cards enhance visual experiences in gaming and creative applications With continuous innovation and powerful hardware NVIDIA remains a leader in AI computing and digital transformation across various industries",
  "Python is a popular programming language known for its simplicity and readability It is widely used in web development data science automation and artificial intelligence Its syntax allows developers to write clear and concise code Python supports multiple programming paradigms including procedural object oriented and functional programming It has a rich ecosystem with numerous libraries and frameworks that simplify complex tasks Python is used in scientific computing machine learning cybersecurity and game development Many developers prefer Python because of its strong community and extensive documentation It is an ideal language for beginners and professionals Python applications range from small scripts to large scale systems making it a versatile choice for various industries and research fields",
];
console.log(arr.length);
function genrandom() {
  randomnum = Math.floor(Math.random() * arr.length);
  return randomnum;
}
let darkbtn = document.querySelector(".darkbtn");
let lightbtn = document.querySelector(".light");
let forthing = parseInt(localStorage.getItem("light"));

let rtext = document.querySelector(".reference-text");
randomparanumber = genrandom();
rtext.innerText = arr[randomparanumber];
let pstr = rtext.innerText;
let correct = 0;
let wrong = 0;
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
      spans[i].style.backgroundColor = "#2ECC71";
      correct++;
      i++;
      k++;
    } else if (tocompare != textinspan) {
      spans[i].style.backgroundColor = "#FF6B6B";
      wrong++;
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
  if (count <= 60) {
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
    h3.innerText = `Accuracy : ${acc}%`;
    h3.style.color = "#42A5F5";
  }, 60000);
}
function accuracy() {
  total = correct + wrong;
  let acc = (correct / utext.value.length) * 100;
  return Math.floor(acc);
}

darkbtn.classList.add("btntodark");
let timer = document.querySelector(".timer-container");
let timertext = document.querySelector(".timer");
darkbtn.classList.add("dark");
function lightmode(light) {
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
      localStorage.setItem("light", "1");
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
      localStorage.setItem("light", "0");
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
      localStorage.setItem("light", "0");
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
      localStorage.setItem("light", "1");
    }
  });
}
if (!localStorage.getItem("light")) {
  document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("light", "0");
  });
}
if (forthing == 0 || forthing == 1) {
  if (forthing == 0) {
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
    localStorage.setItem("light", "0");
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
    localStorage.setItem("light", "1");
  }
}
lightmode(forthing);
