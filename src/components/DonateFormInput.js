import React, {useState} from "react";
import "./DonateForm.css";


export default function DonateForm(props) {
    const {label, onChange, errorMessage, id, ...inputProps} = props;
    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} required />
            <span>{errorMessage}</span> 
        </div>
    )
};