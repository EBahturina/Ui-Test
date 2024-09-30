const {I} = inject();
module.exports = {  
  name: '.bx-authform-input-container input[name = "USER_LOGIN"]',
  password: '.bx-authform-input-container input[name = "USER_PASSWORD"]',
  button: '.bx-authform-formgroup-container input[name = "Login"]', 
  errorMessage: {css: '.alert.alert-danger'},
   
  fillLogin(user) {
    I.fillField(this.name, user.name);
    I.fillField(this.password, user.password)
  },
  tryLogin() {
    I.click(this.button);
  }
}

