/************** Coding Challange: #1 **************/
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};
poll.registerNewAnswer = function () {
  const value = Number(prompt(`${this.question},${this.options}`));
};

document.body.append(document.createElement("h1"));
document.querySelector("h1").innerText = "Hello World";
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue"; // by closure we can access and make changes
  });
})();
