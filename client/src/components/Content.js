import  PortfolioPost from './PortfolioPost';

function Content(props) {
    const posts = [
        {
            title : "Own portfolio site",
            teamsize : 1,
            languagestack : ["JavaScript", "HTML", "CSS"],
            techstack : ["MongoDB", "Express.js", "React.js", "Node.js"],
            imglink : "/showcaseimgs/portfolio_example.png",
            infolink : "https://github.com/KOPFJE/kopf-portfolio-site/",
            content : 
            `This portfolio right now is still work in progress. As such, the public deployment is currently just a static page. The finished product will use the [MERN stack](https://www.mongodb.com/mern-stack) using the architecture of React as front-end, Express as back-end and an API between the front and back. 
            The content is stylized using the React-markdown plugin. The finished product will have an in-app authentication for an admin dashboard, where an admin can add, remove and modify portfolio showcase posts and modify the info of the portfolio user.`
        },
        {
            title : "TJTS5901 - Digicanem Dogmap",
            teamsize : 4,
            languagestack : ["Python", "JavaScript", "HTML", "CSS"],
            techstack : ["Flask", "Leaflet", "MongoDB", "Azure DevOps", "Docker", "Gitlab CI/CD"],
            imglink : "/showcaseimgs/digicanem_example.png",
            infolink : "https://gitlab.jyu.fi/digicanem/tjts5901-dogmap_template",
            content : 
            `This project was done with a group of 4 for the course "Continuous Software Engineering" (TJTS5901). The project is a web app for users to mark out good dogwalking spots in the map. I mainly focused on handling the pipeline for the project, but I also implemented some of the features like marker handling. I also made a lot of the UI design and implementation.
            The project was done in an agile way using a sprint structure. There also was a client for the project, [Discovery Street](https://discoverystreet.fi/), making the course a very unique during my time in the University of Jyväskylä.`
        },
        {
            title : "Conthrive 2020 - Alvacha",
            teamsize : 5,
            languagestack : ["JavaScript", "HTML", "CSS"],
            techstack : ["Chart.js", "Materialize UI"],
            imglink : "/showcaseimgs/alvacha_example.png",
            infolink : "https://github.com/TSkoll/Alvacha",
            content : 
            `Alvacha was the result of a competition for the hackathon [Conthrive 2020](https://www.facebook.com/conthrive/), where our group of friends (me and 4 students from Jyväskylä University of Applied Sciences) developed a prototype for parsing and plotting water usage data for analysis using JavaScript and Chart.js framework. This event helped me work in a group under a tight schedule.`
        },
        {
            title : "HTKA114 - Project Nauternius",
            teamsize : 5,
            languagestack : ["C#"],
            techstack : ["Unity"],
            imglink : "/showcaseimgs/nauternius_example.png",
            infolink : "https://github.com/MoleTrooper/nauternius",
            content : 
            `Project Nauternius was a prototype developed for the game development project course HTKA114. The course was interdisciplinary with students coming from all different faculties from JYU. I worked as a game designer and a programmer. Programming side my main focus was the camera. Designing wise I was a part of handling the puzzle and level design.`
        },
        {
            title : "TIEP111 - Ice hockey team registry",
            teamsize : 1,
            languagestack : ["Java"],
            techstack : ["JavaFX"],
            imglink : "/showcaseimgs/ohj2_example.png",
            infolink : "https://gitlab.jyu.fi/lajavani/ohj2",
            content : 
            `The programming 2 course in JYU has a *legendary* status in the IT student organization. My version of the programming 2 course project is a program, which handles the management of an ice hockey team. The team has players, who can have injuries. The team also has matches. The program is done using the OOP paradigm.`
        }
    ];

    return(
        <div id="contentbg">
            <div id="maincontent">
                <div class="maincontainer">
                        { 
                            posts.map((content, i) =>
                                <PortfolioPost key={i} side={ i % 2 === 0 ? "imgleft" : "imgright" } content={content} />
                            ) 
                        } 
                </div>
            </div>
        </div>
    );
  }
  export default Content;