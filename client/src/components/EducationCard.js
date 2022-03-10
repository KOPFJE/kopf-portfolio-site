function EducationCard(props) {
    const detailslist = [ ["Minor in mathematics (25 credits)", "Orientation for master's in games and gamification"], ["Orientation for software and telecommunication technology"] ];
    return(
    <div class="educationCard">
        <h4>University of Jyväskylä</h4>
        <DegreeCard 
            degree="B.Sc. Mathematical Information Technology" 
            graduation="Graduated: September 2020"
            detailslist={ detailslist[0] }
        />
        <DegreeCard 
            degree="M.Sc. Mathematical Information Technology" 
            graduation="Ongoing"
            detailslist={ detailslist[1] }
        />
    </div>
    );
}

function DegreeCard(props) {
    const details = props.detailslist;
    const listDetail = details.map((detail) => <li>{ detail }</li>);
    return(
        <div class="degreeCard">
            <header>
                <p class="degree">{props.degree}</p>
                <p class="graduation">{props.graduation}</p>
            </header>
            <content>
                <ul>
                    {listDetail}
                </ul>
            </content>
        </div>                     
    );
}
export default EducationCard;