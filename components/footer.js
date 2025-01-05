import Grid from '@mui/material/Grid2';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <Grid container spacing={2} style={{ maxWidth: '1200px', margin: '1rem auto', padding: '0 1rem' }}>
                    
                    <Grid size={{xs: 12, sm: 6}}>
                        <h3>Contact Me</h3>
                        <p>Email: amelie.n.trem@gmail.com</p>
                    </Grid>
                    <Grid size={{xs: 12, sm: 6}}>
                        <h3>Socials</h3>
                        <div className="socials">
                        <a href="https://www.linkedin.com/in/amelie-tremblay-8b5068293/"><i class="bi bi-linkedin"></i></a>
                        <a href="https://github.com/Atremblay9"><i class="bi bi-github"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100009264626918"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/amelie_t2020/"><i class="bi bi-instagram"></i></a>
                        </div>
                    </Grid>      
                </Grid>
                <Grid size={12} style={{ textAlign: 'center' }}>
                        <p className="footerInfo">This Website was design and programmed by Amélie Tremblay</p>
                </Grid> 
            </div>
        </footer>
    )
}