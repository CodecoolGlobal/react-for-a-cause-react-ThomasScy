import React, {useState} from "react";
import DonateFormInput from "./DonateFormInput";

export default function Donate() {
    const donatePos = [
        {left: "200px", top: "500px"}, 
        {left: "200px", top: "300px"},
    ];

    const [donateDivClass, setDonateDivClass] = useState("donate-div-donation1");
    const [donateOptionsState, setDonateOptionsState] = useState("");
    const [bikerAnimation, setBikerAnimation] = useState("");
    const [bikerIconPosition, setBikerIconPosition] = useState("donate-button-right");

    donateDivClass === "donate-div-donation3" && turnBikerLeft();
    donateDivClass === "donate-div-donation6" && turnBikerRight();
    document.body.style.overflowY = donateDivClass === "donate-div-donation2" || donateDivClass === "donate-div-donation5" ? "hidden" : "";

    function handleClick() {
        console.log("clicked")
        donateDivClass === "donate-div-donation1" || donateDivClass === "donate-div-donation2" ? donationMoveRight() : donationMoveLeft();
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
    }

    return (
        <div className={`donate-div ${donateDivClass}`}>
            <div className={`donate-options-container ${donateOptionsState}`}>
                <form>
                    
                </form>
            </div>
            <div className="donate-button-root">
                <div id="donate-button" className={`${bikerAnimation} ${bikerIconPosition}`} onClick={handleClick}></div>
            </div>
        </div>
    )
}