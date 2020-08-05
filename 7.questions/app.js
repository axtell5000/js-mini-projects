//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", () => {
    // console.log(question);

    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});



// // Selecting from DOM
// const questionBtns = document.querySelectorAll('.question-btn');

// // adding event listener on each button
// questionBtns.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const parentQuestion = e.currentTarget.parentElement.parentElement;
//     parentQuestion.classList.toggle('show-text');
//   });
// });

// questionBtns.forEach(item => {
//   if (item.classList.contains('show-text')) {
//     item.classList.remove('show-text');
//   }
// });
