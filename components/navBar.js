import Grid from '@mui/material/Grid2';


export default function NavBar() {
    return(
        <nav class="NavBar">
            <Grid container spacing={2}>
                <Grid size={4}>
                    <a href="#">ATX</a>
                </Grid>
                <Grid size={8}>
                    <Grid container spacing={1}>
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