import FactsAboutMe from '@/components/facts';
import SparkBackground from '@/components/sparkEffect';
import Grid from '@mui/material/Grid2';
import ProjectCards from '@/components/projectCards';
import Skills from '@/components/skills';
import Resume from '@/components/resume';
import {useRouter} from "next/router"

export default function HomePage() {
    const Router = useRouter();
    const pathName = Router.pathname;

    console.log (pathName);

    return (
    <div className="content">
        
        <Grid container spacing={2} style={{ height: '50vh' }}>
            <Grid size={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ margin: 0 }}>Amélie Tremblay</h1>
                <h2 style={{ margin: 0 }}>Software Developer</h2>
            </Grid>
            <Grid size={6}>
                <img src="/img/headshot.jpg" alt="Amélie Tremblay" className="headshot"/>
            </Grid>
            
        </Grid>
        <Resume />
        <Grid container spacing={3} style={{margin: '0, auto' }} >
            <Grid size={{xs: 12, sm: 6}} style={{ padding: '1rem' }}>
                <h3>Overview of Me </h3>
                <p>Full-Stack Developer</p>
                <p>A Proud French-Canadian based in Edmonton, Alberta. Currently in my final semester in the Nait's DMIT Computer Software development program.</p>
                <p>Through this program, I have developed skills in Javascript, C#, SQL,  React,  Blazor Web Apps and Node.js</p>
                <p>I am also involved in the Dev Edmonton community, working on open source projects like their website, working to create a more accessible community in Edmonton.</p>
            </Grid>
            <Grid size={{xs: 12, sm: 6}} style={{ padding: '1rem' }}>
                <FactsAboutMe />
            </Grid>
        </Grid>
        <Grid size={12}>
                <Skills />
        </Grid>
        <div>
            <a href="/projects" className="projectLink"><h2># Projects</h2></a>
        </div>
        <ProjectCards pathName={pathName} />
    </div>
    );
}
