import { useState, useEffect } from 'react';
// import axios from 'axios';

const useForm = validation => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        number: '',
        address: '',
    })
    // Get request
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => setValues(response.data.total));

    // }, []);

    // Post Request
    // useEffect(() => {
    //    const contact={
    //         username:"Hari Om Panday",
    //         email:"pandayhariom2898@gmail.com",
    //         number:'8859509277',
    //         address:"Lucknow"
    //       };
    //     axios.post('https://jsonplaceholder.typicode.com/posts', contact)
    //         .then(response => setValues(response.data.id));
    
    // }, []);

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validation(values))
    }
    return { handleChange, values, handleSubmit, errors };
};
export default useForm;