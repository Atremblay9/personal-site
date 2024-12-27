import WebsiteCard from "./websiteCard"


export default function ProjectCards() {





return <div class="projectCards">
        <div class="projectCard">
            <h3>JustMeJuliag.com</h3>
            <p>A website I made for my mother's handcrafted products</p>
            <WebsiteCard imgSrc="/img/juliaMakesStuff.png" altContent="justMeJuliaG.com" siteLink="https://justmejuliag.com/" codeLink="https://github.com/Atremblay9/JuliaMakesStuff" />
        </div>
        <div class="projectCard">
            <h3>This Site</h3>
            <p>A portfolio website created to display my coding knowledge</p>
        </div>
        <div class="projectCard">
            <h3>Vinyl Stuff?</h3>
            <p>I should go back to basics with it</p>
        </div>
    </div>
}