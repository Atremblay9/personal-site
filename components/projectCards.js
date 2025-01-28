import WebsiteCard from "./websiteCard"


export default function ProjectCards({pathName}) {

//use  the useContext to change the descritions depending on which page the user is on. IE, short description on home page, long description on project page


if(pathName == "/"){

return <div className="projectCards">
        <div className="projectCard">
            <h3>Capstone Project</h3>
            <p>Currently working on my final project through NAIT. I am working with a variety of new and interesting software with focus on AI. See my project page for a grander descption</p>
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
            <p>Website I've created with a partner to help with functions in the Gamers of Dungeons and Dragons club I help run at NAIT. This site helps demonstrate my abilities with security and authentication, database work, and collaboration.</p>
            <WebsiteCard imgSrc="/img/GamersOfDndsite.png" altContent="GamersofDND" siteLink="https://gamersofdnd.netlify.app" codeLink="https://github.com/Atremblay9/dnd-website" />
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
            <p>Website I've created with a partner to help with functions in the Gamers of Dungeons and Dragons club I help run at NAIT. This site helps demonstrate my abilities with security and authentication, database work, and collaboration.</p>
            <WebsiteCard imgSrc="/img/GamersOfDndsite.png" altContent="GamersofDND" siteLink="https://gamersofdnd.netlify.app" codeLink="https://github.com/Atremblay9/dnd-website" />
        </div>
    </div>
    
}
}