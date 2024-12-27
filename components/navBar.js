import Grid from '@mui/material/Grid2';


export default function NavBar() {
    return(
        <nav class="NavBar">
            <Grid container spacing={2}>
                <Grid size={6}>
                    <a href="#">ATX</a>
                </Grid>
                <Grid size={6}>
                    <Grid container spacing={2}>
                    <Grid size={3}>
                        <a href="/">Home</a>
                    </Grid>
                    <Grid size={3}>
                        <a href="/about">About</a>
                    </Grid>
                    <Grid size={3}>
                        <a href="#">Projects</a>
                    </Grid>
                    <Grid size={3}>
                        <a href="#">Contact</a>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </nav>
    )
};