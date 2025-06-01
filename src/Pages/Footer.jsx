export default function Footer() {
 
  return (
    <div className="footer_container">
      <footer className="text-center">
        <div className="container p-2 pb-0">
          <section className="mb-0">
            <a
              className="btn text-white btn-floating m-1 hover-zoom"
              style={{ backgroundColor: '#3b5998' }}
              href="https://www.facebook.com/jim.libe"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1 hover-zoom"
              style={{ backgroundColor: '#ac2bac' }}
              href="https://www.instagram.com/jim_libe/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1 hover-zoom"
              style={{ backgroundColor: '#0082ca' }}
              href="https://www.linkedin.com/in/dimitris-lymperis-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1 hover-zoom"
              style={{ backgroundColor: '#333333' }}
              href="https://github.com/JimLimpe"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3">
          <p><i>You can always reach me here</i></p>
        </div>
      </footer>
    </div>
  );
}
