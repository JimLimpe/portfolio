import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const About = () => {
  return (
    <>
      <h1 className="text-center my-4">About Me</h1>
      <div className="container">
        <Carousel controls>
          <Carousel.Item>
            <div className="d-flex flex-column justify-content-center align-items-center bg-light m-1"  style={{ minHeight: '300px' }}>
              <h2>Chapter 1: Who am I??</h2> 
              <div className="d-flex-block justify-content-center h-50 w-50 m-2 p-2">
            <p>My name is Dimitris, and I am currently located in the small hometown of Polykastro, Greece. 
              In early 2023, I began my journey into coding. I feel fascinated by the endless possibilities and the intriguing challenges that often come up.</p>
             <p>I decided to attend an IEK program titled <i>IT Applications Technician (Web Designer-Developer)</i> to build a stronger foundation in programming. 
              I am expected to graduate in June 2025.</p>
             <p>In the past, I have worked at a few local merchandise shops — including Tech Expert (Germanos) and in Customer Service (Aslanidis) — but I am 
              now seeking a professional opportunity as a Junior Web Developer.</p>
              <p>Regarding my previous studies, I was awarded a Bachelor's degree in Business Administration in 2016.</p>
             <div>
              <img className='justify-content-center rounded mx-auto d-block w-50 h-50' src="https://media.licdn.com/dms/image/v2/D4D03AQGWN4_obhxlkQ/profile-displayphoto-shrink_800_800/B4DZa.6LZzHEAc-/0/1746959644936?e=1753315200&v=beta&t=un3dJBlCSKjgmBVP4mQt3G_-9zcugobSb6jOBDjaVQ0"></img>
             </div>
              </div>
            </div>
           
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex flex-column justify-content-center align-items-center bg-light m-1"  style={{ minHeight: '300px' }}>
              <h2>Chapter 2: Learning Proccess</h2>
              <div className="justify-content-center w-50 m-2 p-2">


            <h3>Self Taught Online Courses</h3>
            <div className="container p-2 pb-0 gap-5">
              <span className="badge rounded-pill text-bg-dark hover-zoom">React</span>
              <span className="badge rounded-pill text-bg-dark hover-zoom">Javascript</span>
              <span className="badge rounded-pill text-bg-dark hover-zoom">HTML/CSS</span>
              <span className="badge rounded-pill text-bg-dark hover-zoom">Bootstrap</span>
              
            </div>


            <h3>Online Certifications</h3>
            <ul >
              <li ><a href="https://www.freecodecamp.org/learn/">FreeCodeCamp</a>: Responsive Web Design</li>
              <li ><a href="https://www.freecodecamp.org/learn/">FreeCodeCamp</a>: Javascript Algorithms and Data Structures</li>
              <li ><a href="https://lessons.freestudies.gr/course/index.php?categoryid=7&lang=en" target="_blank"> Free Studies
              </a>: Python Development</li>
              
            </ul>
            <h3>Study Courses</h3>
            <p>During my studies I took the following courses, which introduced me to the very basics:</p>

           <div className="table-responsive m-2 p-2 mx-auto" style={{ maxWidth: '600px' }}>
  <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">1st Semester</th>
        <th scope="col">2nd Semester</th>
        <th scope="col">3rd Semester</th>
        <th scope="col">4th Semester</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>C</td>
        <td>HTML/CSS</td>
        <td>MySQL</td>
        <td>Javascript</td>
      </tr>
      <tr>
        <td>C++</td>
        <td>Python</td>
        <td>PHP</td>
        <td>WordPress</td>
      </tr>
      <tr>
        <td>Introduction to Algorithms</td>
        <td>Introduction to Databases</td>
        <td>Java</td>
        <td>Java</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex flex-column justify-content-center align-items-center bg-light m-1"  style={{ minHeight: '300px' }}>
              <h2>Chapter 3: Faqs</h2>
              <div className="justify-content-center w-50 m-2 p-2">
            <h3>Favorite Toolkit</h3>
            <p>Git, Docker,VS Studio Code.</p>
            <h3>Favorite Coding Site</h3>
            <p>FreeCodeCamp and Leetcode.</p>
            <h3>Favorite Coding Youtube Channel</h3>
            <p><a href="https://www.youtube.com/@cosdensolutions" target="_blank">Cosden Solutions</a> and <a href="https://www.youtube.com/@ConnerArdman" target="_blank">Conner Ardman</a>.</p>
            <h3>Are you open for work?</h3>
            <p>If you are interested for my work, feel free to contact me, as the answer may differ from time to time.</p>
              </div>
            </div>
            

          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default About;
