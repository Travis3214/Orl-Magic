import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <nav className="footer">
      <div>
        <a className="link" target="_blank" href="https://www.linkedin.com/in/travis-rivera-952469227/">
          <FaLinkedin className="icon" />
        </a>
      </div>
      <div className="footer2">
        <div>
            Created by:
        </div>
        <div>
            Travis Rivera
        </div>
      </div>
      <div>
        <a className="link" target="_blank" href="https://github.com/Travis3214">
          <FaGithub className="icon" />
        </a>
      </div>
    </nav>
  );
}