import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="about" className="hero">
      
      <img src={profile} alt="Profile" className="profile-img" />

      <h1>Hello, I'm <span className="name">Ranil Jan M. Posecion</span></h1>

      <p>
I am a second-year computing student at Western Institute of Technology with an interest in both hardware and software. I have been learning HTML, CSS, JavaScript, Java, and basic database concepts through my coursework and projects.

I like understanding how computers work, from the hardware side to building simple applications. I am continuing to improve my skills by working on projects and learning new technologies as I progress in my studies.
      </p>

    </section>
  );
}