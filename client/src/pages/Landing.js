import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Drinking vinegar gentrify vape gastropub green juice aesthetic
            glossier roof party trust fund cred. Beard shaman pinterest listicle
            kickstarter, selfies artisan. Raw denim tacos roof party meh bespoke
            hella everyday carry. Fixie try-hard master cleanse affogato.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} className="img main-img" alt="job hunt" />
      </div>
    </Wrapper>
  );
};

export default Landing;
