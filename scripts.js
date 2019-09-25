
//remove the mobile hidden class from

const hamburger = document.querySelector(".fa-hamburger");
const hiddenUL = document.querySelector ("ul");

hamburger.addEventListener('click', function () {
  // hiddenUL classlist remove ("is-hidden--mobile");
  hiddenUL.classList.toggle("is-hidden--mobile");
});

function greeter (question = " what is your name?") {
  const answer =prompt(question);
 return prompt (question);
 if (answer==="") {

 }

}


return answer;
document.querySelector('h1').textContent=greeter();


// const answer =greeter();
// document.querySelector("#root").innerHTML = '<p>${greeter()}</p>

console.log(answer);

