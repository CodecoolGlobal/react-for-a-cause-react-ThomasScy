import React, {useState} from "react";

export default function AboutUs() {
    const infos = [
        {
            id: 1,
            name: "Our MISSION",
            icon: "../public/src/mission.jpg",
            text: "To Enhance access to social-economic services for Vulnerable groups and communities in Uganda particulary Busoga sub region through provision of bicycles. Capacity building,networking,research and policy advocacy to contribute to a productive and transformed society.", 
        },
        {
            id: 2,
            name: "Who we ARE",
            icon: "../public/src/mission.jpg",
            text: "The First African Bicycle Information Organization is an NGO that promotes Sustainable transport in Uganda with emphasis on Non Motorized Transport. We use a Bicycle as a tool of social transformation to impact to the lives of the vulnerable in Busoga Sub region. This is achieved through provision of Bicycles to ease access to microeconomics services. Overtime, FABIO has become a one stop center on issues of active transport, not only in Uganda but in Africa as a whole. It is on record that FABIO organized the first ever pan African bicycle conference in Uganda in 2001 which was attended by over 53 Countries across the globe. FABIO Recognizing that most of the African countries including Uganda did not have comprehensive transport policies, we embarked on engagement activities with the Ministry of Works and Transport, Kampala City Council Authority and lower urban councils of Jinja and Iganga. As an outcome, the National  non motorized transport Policy (NMT) was launched in 2013. And FABIO with support of UNEP has spearheaded its implementation on a pilot basis in Kampala, Mukono, Jinja and Iganga Municipalities. Various projects have been started since then to fulfill our mission.", 
        },
        {
            id: 3,
            name: "Our VALUES",
            icon: "../public/src/mission.jpg",
            text: "Quality: We strive to give the best according to our abilities, skills and laid down procedures. Passion and team work: We energize, motivate and support one another to accomplish our work. Equity and Equality: We exercise and work towards justice and impartiality. Integrity: Working with openness, honesty and respect for each other and the communities we serve. Accountability: Taking responsibility for our purpose and resources as individuals and as an organization",

        },
        {
            id: 4,
            name: "Our VISION",
            icon: "../public/src/mission.jpg",
            text: "An empowered society where all people are healthy, active and enjoying social economic services."
        },
    ];

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
    const [infoText, setInfoText] = useState(infos[0].text)
    const [textFading, setTextFAding] = useState("");

    console.log(posBubble1 === bubblePositions[0]);

    function handleBubbleClick(id, position) {
        position.left === "600px" ? rotateCcw(id) : 
            position.top === "600px" ? rotateHalf(id) : 
            position.left === "0px" ? rotateQuarter(id) :
            setInfoRotation("");

        setTimeout(() => {
            setInfoRotation("");
            setBubbleRotation("");
        }, 1000);
    };
    function rotateCcw(id) {
        setInfoRotation("about-bubble-rotator-quarter-rotation-ccw");
        setBubbleRotation("about-bubble-rotation-quarter");
        updateInfoText(id);
        setTimeout(() => updateBubblePosition(-1), 1000);

    };
    function rotateHalf(id) {
        setInfoRotation("about-bubble-rotator-half-rotation");
        setBubbleRotation("about-bubble-rotation-half-ccw");
        updateInfoText(id);
        setTimeout(() => updateBubblePosition(2), 1000);
    };
    function rotateQuarter(id) {
        setInfoRotation("about-bubble-rotator-quarter-rotation");
        setBubbleRotation("about-bubble-rotation-quarter-ccw");
        updateInfoText(id);
        setTimeout(() => updateBubblePosition(1), 1000);
    };
    function updateInfoText(id) {
        setTextFAding("text-fade-out");
        setTimeout(() => {
            setInfoText(infos[id - 1].text);
            setTextFAding("text-fade-in")
        }, 1000)
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
                <div id="about-info-text-container">
                    <div id="about-info-text" className={textFading}><p>{infoText}</p></div>
                </div>
                <div id={infoRotation} className="about-bubble-rotator">
                    <div className={`${bubbleRotation} about-bubble`} id="bubble1" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble1}></div>
                    <div className={`${bubbleRotation} about-bubble`} id="bubble2" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble2}></div>
                    <div className={`${bubbleRotation} about-bubble`} id="bubble3" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble3}></div>
                    <div className={`${bubbleRotation} about-bubble`} id="bubble4" onClick={e => handleBubbleClick(e.target.id.split("")[6], e.target.style)} style={posBubble4}></div>
                </div>
            </div>
        </section>
    );
};