function valid()
{
let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input');
let pass = document.getElementById('password'),
    repass = document.getElementById('repassword'),
    login = document.getElementById('login');

let re = new RegExp('^[a-zA-Z0-9]+$');

const buff = {
    login: 'asd',
    password: '123'   
}


function deletepos(){
    pass.classList.remove('pos');
    repass.classList.remove('pos');
    pass.classList.add('error');
    repass.classList.add('error');
}


form.onsubmit = function(){
    formInputs.forEach(function (input) {   
        if (input.value === '') {   
            input.classList.add('error');  
            input.classList.remove('pos'); 
            console.log('inputs none');
            if (pass.value === '' || repass.value === ''){
                document.getElementById('message').innerHTML = 'Пароли не могут быть пустыми!';
                return false;
            } 
        }else{ 
            if (login.value == buff.login){
                input.classList.remove('pos');
                input.classList.add('error');
                return false;
            }else{
                input.classList.remove('error');
                input.classList.add('pos');
            }  
        }  
    });

    let loginr = login.value; 
    if (login.value == buff.login){
        deletepos();
        console.log('Same person');
        document.getElementById('message').innerHTML = 'Такой пользователь уже существует!';
        return false;
    } 

    if (pass.value.length < 8 ){
        document.getElementById("message").innerHTML = "Пароль должен быть не менее 8 символов";
        console.log('not 8 symbols');
        deletepos();
        return false;  
    }

    if(!re.test(pass.value)){
        deletepos();
        console.log('not english words');
        document.getElementById('message').innerHTML = 'Пароль не содержит английский буквы!';
        return false; 
    }

    if ((pass.value == repass.value) && pass.value != '' && repass.value != '' && input.value != ''){     
    console.log('Yes');
        document.getElementById('message').innerHTML = '';
        form.submit();
    }else {
        console.log('No');
        deletepos();
        document.getElementById('message').innerHTML = 'Пароли не совпадают!';
        return false;
    } 
}
}

function openSection(idSection) {
    closeSection();
    document.getElementById(idSection).style.display = "block";
    document.body.style.top = `-${window.scrollY}px`;
}
function closeSection()
{
    let content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.body.style.position = '';
    document.body.style.top = '';
}
var val = 0;
var like = document.getElementById("like");
like.addEventListener("click", function(){ 
    this.classList.toggle("active");
    document.getElementById("label").innerHTML = val = 1 - val;
});