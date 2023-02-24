import React, {useState} from "react";
import DonateFormInput from "./DonateFormInput";

let interval = null;

export default function Donate() {
    const donatePos = [
        {left: "200px", top: "500px"}, 
        {left: "200px", top: "300px"},
    ];
    
    const [donateDivClass, setDonateDivClass] = useState("donate-div-donation1");
    const [donateOptionsState, setDonateOptionsState] = useState("");
    const [bikerAnimation, setBikerAnimation] = useState("");
    const [bikerIconPosition, setBikerIconPosition] = useState("donate-button-right");
    const [waitingAnimation, setWaitingAnimation] = useState("");
    const [formDisplay, setFormDisplay] = useState("flex");
    const [thanksDisplay, setThanksDisplay] = useState("none");
    const [formRootDisplay, setFormRootDisplay] = useState("absolute");
    const [ciaoVisibility, setCiaoVisibility] = useState("hidden");
    

    const [values, setValues] = useState({
        userName: "",
        fullName: "",
        donation: "",
        eMail: ""
    });

    const inputs = [
        {
            id: 1,
            name: "userName",
            type: "text",
            placeholder: "Username",
            label: "Username",
        },
        {
            id: 2,
            name: "fullName",
            type: "text",
            placeholder: "Full name",
            label: "Full name",
        },
        {
            id: 3,
            name: "donation",
            type: "text",
            placeholder: "Donation",
            label: "Your donation",
        },
        {
            id: 4,
            name: "eMail",
            type: "email",
            errorMessage: "Please enter a valid mail-adress",
            placeholder: "eMail",
            label: "e-mail adress",
            required: true,
        },
    ];

    donateDivClass === "donate-div-donation3" && turnBikerLeft();
    donateDivClass === "donate-div-donation6" && turnBikerRight();
    document.body.style.overflowY = donateDivClass === "donate-div-donation2" || donateDivClass === "donate-div-donation5" ? "hidden" : "";

    function handleClick() {
        clearInterval(interval);
        setWaitingAnimation("");
        donateDivClass === "donate-div-donation1" || donateDivClass === "donate-div-donation2" ? donationMoveRight() : donationMoveLeft();
        setTimeout(() => interval = setInterval(() => setWaitingAnimation("donate-button-animation-flip"), 4000), 1000);
    };

    function donationMoveRight() {
        const destination = donateDivClass.slice(-1);
        setDonateDivClass(`donate-div-donation${parseInt(destination) + 1}`);
        setBikerAnimation("donate-button-animation-right");
        setTimeout(() => setBikerAnimation(""), 1000)
    };

    function donationMoveLeft() {
        const destination = donateDivClass.slice(-1);
        setDonateDivClass(`donate-div-donation${parseInt(destination) + 1}`);
        setBikerAnimation("donate-button-animation-left");
        setTimeout(() => setBikerAnimation(""), 1000)
    };
    
    function turnBikerLeft() {
        setTimeout(() => {
            setDonateDivClass("donate-div-donation4");
            setBikerIconPosition("donate-button-left");
         }, 4000);
    };

    function turnBikerRight() {
        setTimeout(() => {
            setDonateDivClass("donate-div-donation1");
            setBikerIconPosition("donate-button-right");
         }, 4000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setFormDisplay("none");
        setThanksDisplay("flex");
        setInterval(() => setCiaoVisibility("visible"), 2200);
        setInterval(() => {
            donateDivClass === "donate-div-donation2" ? 
            setDonateDivClass("donate-div-donation7") : 
            setDonateDivClass("donate-div-donation8")
        }, 3000);
        setInterval(() => setFormRootDisplay("none"), 4000);
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <div className={`donate-div ${donateDivClass}`} style={{display: formRootDisplay}}>
            <div className={`donate-options-container ${donateOptionsState}`}>
                <div className="donate-form-container" style={{display: formDisplay}}>
                    <form onSubmit={handleSubmit}>
                        <h2>Every donation counts!</h2>
                        {inputs.map((input) => (
                            <DonateFormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                        ))}
                        <button>Submit</button>
                    </form>
                </div>
                <div className="donate-submitted-container" style={{display: thanksDisplay}}>
                    <h1>Thank you!</h1>
                    <h1 id="adios" style={{visibility: ciaoVisibility}}>ADIOS!</h1>
                </div>
            </div>
            <div className="donate-button-root">
                <div id="donate-button" className={`${bikerAnimation} ${bikerIconPosition} ${waitingAnimation}`} onClick={handleClick}></div>
            </div>
        </div>
    )
}