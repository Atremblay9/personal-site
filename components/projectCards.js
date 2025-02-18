import WebsiteCard from "./websiteCard"


export default function ProjectCards({pathName}) {

//use  the useContext to change the descritions depending on which page the user is on. IE, short description on home page, long description on project page


if(pathName == "/"){

return <div className="projectCards">
        <div className="projectCard">
            <h3>Capstone Project</h3>
            <p>Currently working on my final project through NAIT. I am working with a variety of new and interesting software with focus on AI. See my project page for a grander description</p>
        </div>
        <div className="projectCard">
            <h3>JustMeJuliag.com</h3>
            <p>A website I made for my mother's handcrafted products. This site shows my comfort working to a client's specifications, comfort with React and Next.js, as well as ability to deploy websites.</p>
            <WebsiteCard imgSrc="/img/juliaMakesStuff.png" altContent="justMeJuliaG.com" siteLink="https://justmejuliag.com/" codeLink="https://github.com/Atremblay9/JuliaMakesStuff" />
        </div>
        <div className="projectCard">
            <h3>This Site</h3>
            <p>A portfolio website created to display my coding knowledge</p>
            <WebsiteCard imgSrc="/img/.png" altContent="AmTrem.dev" siteLink="#" codeLink="https://github.com/Atremblay9/personal-site" />
        </div>
        <div className="projectCard">
            <h3>Gamers Of Dungeons and Dragons</h3>
            <p>Website I've created with a partner to help with functions in the Gamers of Dungeons and Dragons club I help run at NAIT. This site helps demonstrate my abilities with security and authentication, database work, and collaboration. Currently under production</p>
            <WebsiteCard imgSrc="/img/GamersOfDndsite.png" altContent="GamersofDND" siteLink="https://gamersofdnd.netlify.app/" codeLink="https://github.com/Atremblay9/dnd-website" />
        </div>
    </div>
}
else{
    return <div className="projectCards">
        <div className="projectCard">
            <h3>Capstone Project</h3>
            <p>Though I can't share the code itself, my current capstone project (final project), has me working with a variety of new languages and software. This project uses python to run the backend, currently connected to a Neo4j Database through Django. My team is currently working to transfer from Django to FastAPI and the focus on this project is AI interaction through a chat bot that analyses the Database to respond with accurate data. We are focusing heavily on prompt generation and improving the current algorithm for faster and better responses. </p>
        </div>
        <div className="projectCard">
            <h3>JustMeJuliag.com</h3>
            <p>This was the first proper website I made, mind you this was still recent, but was a major accomplishment at the time. With this project I used my understanding of html and javascript, I made a function website for my crafty mother. She wanted something different to her previous Wordpress site, and I worked with her to build a site she is happy with, that I can continuously add to should she want to add features. My biggest difficulty with this site was attempting to connect her customers to her. At first I was looking at email API's and couldn't find the right one that would send her an email when a request was made. Turns out Netlify has a built in Forms function!</p>
            <WebsiteCard imgSrc="/img/juliaMakesStuff.png" altContent="justMeJuliaG.com" siteLink="https://justmejuliag.com/" codeLink="https://github.com/Atremblay9/JuliaMakesStuff" />
        </div>
        <div className="projectCard">
            <h3>This Site</h3>
            <p>A portfolio website created to display my coding knowledge</p>
            <WebsiteCard imgSrc="/img/.png" altContent="AmTrem.dev" siteLink="#" codeLink="https://github.com/Atremblay9/personal-site" />
        </div>
        <div className="projectCard">
            <h3>Gamers Of Dungeons and Dragons</h3>
            <p>Website I've created with a partner to help with functions in the Gamers of Dungeons and Dragons club I help run at NAIT. This site helps demonstrate my abilities with security and authentication, database work, and collaboration. Currently under maintenance for the addition of database so website is down.</p>
            <WebsiteCard imgSrc="/img/GamersOfDndsite.png" altContent="GamersofDND" siteLink="#" codeLink="https://github.com/Atremblay9/dnd-website" />
        </div>
    </div>
    
}
}