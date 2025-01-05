import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import SparkBackground from "@/components/sparkEffect";

import ProjectCards from '@/components/projectCards';

export default function Home() {
  return (
    <div>
      <NavBar />
      <SparkBackground>
        <div class="content">
          <h2>Projects</h2>
          <ProjectCards />
        </div>
      </SparkBackground>
      <Footer />
    </div>
  );
}
