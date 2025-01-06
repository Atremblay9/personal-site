import NavBar from "@/components/navBar";
import HomePage from "@/components/homePage";
import SparkBackground from "@/components/sparkEffect";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SparkBackground>
      <div className="content">
        
        <HomePage />
        
      </div>
      </SparkBackground>
      <Footer />
    </div>
  );
}
