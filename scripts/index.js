window.onload= function(){
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const errImg = document.querySelector('form img');
    const errorMsg = document.querySelector('#error-msg');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(email.value == ""){
            showError(errorMsg, "Please enter an email address.");
            errImg.className = "show";
        }
        else{
            let regex =/^\S+@\S+\.\S+$/;
            if(regex.test(email.value) === false){
                showError(errorMsg, "Please enter a valid email address");
                errImg.className = "show";
            }
            else{
                showError(errorMsg, "");
                errImg.className ="hide";
            }
        }
    });
}

function showError(element, message){
    element.innerHTML = message;
    element.style.color = 'red';
    email.className = 'invalid';
    
}
