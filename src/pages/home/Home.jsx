import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../sign-up/SignUp';

const Home = () => {
  return (
    <div>
      <h1>Yes, your business can survive that expense.</h1>
      <p>
        Do you know how much money you'll have in two weeks? Two months? Two
        years? Business owners who use Pulse have better cash flow habits and a
        firm grasp on the pulse of their business.
        <span>First month free.</span>
      </p>
      <button>Try 30 Days Free</button>
      <p>
        Plans start at $29. <Link to={SignUp}>See full pricing.</Link>
      </p>
    </div>
  );
};

export default Home;
