const signup_switch = document.querySelector(".signup-btn");
const login_switch = document.querySelector(".login-btn");
const inner_form_container = document.querySelector(".inner-form-container");
const signup_input_list = document.querySelectorAll(".sign-up-input");
const login_input_list = document.querySelectorAll(".login-input")
const signup_inputs = Array.from(signup_input_list);
const login_inputs = Array.from(login_input_list);
const signup_btn = document.querySelectorAll(".form__btn")[0];
const login_btn = document.querySelectorAll(".form__btn")[1];
const signup_form = document.querySelector(".signup-form");
const login_form = document.querySelector(".login-form");
const invalid_error_signup = document.querySelector(".invalid-error-signup");
const invalid_error_login = document.querySelector(".invalid-error-login");

login_switch.addEventListener("click",()=>{
    signup_switch.classList.remove("active-btn");
    login_switch.classList.add("active-btn");
    inner_form_container.style.left = "-100%";
})

signup_switch.addEventListener("click",()=>{
    login_switch.classList.remove("active-btn");
    signup_switch.classList.add("active-btn");
    inner_form_container.style.left = "0%";
})

signup_btn.addEventListener("click",(target)=>{
    target.preventDefault();
    var has_ivalid = signup_inputs.some((elm,idx,arr)=>{
        return !(elm.checkValidity());
    })
    signup_inputs.forEach((elm,idx,arr)=>{
        elm.classList.remove("invalid-input");
    })
    if(has_ivalid){
        var invalid_inputs = signup_inputs.filter((elm,idx,arr)=>{
            return !(elm.checkValidity());
        })
        invalid_inputs.forEach((elm,idx,arr)=>{
            elm.classList.add("invalid-input");
        })
        invalid_error_signup.style.display = "block";
    }
    else{
        signup_form.submit();
    }
})

login_btn.addEventListener("click",(target)=>{
    target.preventDefault();
    var has_ivalid = login_inputs.some((elm,idx,arr)=>{
        return !(elm.checkValidity());
    })
    login_inputs.forEach((elm,idx,arr)=>{
        elm.classList.remove("invalid-input");
    })
    if(has_ivalid){
        var invalid_inputs = login_inputs.filter((elm,idx,arr)=>{
            return !(elm.checkValidity());
        })
        invalid_inputs.forEach((elm,idx,arr)=>{
            elm.classList.add("invalid-input");
        })
        invalid_error_login.style.display = "block";
    }
    else{
        login_form.submit();
    }
})