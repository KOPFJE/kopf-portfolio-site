function Info(props) {
    return(
        <div id="infocontent">
            <h3>Who am I?</h3>
            <div id="infocontainer" class="maincontainer">
                <div id="sideinfo">
                    <h4>Links</h4>
                    <ul>
                        <li>JYU Gitlab</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                    </ul>
                    <h4>Professional skills</h4>
                    <ul>
                        <li>Strong in</li>
                        <ul>
                            <li>Java</li>
                            <li>C#</li>
                            <li>JavaScript</li>
                            <li>HTML5 / CSS3</li>
                            <li>SQL</li>
                        </ul>
                        <li>Familiar with</li>
                        <ul>
                            <li>Python</li>
                            <li>Haskell</li>
                        </ul>
                    </ul>
                    <h4>Language skills</h4>
                    <ul>
                        <li>Fluent in</li>
                        <ul>
                            <li>Finnish</li>
                            <li>English</li>
                        </ul>
                        <li>Basics in</li>
                        <ul>
                            <li>German</li>
                            <li>Swedish (B1)</li>
                        </ul>
                    </ul>
                </div>
                <div id="aboutme">
                    <h3>About me</h3>
                    <p>
                        I am a postgraduate mathematical IT student working towards my master's degree. My plan right now is to get some work experience full-time for a while, and 
                        then shift into finishing my thesis part-time while working. I have experience programming in a team or solo.
                    </p>
                    <h3>Education</h3>
                    <div class="educationCard">
                        <div>
                            <header>
                                <p>B.Sc. Mathematical Information Technology</p>
                                <p>Graduated: September 2020</p>
                            </header>
                            <content>
                                <ul>
                                    <li>Minor in mathematics (25 credits)</li>
                                    <li>Orientation for master's in games and gamification</li>
                                </ul>
                            </content>
                        </div>                     
                    </div>
                    <div>
                    <header>
                            <p>M.Sc. Mathematical Information Technology</p>
                            <p>Ongoing</p>
                        </header>
                        <content>
                            <ul>
                                <li>Orientation for software and telecommunication technology</li>
                            </ul>
                        </content> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Info;