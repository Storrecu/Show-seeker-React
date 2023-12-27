import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <h1>Welcome to Show seeker!</h1>
      <Link className="section_link" to="/shows">
        Go to shows list
      </Link>
    </>
  );
};

export default Landing;
