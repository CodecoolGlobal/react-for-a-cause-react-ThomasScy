import React, {useState} from "react";

export default function AboutUs() {
    const bubblePositions = [
        {left: "300px", top: "0px"}, 
        {left: "600px", top: "300px"},
        {left: "300px", top: "600px"},
        {left: "0px", top: "300px"}
    ];
    
    const [infoRotation, setInfoRotation] = useState("");
    const [posBubble1, setPosBubble1] = useState(bubblePositions[0]);
    const [posBubble2, setPosBubble2] = useState(bubblePositions[1]);
    const [posBubble3, setPosBubble3] = useState(bubblePositions[2]);
    const [posBubble4, setPosBubble4] = useState(bubblePositions[3]);
    const [bubbleRotation, setBubbleRotation] = useState("");

    console.log(posBubble1 === bubblePositions[0]);

    function handleBubbleClick(id, position) {
        position.left === "600px" ? rotateCcw() : 
            position.top === "600px" ? rotateHalf() : 
            position.left === "0px" ? rotateQuarter() :
            setInfoRotation("");

        setTimeout(() => {
            setInfoRotation("");
            setBubbleRotation("");
        }, 1000);
    };
    function rotateCcw() {
        setInfoRotation("about-bubble-rotator-quarter-rotation-ccw");
        setBubbleRotation("about-bubble-rotation-quarter");
        setTimeout(() => updateBubblePosition(-1), 1000);
    };
    function rotateHalf() {
        setInfoRotation("about-bubble-rotator-half-rotation");
        setBubbleRotation("about-bubble-rotation-half-ccw");
        setTimeout(() => updateBubblePosition(2), 1000);
    };
    function rotateQuarter() {
        setInfoRotation("about-bubble-rotator-quarter-rotation");
        setBubbleRotation("about-bubble-rotation-quarter-ccw");
        setTimeout(() => updateBubblePosition(1), 1000);
    };

    function updateBubblePosition(posChange) {
        const bubbleStateSetter = [setPosBubble1, setPosBubble2, setPosBubble3, setPosBubble4];
        const currentBubblePosition = [posBubble1, posBubble2, posBubble3, posBubble4]
        const newPositions = [1, 2, 3, 4].map(position => (
            position + posChange === 5 ? 1 :
            position + posChange === 6 ? 2 :
            position + posChange === 0 ? 4 :
            position + posChange
        ));
        let index = 0;
        for (let setter of bubbleStateSetter) {
            setter(currentBubblePosition[newPositions[index] - 1]);
            index++;
        };
    };

    return (
        <section id="about" className="about">
            <div id="about-info-container">
                <div id="about-info-textfield"></div>
                <div id={infoRotation} className="about-bubble-rotator">
                    <div className={`${bubbleRotation} about-bubble`} id="bubble1" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble1}>some text for testing purposes</div>
                    <div className={`${bubbleRotation} about-bubble`} id="bubble2" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble2}>2</div>
                    <div className={`${bubbleRotation} about-bubble`} id="bubble3" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble3}>3</div>
                    <div className={`${bubbleRotation} about-bubble`} id="bubble4" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble4}>4</div>
                </div>
            </div>
        </section>
    );
};