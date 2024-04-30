import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" sticky w-full bg-white inset-0">
      <nav className="container py-5 flex justify-between ">
        <div>
          <Link to={"/"}>
            <h1 className="text-lg font-bold text-gray-500">
              ITion Assessment
            </h1>
          </Link>
        </div>
        <div className="flex gap-3">
          <a target="_blank" href="https://github.com/CoderRCAman">
            <FaGithub size={25} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amaresh-sarma-0161671b3/"
          >
            <FaLinkedin size={25} className="text-blue-500" />
          </a>
        </div>
      </nav>
    </div>
  );
}
