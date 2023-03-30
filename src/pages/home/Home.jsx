import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../sign-up/SignUp';
import './Home.css';

const Home = () => {
  return (
    <main className="content">
      <div className="home-hero-gradient">
        <div className="home-hero-gradient-accent"></div>
      </div>
      <section className="home-hero bg-green">
        <div className="container">
          <div className="title">
            <h1 className="hero-title h1">
              Yes, your business can
              <br />
              survive that expense.
            </h1>
            <img
              src="/assets/marker-circle.svg"
              alt="marker circle"
              className="marker-circle"
            />
          </div>
          <div className="title-sub">
            <p className="p">
              Do you know how much money you'll have in two weeks? Two months?
              Two years? Business owners who use Pulse have better cash flow
              habits and a firm grasp on the pulse of their business.{' '}
              <strong>First month free.</strong>
            </p>
            <img
              src="/assets/marker-arrow.svg"
              alt="marker arrow"
              className="marker-arrow"
            />
          </div>

          <div className="sign-up">
            <Link to="sign-up" className="button sign-up button-blue">
              Try 30Days Free
            </Link>

            <p>
              Plans start at $29. <Link to="pricing"> See full pricing</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="home-hero-2">
        <div className="container">
          <div className="text-center">
            <div>
              <h2 className="h2">Business owners trust Pulse.</h2>
              <p className="paragraph">
                Below are real quotes form business owners.
              </p>
            </div>
          </div>

          <div className="home-quotes">
            <div className="quotes">
              <h4 className="h4">
                "I like that it provides the oppurtunity to test scenarios."
              </h4>
              <p className="p">
                You can quickly toggle income and expenses off and on to see
                what happens based on different scenarios to see how they impact
                your bottom line. When you can forecast your cash flow this
                quickly and easily, you're empowered to make smarter business
                decisions.
              </p>
            </div>

            <div className="quotes">
              <h4 className="h4">
                "Pulse shows me how to track cash flow the right way"
              </h4>
              <p className="p">
                Stop stumbling your way through spreadsheets not knowing what
                you don't know. Pulse shows you a simple, easy to understand
                chart that answers the questions you have about your cash flow.
              </p>
            </div>

            <div className="quotes">
              <h4 className="h4">"it's easy to set up and understand</h4>
              <p className="p">
                Our user friendly design makes Pulse a breeze to set up and
                manage your cash flow. It's so easy that over half of our
                customers are able to use Pulse every day without it taking up
                too much of their time.
              </p>
            </div>

            <div className="quotes">
              <h4 className="h4">
                "it used to take us hours to manually do in Excel what Pulse
                does out of the box."
              </h4>
              <p className="p">
                If you’re trying to manage your cash flow in systems that aren’t
                specifically designed for that purpose, you’re wasting the one
                resource more valuable than your cash, your time.
              </p>
            </div>

            <div className="quotes">
              <h4 className="h4">"I like the simplicity."</h4>
              <p className="p">
                Pulse is meant to do one thing really well—cash flow management.
                No other product on the market is as focused on putting you in
                control of how cash moves in and out of your business.
              </p>
            </div>

            <div className="quotes">
              <h4 className="h4">"I like that Pulse is web-based."</h4>
              <p className="p">
                You can access Pulse from any computer, any time. There's no
                software to install.
              </p>
            </div>

            <div className="quotes">
              <h4 className="h4">
                "I can connect it to my accounting software."
              </h4>
              <p className="p">
                With our direct connection to QuickBooks Online, keeping your
                cash flow projections and your actual performance in sync is a
                breeze.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
