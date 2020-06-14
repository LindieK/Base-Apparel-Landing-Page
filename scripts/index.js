let errorMsg = document.getElementById('error-msg');
let email = document.querySelector('input');
const button = document.querySelector('button');
const errImg = document.querySelector('form img');
const input_regex = /^([a-z\d_%#!]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

window.onload= processForm();

		function processForm(){
    		
				email.addEventListener('keyup', e => {
						validate(e.target, input_regex);
				});

		}

		function validate(field, regex){
			resetError(field);
			regex.test(field.value) ? resetError(field) : showError(field);
		
		}

		function resetError(field){
			field.className = '';
			errorMsg.className = 'hide';
			button.disabled = false;
		}

		function showError(field){
    		field.className = 'invalid';
    		errorMsg.innerHTML = "Please enter a valid email address";
    		errorMsg.className = 'show';
    		button.disabled = true;

		}