/************** Coding Challange: #1 **************/
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};
poll.registerNewAnswer = function () {
  const value = Number(prompt(`${this.question},${this.options}`));
};
