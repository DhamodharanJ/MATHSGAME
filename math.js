
const score=document.querySelector("#score");
var get1 = document.querySelector(".one");
var get2 = document.querySelector(".two");
var get3 = document.querySelector(".three");
var arr = ['+', '-', '*', '/', '%'];
var one = Math.floor(Math.random() * 100 + 1);
var two = Math.floor(Math.random() * 100 + 1);
var a = Math.floor(Math.random() * arr.length);
var randomvalue = arr[a];
var randomvalues;

function repeat(){
    get1.textContent="";
    get2.textContent="";
    get3.textContent="";
    var arr = ['+', '-', '*', '/', '%'];
var one = Math.floor(Math.random() * 100 + 1);
var two = Math.floor(Math.random() * 100 + 1);
var a = Math.floor(Math.random() * arr.length);
var randomvalues = arr[a];

switch (randomvalues) {
    case '+':
       result = one + two;
        break;
    case '-':
        result = one - two;
        break;
    case '*':
      result = one * two;
        break;
    case '/':
      result = one / two;
      result = result.toFixed(2)
        break;
    case '%':
       result = one % two;
        break;
}
get3.append(Math.floor(result));
// console.log(one+two)
get1.append(one);
get2.append(two);
randomvalue=randomvalues;
}

repeat()
var btn = document.querySelectorAll("button");
let time=60;
let timers=document.querySelector(".timer");
 a=setInterval(timer,1000);
function timer()
{
   timers.textContent=time;
   time--;
   if(time==0){
    window.location.href="gameover.html";
   }
//    console.log(time);
}
timer();
    var btn = document.querySelectorAll("button");
    var scores=0;
    score.innerHTML=scores;
btn.forEach(step => {
    step.addEventListener("click", function clicsk(event) { 
        if (event.target.textContent == randomvalue) {
            console.log("success");
        repeat();
            scores++; 
            score.innerHTML=scores;
            console.log(score);
               }
        else {
            console.log("wrong");
            window.location.href="gameover.html";
            localStorage.setItem('score',`${scores}`);
        }
    }
    )
})

