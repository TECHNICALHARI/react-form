import React, { useState } from 'react';
import './App.css';
import useForm from './useForm';
import Validation from './Validation';
const App=()=>{
    const{handleChange,errors,values,handleSubmit} =useForm(Validation);
    return (
        <div className="main_div">
        <form onSubmit={handleSubmit} >
            <div className="centerDiv">
                <h1 className="contact">Contact Us</h1>
                <div className="form-group">
                <label for="username">Username:</label><br/>
                <input type="text"  name="username" onChange={handleChange} value={values.username} /><br/>
                    {errors.username && <p>{errors.username}</p>}
                <br/>
                </div>
                <div className="form-group">
                <label for="email">Email:</label><br/>
                <input type="email"  name="email" onChange={handleChange} value={values.email} /><br/>
                {errors.email && <p>{errors.email}</p>}
                <br/>
                </div>
                <div className="form-group">
                <label for="number">Number:</label><br/>
                <input type="number"  name="number" onChange={handleChange} value={values.number} /><br/>
                {errors.number && <p>{errors.number}</p>}
                <br/>
                </div>
                <div className="form-group">
                <label for="address">Address:</label><br/>
                <input type="text"  name="address" onChange={handleChange} value={values.address} /><br/>
                {errors.address && <p>{errors.address}</p>}
                <br/>
                </div>
                <div className="submit_btn">
                <button className="btn">Submit</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default App;
