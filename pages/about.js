import NavBar from "@/components/navBar";
import HomePage from "@/components/homePage";
import SparkBackground from "@/components/sparkEffect";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SparkBackground>
      <div class="content">
        <h2>More about me</h2>
        <p>In 2020, I graduated from highschool and immediately went to school with the goal of become a Sign Language Interpreter for the deaf community. Due to program closures, I decided to take a year off to gain more experience in the job industry, and learn more about myself</p>
        <p>It was during this time that I realized I wanted to go into programming. My entire life, I've watched my father working on his computer and coding, and I finally got curious about it. Hearing about what he did, and the projects he worked on, made me realize what I could do with coding.</p>
        <p>Since then, I've enrolled in the  Northern Albertan Institute of Technology (NAIT) Digital Media and IT (DMIT) Software development program, working on my skills, learning new languages and technologies, and working on projects to gain experience. I'm currently working on a project that will help me learn more about React, and I'm excited to see where it goes.</p>
      </div>
      </SparkBackground>
    </div>
  );
}
