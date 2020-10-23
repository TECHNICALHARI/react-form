export default function validation(values){
    let errors={}
    if(!values.username.trim()){
        errors.username="Username Required";
    }
    if(!values.email.trim()){
        errors.email="Email Required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Email Address is invalid";
    }
    if(!values.number.trim()){
        errors.number="Number Required";
    }
    if(!values.address.trim()){
        errors.address="Address Required";
    }
    return errors;
}