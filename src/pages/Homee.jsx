import React , {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <div className="homeIndex ">
      <div className="HomeDiv container" data-aos="zoom-in-up">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-light">
              Home
            </h1>
            <p className="lead text-light">
              Track all your expenses here... Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut et repellat cupiditate, corporis
              officia sequi numquam aspernatur fugiat exercitationem incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              culpa! Iusto blanditiis consequatur sapiente voluptas debitis eum
              et magnam corporis?
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
             
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
      <div className="HomeDiv container" data-aos="zoom-in-up">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
              alt=""
              width="720"
            />
          </div>
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-light">
              Yoga
            </h1>
            <p className="lead text-light">
              Track all your expenses here... Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut et repellat cupiditate, corporis
              officia sequi numquam aspernatur fugiat exercitationem incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              culpa! Iusto blanditiis consequatur sapiente voluptas debitis eum
              et magnam corporis?
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
             
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
          
        </div>
      </div>
      <div className="HomeDiv container" data-aos="zoom-in-up" data-aos-easing="ease-in-back" data-aos-delay="300">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-light">
              Dhyana
            </h1>
            <p className="lead text-light">
              Track all your expenses here... Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut et repellat cupiditate, corporis
              officia sequi numquam aspernatur fugiat exercitationem incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              culpa! Iusto blanditiis consequatur sapiente voluptas debitis eum
              et magnam corporis?
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
             
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
