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
           
            <Resume />
        </div>
        
      </SparkBackground>
      <Footer />
    </div>
  );
}
