import React from "react";

class a extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content />
        <meta name="author" content />
        <title>Grayscale - Start Bootstrap Theme</title>
        {}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {}
        <link
          href="vendor/font-awesome/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cabin:700"
          rel="stylesheet"
          type="text/css"
        />
        {}
        <link href="css/grayscale.min.css" rel="stylesheet" />
        {}
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#download">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {}
        <header className="masthead">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h1 className="brand-heading">Grayscale</h1>
                  <p className="intro-text">
                    A free, responsive, one page Bootstrap theme.
                    <br />Created by Start Bootstrap.
                  </p>
                  <a href="#about" className="btn btn-circle js-scroll-trigger">
                    <i className="fa fa-angle-double-down animated" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {}
        <section id="about" className="content-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>About Grayscale</h2>
                <p>
                  Grayscale is a free Bootstrap theme created by Start
                  Bootstrap. It can be yours right now, simply download the
                  template on
                  <a href="http://startbootstrap.com/template-overviews/grayscale/">
                    the preview page
                  </a>. The theme is open source, and you can use it for any
                  purpose, personal or commercial.
                </p>
                <p>
                  This theme features stock photos by
                  <a href="http://gratisography.com/">Gratisography</a>
                  along with a custom Google Maps skin courtesy of
                  <a href="http://snazzymaps.com/">Snazzy Maps</a>.
                </p>
                <p>
                  Grayscale includes full HTML, CSS, and custom JavaScript files
                  along with SASS and LESS files for easy customization!
                </p>
              </div>
            </div>
          </div>
        </section>
        {}
        <section
          id="download"
          className="download-section content-section text-center"
        >
          <div className="container">
            <div className="col-lg-8 mx-auto">
              <h2>Download Grayscale</h2>
              <p>
                You can download Grayscale for free on the preview page at Start
                Bootstrap.
              </p>
              <a
                href="http://startbootstrap.com/template-overviews/grayscale/"
                className="btn btn-default btn-lg"
              >
                Visit Download Page
              </a>
            </div>
          </div>
        </section>
        {}
        <section id="contact" className="content-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Contact Start Bootstrap</h2>
                <p>
                  Feel free to leave us a comment on the
                  <a href="http://startbootstrap.com/template-overviews/grayscale/">
                    Grayscale template overview page
                  </a>
                  on Start Bootstrap to give some feedback about this theme!
                </p>
                <ul className="list-inline banner-social-buttons">
                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/SBootstrap"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-twitter fa-fw" />
                      <span className="network-name">Twitter</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/BlackrockDigital/startbootstrap"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-github fa-fw" />
                      <span className="network-name">Github</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://plus.google.com/+Startbootstrap/posts"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-google-plus fa-fw" />
                      <span className="network-name">Google+</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {}
        <div id="map" />
        {}
        <footer>
          <div className="container text-center">
            <p>Copyright © Your Website 2018</p>
          </div>
        </footer>
        {}
        {}
        {}
        {}
      </div>
    );
  }
}

export default a;
