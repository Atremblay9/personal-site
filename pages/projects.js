import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import SparkBackground from "@/components/sparkEffect";

import ProjectCards from '@/components/projectCards';
import Resume from "@/components/resume";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SparkBackground>
        <div class="content">
          <h2>Projects</h2>
          <ProjectCards />
          <Resume />
        </div>
        
      </SparkBackground>
      <Footer />
    </div>
  );
}
