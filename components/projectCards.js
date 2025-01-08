import WebsiteCard from "./websiteCard"


export default function ProjectCards() {





return <div className="projectCards">
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