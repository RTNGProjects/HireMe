import { Link } from "react-router-dom"
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo} from "../components"
// import { Register, Dashboard, Error } from "./"

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
          {/* info */}
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <ul className="landing-list">
                  <li>Frontend built with React utilizing context, state, hooks, routes, and styled components</li>
                  <li>Backend built with Express, MongoDB, NodeJS, and deployed on Heroku</li>
                  <li>Secure password hashing using bcrypt</li> 
                  <li>RESTful API with full CRUD functionality</li>
                  <li>Extensive API error testing using POSTMAN</li>
                  <li>JWT token for authentication and task authorization</li>
                </ul>
                <Link to="/register" className="btn btn-hero">Login / Register</Link>
            </div>
            <img src={main} alt='job hunt' className="img main-img" />
        </div>
    </Wrapper>
    
  )
}

export default Landing