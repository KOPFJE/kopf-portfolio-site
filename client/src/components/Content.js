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
            `This portfolio right now is still work in progress. As such, the public deployment is currently just a static page. The finished product will use the [MERN stack](https://www.mongodb.com/mern-stack) using the architecture of React as front-end, Express as back-end and an API between the front and back. The content is stylized using the React-markdown plugin. The finished product will have an in-app authentication for an admin dashboard, where an admin can add, remove and modify portfolio showcase posts and modify the info of the portfolio user.`
        },
        {
            title : "TJTS5901 - Digicanem Dogmap",
            teamsize : 4,
            languagestack : ["Python", "JavaScript", "HTML", "CSS"],
            techstack : ["Flask", "Leaflet", "MongoDB", "Azure DevOps", "Docker", "Gitlab CI/CD"],
            imglink : "/showcaseimgs/digicanem_example.png",
            infolink : "https://gitlab.jyu.fi/digicanem/tjts5901-dogmap_template",
            content : 
            `This project was done with a group of 4 for the course "Continuous Software Engineering" (TJTS5901). I mainly focused on handling the pipeline for the project, but I also implemented some of the features like marker handling. I also made a lot of the UI design and implementation.`
        },
        {
            title : "Conthrive 2020 - Alvacha",
            teamsize : 5,
            languagestack : ["JavaScript", "HTML", "CSS"],
            techstack : ["Chart.js", "Materialize UI"],
            imglink : "/showcaseimgs/portfolio_example.png",
            infolink : "https://github.com/TSkoll/Alvacha",
            content : 
            "**This** is a *test*. [Here](https://github.com/KOPFJE/kopf-portfolio-site/) is the GitHub repository for this project."
        },
        {
            title : "Own portfolio site",
            teamsize : 1,
            languagestack : ["JavaScript", "HTML", "CSS"],
            techstack : ["React.js", "MongoDB", "Node.js"],
            imglink : "/showcaseimgs/portfolio_example.png",
            infolink : "https://github.com/KOPFJE/kopf-portfolio-site/",
            content : 
            "**This** is a *test*. [Here](https://github.com/KOPFJE/kopf-portfolio-site/) is the GitHub repository for this project."
        },
        {
            title : "Own portfolio site",
            teamsize : 1,
            languagestack : ["JavaScript", "HTML", "CSS"],
            techstack : ["React.js", "MongoDB", "Node.js"],
            imglink : "/showcaseimgs/portfolio_example.png",
            infolink : "https://github.com/KOPFJE/kopf-portfolio-site/",
            content : 
            "**This** is a *test*. [Here](https://github.com/KOPFJE/kopf-portfolio-site/) is the GitHub repository for this project."
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