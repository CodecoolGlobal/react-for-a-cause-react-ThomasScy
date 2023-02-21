export default function AboutUs() {
    return (
        <section id="about" className="about">
            <div id="rotating-info-container">
                <div id="rotating-info-textfield"></div>
                <div id="rotating-info-rotator">
                    <div className="rotating-info-bubble-container" id="ribc1">
                        <div className="rotating-info-bubble"></div>
                    </div>
                    <div className="rotating-info-bubble-container" id="ribc2">
                        <div className="rotating-info-bubble"></div>
                        <div className="rotating-info-bubble"></div>
                    </div>
                    <div className="rotating-info-bubble-container" id="ribc3">
                        <div className="rotating-info-bubble"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};