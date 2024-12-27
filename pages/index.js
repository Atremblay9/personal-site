import NavBar from "@/components/navBar";
import HomePage from "@/components/homePage";
import SparkBackground from "@/components/sparkEffect";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SparkBackground>
      <div class="content">
        
        <HomePage />
      </div>
      </SparkBackground>
    </div>
  );
}
