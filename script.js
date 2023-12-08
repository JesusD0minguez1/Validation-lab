const fnameID = document.getElementById("fname");
const lnameID = document.getElementById("lname");
const emailID = document.getElementById("email");
const addressID = document.getElementById("address");
const cityID = document.getElementById("city");
const stateID = document.getElementById("state");
const zipID = document.getElementById("zcode");
const phoneID = document.getElementById("phoneNum")
const passID = document.getElementById("password")
const verifyPassID = document.getElementById("VerifyPass");
const warning = document.getElementById("WarningMSG");

const name_pattern = /\w{2,}/;
const email_pattern = /\w*@w*.[^,]+/;
const state_pattern = /[A-Z]{2}/;
const zipcode_pattern = /([0-9]{5})([-][0-9]{4})?/;
const phone_pattern = /[1]?[(]?[\d{3}]+[)]?[-]?[\s]?[0-9{3}]+[-]?[0-9{4}]/;
const address_pattern = /([\w\s]{1,})/;
const city_pattern = /([\w\s]{2,})/;
const pass_pattern = /((?=.*[A-Z])(?=.*[0-9])(?=.*[\W])(.{8,}))/;
let error_msg = "";
let no_errors = true;

const validate = () => {
    error_msg = "";
    no_errors = true;
    if(!name_pattern.test(fnameID.value)){
        error_msg = "First name needs to be at least two letter. <br/>";
        no_errors = false;
    }
    if(!name_pattern.test(lnameID.value)){
        error_msg = "Last name needs to be at least two letter. <br/>";
        no_errors = false;
    }
    if(!email_pattern.test(emailID.value)){
        error_msg = "must have at least one character, followed by an '@', then at least two characters, followed by a dot, and then at least two more characters <br/>";
        no_errors = false;
    }
    if(!address_pattern.test(addressID.value)){
        error_msg = "Last name needs to be at least two letter. <br/>";
        no_errors = false;
    }
    if(!city_pattern.test(cityID.value)){
        error_msg = "must contain at least two letters, other characters are acceptable as well.. <br/>";
        no_errors = false;
    }
    if(!state_pattern.test(stateID.value)){
        error_msg = "Needs to be two uppercase letters. <br/>";
        no_errors = false;
    }
    if(!zipcode_pattern.test(zipID.value)){
        error_msg = "Zip code needs to be as least 5 digits. <br/>";
        no_errors = false;
    }
    if(!pass_pattern.test(passID.value)){
        error_msg = "Invalid Password. <br/>";
        no_errors = false;
    }
    if(!pass_pattern.test(verifyPassID.value)){
        error_msg = "Invalid Password. <br/>";
        no_errors = false;
    }
    warning.innerHTML = error_msg;
};

const mySubmit = () => {
    validate();
    return no_errors;
};
