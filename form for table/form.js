const NAME_FIELD = document.getElementById('name')
const SURNAME_FIELD = document.getElementById('surname')
const MAIL_FIELD = document.getElementById('mail')
const LOGIN_FIELD = document.getElementById('login')
const PASSWORD_FIELD = document.getElementById('password')
const FORM_CONTAINER = document.getElementById('formContainer')
const ADD_BUTTON = document.getElementById('addBtn')
const ERROR_TEXT = document.getElementById("error")

const FORM = []

function clearValues(){
    NAME_FIELD.value = ''
    SURNAME_FIELD.value = ''
    MAIL_FIELD.value = ''
    LOGIN_FIELD.value = ''
    PASSWORD_FIELD.value = ''
    ERROR_TEXT.textContent = ''
}

function render(){
    let html = ''
    FORM.forEach((item) => {
        html+=item.getHtml()
    })
    FORM_CONTAINER.innerHTML = html;
}


function Forms(name,surname,mail,login,password){
    this.name = name;
    this.surname = surname;
    this.mail = mail;
    this.login = login ;
    this.password = password;
}

Forms.prototype.logForms = function (){
    console.log('Forms: ');
    console.log(this);
}
Forms.prototype.getHtml = function (){
    return`
       <div>
           <span>User: ${this.name} ${this.surname}</span>
       </div>
             `
}

ADD_BUTTON.addEventListener('click', function addForm () {
    FORM.splice(0, FORM.length)

    const newForms = new Forms(NAME_FIELD.value, SURNAME_FIELD.value, MAIL_FIELD.value,
        LOGIN_FIELD.value, PASSWORD_FIELD.value)
    newForms.logForms();
    FORM.push(newForms)

    console.log('FORM ARRAY:  ');
    console.log(FORM)

    let errorText = validateForms(newForms)

    if (errorText !== "") {
        ERROR_TEXT.textContent = errorText
        return
    }

    clearValues()
    render()
})

function validateForms(forms) {
    let validator = new Validator(forms)

    if (!validator.validateName()) {
        return "Name is empty!"
    }

    if (!validator.validateSurname()) {
        return "Surname is empty!"
    }

    if (!validator.validateEmail()) {
        return "Email is invalid! Try another"
    }

    if (!validator.validatePassword()) {
        return "Password should be at least 8 characters"
    }

    return ""
}

class Validator {
    constructor(form) {
        this.form = form
    }

    validateEmail() {
        let regexp = /^[^@]{5,}@(gmail.com|mail.ru)$/
        return regexp.test(this.form.mail.toLowerCase())
    }

    validatePassword() {
        return this.form.password && this.form.password.length >= 8
    }

    validateName() {
        let regexp = /^[a-zA-Z]+$/
        return regexp.test(this.form.name)
    }

    validateSurname() {
        return this.form.surname && this.form.surname.length > 0
    }
}