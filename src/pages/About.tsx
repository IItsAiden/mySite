import cat from "../imgs/tiger.jpg";
import linkedin from "../imgs/linkedinw.svg";
//TODO: add LinkIn and IG and email
export default function About() {
  return (
    <div>
      <h1 className="text-center my-5">About</h1>
      <img
        src={cat}
        className="img-thumbnail rounded mx-auto my-3 d-block w-50"
        alt="..."
      />
      <div className="text-center mx-auto w-75">
        <p>
          Greetings and welcome to my portfolio website! I'm thrilled to have
          you here. My name is Aiden, and I'm a recent computer science
          graduate, eager to take on the world of technology and innovation.
          This space is a reflection of my academic journey, my projects, and my
          unwavering enthusiasm for all things tech.
        </p>
        <p>
          My fascination with computers began at a young age and led me to
          pursue a degree in computer science with Artificial Intelligence from
          the University of Nottingham. Over the years, I've immersed myself in
          the intricacies of coding, algorithm design, software engineering, and
          much more. My time as a student has been a thrilling ride, marked by
          challenging coursework, exhilarating hackathon, and the joy of
          discovering innovative solutions to complex problems. Throughout my
          academic journey, I've had the privilege to work on a variety of
          projects that have broadened my horizons and honed my skills. From
          developing efficient and user-friendly applications to collaborating
          on cutting-edge research initiatives, each project has contributed to
          my growth as a computer scientist. One of the most exciting aspects of
          computer science for me is the constant evolution of technology. The
          fast-paced nature of this field keeps me on my toes, always eager to
          learn and adapt. I'm well-versed in programming languages such as
          python, c++ and javascript, and I have hands-on experience with making
          full-stack web applications.
        </p>
        <p>
          Thank you for taking the time to explore my portfolio. Whether you're
          a potential employer, a fellow recent graduate, or simply someone with
          a passion for innovation, I'm excited to connect and share
          experiences. Feel free to reach out, and let's embark on this journey
          of exploration and innovation together.
        </p>
      </div>
      <a href=" https://www.linkedin.com/in/vun-yi-chong?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOAWeHwXaRqOORRZ%2Fv3sUNQ%3D%3D">
        <img
          src={linkedin}
          style={{ width: 30, height: 30 }}
          className="rounded mx-auto d-block"
          alt="..."
        />
      </a>
      <p>Email</p>
    </div>
  );
}
