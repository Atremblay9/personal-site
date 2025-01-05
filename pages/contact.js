import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import SparkBackground from "@/components/sparkEffect";
import Grid from '@mui/material/Grid2';
import Resume from "@/components/resume";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SparkBackground>
        <div class="content">
            <h2>Contact me!</h2>
            <p>Want to get in touch? Send me a message!</p>
            <form id="contact-form" name="order" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            
                <Grid container spacing={2} style={{padding: '1rem 0'}}>
                    <Grid size={12}>
                    <label for="user-email" class="form-label">Your Email</label>
                    </Grid>
                    <Grid size={12}>
                    <input type="email" class="form-control" id="user-email" name="userEmail" placeholder="Enter your email" required style={{width: '50%'}} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{padding: '1rem 0'}}>
                    <Grid size={12}>
                    <label for="user-message" class="form-label">Your Message</label>
                    </Grid>
                    <Grid size={12}>
                    <textarea class="form-control" id="user-message" name="userMessage" rows="6" required  style={{width: '100%'}} ></textarea>
                    </Grid>
                </Grid>
                <button type="submit" className="submit-button">Submit</button>
            
            </form>
            <Resume />
        </div>
        
      </SparkBackground>
      <Footer />
    </div>
  );
}
