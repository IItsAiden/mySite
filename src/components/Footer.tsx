import linkedin from "../imgs/linkedin.png";
import github from "../imgs/github.png";
import email from "../imgs/email.png";
import A from "../imgs/a.png";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/mySite/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img
              src={A}
              style={{ width: 30, height: 30 }}
              className="rounded mx-auto d-block"
              alt="..."
            />
          </a>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://github.com/IItsAiden"
            >
              <img
                src={github}
                style={{ width: 30, height: 30 }}
                className="rounded mx-auto d-block"
                alt="..."
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.linkedin.com/in/vun-yi-chong"
            >
              <img
                src={linkedin}
                style={{ width: 30, height: 30 }}
                className="rounded mx-auto d-block"
                alt="..."
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="mailto: Vunyc9623@gmail.com"
            >
              <img
                src={email}
                style={{ width: 30, height: 30 }}
                className="rounded mx-auto d-block"
                alt="..."
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
