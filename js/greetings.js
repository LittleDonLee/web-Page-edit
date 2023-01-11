//input,button 을 찾을 수 있는 첫번째 방법
//const loginForm = document.getElementById("login-form");
//const loginInput= loginForm.querySelector("input");
//const loginButton= loginForm.querySelector("button");
const loginform = document.querySelector("#login-form"); 
const logininput = document.querySelector("#login-form input" );
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

//2
function onLoginSubmit(event){
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
      const username = logininput.value;
    localStorage.setItem(USERNAME_KEY,username);
      paintGreetings(username);
};

    


//3
function paintGreetings(anythingname){
  greeting.innerText=`hello ${anythingname}` ;
  greeting.classList.remove(HIDDEN_CLASSNAME); 

}




//1
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
 loginform.classList.remove(HIDDEN_CLASSNAME);

 loginform.addEventListener("submit",onLoginSubmit);

} else {
  paintGreetings(savedUsername);
  
}
