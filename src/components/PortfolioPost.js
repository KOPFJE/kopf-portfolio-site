function PortfolioPost(props) {
    return(
        <div class="portfolioPost">
            <h3 class="postheading">TJTS5901 - Digicanem Dogmap</h3>
            <header class="projectinfo">
                <span class="teamsize">Group: 4</span>
                <ul class="languageinfo">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <ul class="stackinfo">
                    <li>Flask</li>
                    <li>Leaflet</li>
                    <li>MongoDB</li>
                    <li>Azure DevOps</li>
                    <li>Docker</li>
                    <li>GitLab CI/CD</li>
                </ul>
            </header>
            <div class="postcontent">
                <img src="/digicanem_example.png" alt="Example" class={props.side} />
                <content>
                    <p>
                        Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. 
                        Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. 
                        Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. Test text test text. 
                        Test text test text. Test text test text.
                    </p>
                </content>
            </div>
        </div>
    );
}
export default PortfolioPost;