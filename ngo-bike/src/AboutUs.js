import React, {useState} from "react";

export default function AboutUs() {
    const [infoRotation, setInfoRotation] = useState("about-bubble-rotator-still");

    function handleBubbleClick(bubble) {
        setInfoRotation("about-bubble-rotator-quarter-Rotation");
    }

    return (
        <section className="about">
            <div id="about-info-container">
                <div id="about-info-textfield"></div>
                <div id={infoRotation}>
                    <div className="rotating-info-bubble" id="bubble1" onClick={e => handleBubbleClick(e.target)}>1</div>
                    <div className="rotating-info-bubble" id="bubble2" onClick={e => handleBubbleClick(e.target)}>2</div>
                    <div className="rotating-info-bubble" id="bubble3" onClick={e => handleBubbleClick(e.target)}>3</div>
                    <div className="rotating-info-bubble" id="bubble4" onClick={e => handleBubbleClick(e.target)}>4</div>
                </div>
            </div>
        </section>
    );
};