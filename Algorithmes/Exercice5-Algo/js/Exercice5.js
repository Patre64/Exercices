var login =prompt("Taper votre pseudo");
var confirm_login =prompt("Confirmer votre pseudo");

function validate() {
 
    if (login!=confirm_login) {
        alert("Les pseudos ne correspondent pas.");
        return false;
    }else {
        alert("Les pseudos correspondent.");
        return true;
    }
}

validate();

