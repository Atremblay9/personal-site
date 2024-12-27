import FactsAboutMe from '@/components/facts';
import SparkBackground from '@/components/sparkEffect';
import Grid from '@mui/material/Grid2';

export default function HomePage() {
    return (
    <div>
        <SparkBackground />
        <Grid container spacing={2} style={{ height: '50vh' }}>
            <Grid size={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ margin: 0 }}>Amélie Tremblay</h1>
                <h2 style={{ margin: 0 }}>Software Developer</h2>
            </Grid>
            <Grid size={6}>
                
            </Grid>
        </Grid>

        <Grid container spacing={3} style={{ height: '50vh', margin: '0, auto' }} >
            <Grid size={6}>
                <h3>Overview of Me </h3>
                <p>Full-Stack Developer</p>
                <p>A Proud French-Canadian based in Edmonton, Alberta. Currently in my final semester in the Nait's DMIT Computer Software development program.</p>
                <p>Through this program, I have developed skills in Javascript, C#, SQL,  React,  Blazor Web Apps and Node.js</p>
                <p>I am also involved in the Dev Edmonton community, working on open source projects like their website, working to create a more accessible community in Edmonton.</p>
            </Grid>
            <Grid size={6}>
                <FactsAboutMe />
            </Grid>
        </Grid>
    </div>
    );
}