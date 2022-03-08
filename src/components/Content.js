import  PortfolioPost from './PortfolioPost';

function Content(props) {
    return(
        <div id="maincontent">
            <div class="maincontainer">
                    {[...Array(5)].map((x, i) =>
                            <PortfolioPost key={i} side={ i % 2 === 0 ? "imgleft" : "imgright" } />
                    )} 
            </div>
        </div>
    );
  }
  export default Content;