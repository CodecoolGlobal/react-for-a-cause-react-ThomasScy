import React, {useState} from "react";

    let rotations = null;

export default function AboutUs() {
    const bubblePos1 = {left: 300, top: 0};
    const bubblePos2 = {top: 300, right: 0};
    const bubblePos3 = {left: 300, bottom: 0};
    const bubblePos4 = {top: 300, left: 0};
    
    const [infoRotation, setInfoRotation] = useState("about-bubble-rotator-still");
    const [posBubble1, setPosBubble1] = useState(bubblePos1);
    const [posBubble2, setPosBubble2] = useState(bubblePos2);
    const [posBubble3, setPosBubble3] = useState(bubblePos3);
    const [posBubble4, setPosBubble4] = useState(bubblePos4);
    const [bubbleRotation, setBubbleRotation] = useState("about-bubble");


    function handleBubbleClick() {
        console.log("clicked")
        rotations += 1;
        console.log(rotations);
        setInfoRotation("about-bubble-rotator-quarter-rotation");
        setBubbleRotation("about-bubble-rotation-ccw");
        setTimeout(() => {setPosBubble1(bubblePos2); setPosBubble2(bubblePos3); setPosBubble3(bubblePos4); setPosBubble4(bubblePos1)}, 1000);
        // setTimeout((setInfoRotation("about-bubble-rotator-still")))
    };

    return (
        <section id="about" className="about">
            <div id="about-info-container">
                <div id="about-info-textfield"></div>
                <div id={infoRotation}>
                    <div className={bubbleRotation} id="bubble1" onClick={e => handleBubbleClick(e.target)} style={posBubble1}>some text for testing purposes</div>
                    <div className={bubbleRotation} id="bubble2" onClick={e => handleBubbleClick(e.target)} style={posBubble2}>2</div>
                    <div className={bubbleRotation} id="bubble3" onClick={e => handleBubbleClick(e.target)} style={posBubble3}>3</div>
                    <div className={bubbleRotation} id="bubble4" onClick={e => handleBubbleClick(e.target)} style={posBubble4}>4</div>
                </div>
            </div>
        </section>
    );
};