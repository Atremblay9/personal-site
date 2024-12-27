import Grid from '@mui/material/Grid2';


export default function WebsiteCard({imgSrc, altContent, siteLink, codeLink}) {
    
    return (<Grid container spacing={2} className="websiteDetails">

        <Grid size={6} className="websiteCard">
            <img src={imgSrc} alt={altContent} className="websiteImage" />
        </Grid>
        <Grid size={6}  className="websiteLinks">
            <a href={siteLink}>To the Site </a>
            <a href={codeLink}>To the Code</a>
        </Grid>
    </Grid>
    );
}
