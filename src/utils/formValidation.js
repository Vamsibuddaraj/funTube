const formValidation = (email,password) => {

    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let passswordRegex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(!emailRegex.test(email)){
        return "Enter correct email..!"
    }
    if(!passswordRegex.test(password)){
        return "Enter strong password (Aa___2)..!"
    }
    return null
}

export default formValidation