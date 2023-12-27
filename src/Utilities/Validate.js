export const validateSignIn = (email, password) =>{
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassowrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let errorMsg= '';
    if(!isValidEmail){
        errorMsg += "Please enter a valid emailId. "
    }
    if(!isValidPassowrd){
        errorMsg += "Please enter a valid password. "
    }
    return errorMsg === ''? null: errorMsg;
}

export const validateSignUp = (email, password, fullname)=>{
    let errorMsg = '' ;
    if (fullname == null || fullname.length <= 5){
        errorMsg = "Please enter a valid name. ";
    }
    const signInError = validateSignIn(email, password);
    errorMsg += signInError===null? '': signInError;
    return errorMsg === ''? null: errorMsg;
}