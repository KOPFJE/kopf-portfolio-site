import ReactMarkdown from 'react-markdown';

function PortfolioPost(props) {
    const teamsize = checkTeamsize(props.content.teamsize);
    const languagestack = props.content.languagestack.map(lang => <li>{lang}</li>);
    const techstack = props.content.techstack.map(tech => <li>{tech}</li>);


    function checkTeamsize(givensize) {
        if(isNaN(parseInt(givensize)) || givensize <= 0) return "Non-defined team size";
        switch (givensize) {
            case 1:
                return "Solo";
            case 2:
                return "Pair";
            default:
                return "Group: " + givensize;
        }
    }

    
    return(
        <div class="portfolioPost">
            <h3 class="postheading">{ props.content.title }</h3>
            <header class="projectinfo">
                <span class="teamsize">{teamsize}</span>
                <ul class="languageinfo">
                    {languagestack}
                </ul>
                <ul class="stackinfo">
                    {techstack}
                </ul>
            </header>
            <div class="postcontent">
                <img src={ process.env.PUBLIC_URL + props.content.imglink } alt="Example" class={props.side} />
                <content class="posttext">
                    <ReactMarkdown children={ props.content.content } />
                    <p>You can find the repository at <a href={props.content.infolink}>{props.content.infolink}</a>.</p>
                </content>
            </div>
        </div>
    );
}
export default PortfolioPost;