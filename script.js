function lesson(name) {
  const content = document.getElementById("courseContent");

  const lessons = {
    HTML: "HTML сайттың құрылымын жасайды.",
    CSS: "CSS сайттың дизайнын реттейді.",
    JavaScript: "JavaScript сайтқа интерактивтілік қосады.",
    Cybersecurity: "Киберқауіпсіздік ақпаратты цифрлық қауіптерден қорғайды."
  };

  content.innerHTML = "<h3>" + name + "</h3><p>" + lessons[name] + "</p>";
}

function sendQuestion() {
  const input = document.getElementById("userQuestion");
  const messages = document.getElementById("chatMessages");

  const question = input.value.trim().toLowerCase();

  if (!question) return;

  const userMessage = document.createElement("p");
  userMessage.className = "user";
  userMessage.textContent = "👤 " + input.value;
  messages.appendChild(userMessage);

  let answer = "Бұл сұраққа әзірге жауабым жоқ.";

  if (question.includes("html")) {
    answer = "HTML — сайттың құрылымын жасайтын тіл.";
  } else if (question.includes("css")) {
    answer = "CSS — сайттың дизайнын жасайды.";
  } else if (question.includes("javascript")) {
    answer = "JavaScript сайтты интерактивті етеді.";
  } else if (question.includes("хакер")) {
    answer = "Этикалық хакерлер жүйелердің қауіпсіздігін тексереді.";
  } else if (question.includes("сәлем")) {
    answer = "Сәлем! HACKER WORLD сайтына қош келдің!";
  } else if (question.includes("dns")) {
    answer = "DNS домен атауын IP мекенжайына сәйкестендіреді.";
  } else if (question.includes("ip")) {
    answer = "IP — желідегі құрылғының мекенжайы.";
  }

  const botMessage = document.createElement("p");
  botMessage.className = "bot";
  botMessage.textContent = "🤖 " + answer;
  messages.appendChild(botMessage);

  input.value = "";
}
