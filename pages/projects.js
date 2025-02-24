import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import SparkBackground from "@/components/sparkEffect";

import ProjectCards from '@/components/projectCards';
import Resume from "@/components/resume";
import {useRouter} from "next/router"

export default function Home() {

  const Router = useRouter();
  const pathName = Router.pathname;

  return (
    <div>
      <NavBar />
      <SparkBackground>
        <div class="content">
          <h2>Projects</h2> 
          <ProjectCards pathName={pathName} />
          <Resume />
        </div>
        
      </SparkBackground>
      <Footer />
    </div>
  );
}
