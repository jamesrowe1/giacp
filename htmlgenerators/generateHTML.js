function generateHTML(data) {
  return `<!-- this is a header -->
        <header>
          <!-- fancy Jumbotron for GIACP -->
    
          <div class="jumbotron">
            <h1 class="display-4">Gastroenterology Associates</h1>
    
            <p class="lead">
              Of Central Pennsylvania, P.C.
            </p>
          </div>
          <!-- dropdown navigation button -->
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Navigation
            </button>
            <div class="dropdown-menu multi-level">
              <a class="dropdown-item" href="index.html">Home</a>
              <a class="dropdown-item" href="about-us.html">About Us</a>
              <a class="dropdown-item" href="associates.html">Associates</a>
              <a class="dropdown-item" href="contact-us.html">Contact Us</a>
              <div class="dropdown-submenu">
                <a id="submenuprocedures" tabindex="-1" href="#">Procedures</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="upperEndoscopy.html"
                    >Upper Endoscopy</a
                  >
                  <a class="dropdown-item" href="colonoscopy.html"
                    >Colonoscopy</a
                  >
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="hero"></div>
    
        <div class="container-fluid">
          <div class="row">
            <div class="col-9">
              ${data}
            </div>
            <div class="col-3" id="sidebar">
              <!-- hours of operation -->
              <section class="hours">
                <h3>Hours</h3>
                <img
                  src="./assets/images/lead-generation.png"
                  alt="lead-generation"
                />
                <ul>
                  <li>
                    Monday: 8AM-4:30PM
                  </li>
                  <li>
                    Tuesday: 8AM-4:30PM
                  </li>
                  <li>
                    Wednesday: 8AM-4:30PM
                  </li>
                  <li>
                    Thursday: 8AM-4:30PM
                  </li>
                  <li>
                    Friday: 8AM-4:30PM
                  </li>
                  <li>
                    Saturday: Closed
                  </li>
                  <li>
                    Sunday: Closed
                  </li>
                </ul>
              </section>
              <!-- location of GIACP -->
              <section class="location">
                <h3>Location</h3>
                <img src="./assets/images/brand-awareness.png" alt="location" />
                <p>
                  1421 Fishburn Road, Hershey, PA 17033
                </p>
              </section>
              <!-- changed div into section semantic tag -->
              <section class="procedures">
                <h3>Procedures</h3>
                <img src="./assets/images/cost-management.png" alt="what-we-do" />
                <ul>
                  <li>
                    Screening Colonoscopy
                  </li>
                  <li>
                    Upper Endoscopy (EGD or Esophagogastroduodenoscopy)
                  </li>
                  <li>
                    Colonoscopy
                  </li>
                  <li>
                    Flexible Sigmoidoscopy
                  </li>
                  <li>
                    ERCP (Endoscopic Retrograde CholangioPancreaticogram)
                  </li>
                  <li>
                    Liver Biopsy
                  </li>
                  <li>
                    Esophageal Manometry
                  </li>
                  <li>
                    24 Hour pH Probe
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <!-- info about GIACP -->
        <footer>
          <h2>Made by Awesome Coding LLC</h2>
          <p>
            &copy; 2020 Awesome Coding LLC Inc.
          </p>
        </footer>`;
}
