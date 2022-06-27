
// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("vorname", userObj.vorname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("nachname", userObj.nachname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("geburtsdatum", userObj.geburtsdatum);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("telefonnummer", userObj.telefonnummer);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("passwort", userObj.passwort);
    if (result.isNotValid) { return result; }


    //check length
    result = validateLib.checkLength("passwort", userObj.passwort, 6, 25);
    if (result.isNotValid) { return result; }

    //check Firstname
    result = validateLib.checkFirstname("vorname",userObj.vorname, 3, 15);
    if (result.isNotValid) { return result; }

    //check Lastname
    result = validateLib.checkLastname("nachname",userObj.nachname, 3, 15);
    if (result.isNotValid) { return result; }

    //check Date
    result = validateLib.checkDate("geburtsdatum",userObj.geburtsdatum);
    if (result.isNotValid) { return result; }

    //check Phone
    result = validateLib.checkPhone("telefonnummer",userObj.telefonnummer);
    if (result.isNotValid) { return result; }

    //check email
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }


    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
