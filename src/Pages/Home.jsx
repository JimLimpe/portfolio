const Home = () => {
  

  return (
    <>
   <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center overflow-hidden">
  <h1 className="slide-left display-4 fw-bold mb-3">
    Welcome to my page
  </h1>

  <p className="slide-up fs-4 mb-5">
    My name is <strong>Lymperis Dimitris</strong> and my passion is all about creating responsive Frontend
  </p>

  <div className="laptop slide-right">
  <div className="screen">
    <div className="code-icon">&lt;/&gt;</div>
    <blockquote>
      <p>
        “I am always doing that which I cannot do, in order that I may learn how to do it.”
      </p>
      <footer>— Pablo Picasso</footer>
    </blockquote>
  </div>
</div>

</div>

    </>
  )
}

export default Home