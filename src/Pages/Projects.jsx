import { useEffect, useState } from 'react'



const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
fetch('https://mock-api.net/api/Portofolio/projects_data')
.then((res) => res.json())
.then((data)=> {
  setProjects(data);
  setLoading(false);
})
.catch((error) => {
  console.error('Error fetching projects:', error);
  setLoading(false);
});
},[]);

 if (loading) return <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden"></span>
  </div>
</div>;


  return (
    <>
     <h1>My Projects</h1>
     <h4 className="text-center text-justify project-intro">Here are some of my projects. Most of these are Frontend components or simple interfaces. 
      You can also see that the latest of these are deployed online. Keep in mind, they are steps of my learning proccess and some of them definetely could use a little polishing. 
      Nevertheless,its a constantly updated section and it will continue to grow as I improve my skills.</h4>
    <div className="projects d-flex flex-column gap-4">
        {projects.map((proj) => (
        <div key={proj.id} className="project-card text-black row align-text-center">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <img className="img-thumbnail img-fluid hover-zoom" src={proj.image} alt={proj.title} />
          <br></br>
          <br></br>
          <a className="btn btn-primary mt-2" href={proj.url} target="_blank" rel="noreferrer">View</a>
        </div>
        ))}
    </div>
    </>
  );
}

export default Projects







