import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import SparkBackground from "@/components/sparkEffect";
import Grid from '@mui/material/Grid2';
import Resume from "@/components/resume";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SparkBackground>
        <div className="content">
            <h2>Contact me!</h2>
            <p>Want to get in touch? Send me a message!</p>
            <ContactForm />
            <Resume />
        </div>
        
      </SparkBackground>
      <Footer />
    </div>
  );
}
