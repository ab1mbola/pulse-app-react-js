import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../sign-up/SignUp';
import GradientOffer from '../../components/gradient-offer/GradientOffer';
import './Home.css';

const Home = () => {
  return (
    <main className="main">
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
              Plans start at $29.{' '}
              <Link to="pricing">
                <strong> See full pricing</strong>
              </Link>
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
                If you're trying to manage your cash flow in systems that aren't
                specifically designed for that purpose, you're wasting the one
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

      <section className="home-hero-3">
        <div className="smarter-business-decisions container">
          <div className="decisions-content">
            <h2 className="h2">Make smarter business decisions with Pulse.</h2>
            <p>
              Do you know if you can hire another employee or take some money
              out of the company? Should you take on that new project or should
              turn it down? With Pulse, you immediately see how business
              decisions will impact your cash in the future, which in turn gives
              you the confidence you need to know if the decision is right.
            </p>
          </div>

          <div className="testimony">
            <div className="testimony-content">
              <img src="/assets/carl-smith-avatar.png" alt="carl smith" />
              <p className="carl-testimony">
                "Pulse makes my business smarter. We make better decisions
                because we can see further. You could say it has lowered our
                stress level by removing the fear of not knowing."
              </p>
              <p className="person-info">Carl Smith, Bureau of Digital</p>
              <p>
                <Link to="cutomer-stories">Read Customer Story →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-small-biz">
        <div className="container">
          <div>
            <h2 className="h2">
              Pulse is specifically designed for small busniesses.
            </h2>

            <p>
              Our customers include creative and technology agencies, service
              providers, restaurants, manufacturers, retail shops, contractors,
              freelancers, and more.
            </p>

            <Link to="sign-up" className="button">
              Sign Up For a Free 30-Day Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="blog-title">
            <div>
              <h2>Pulse helps real businesses survive & thrive.</h2>
              <p>
                Our blog features stories from real business owners with real
                business advice, in addition to our own insights on how you can
                build better cash flow habits.
              </p>
            </div>
          </div>

          <div className="blog-story">
            <div className="blog-stories">
              <Link to="">
                <div className="box">
                  <div className="image">
                    <img
                      src="https://pulseapp.com/uploads/_534x288_fit_center-center_none/FinalDrafts-Startupsneedpulse.png"
                      alt="survive & thrive"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-theme">Survive & Thrive</div>
                    <div className="blog-topic">
                      Growth in a Downturn: How Arash Fayz of LA Tutoring
                      Pivoted After An 80% Client Drop
                    </div>
                    <div className="story-bit">
                      Arash Fayz of LA Tutors knew he needed to change his
                      business model when the pandemic hit. Here's how he scaled
                      his tutoring business after an 80% drop in clients.
                    </div>
                    <div className="read">Read More →</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="blog-stories">
              <Link to="">
                <div className="box">
                  <div className="image">
                    <img
                      src="https://pulseapp.com/uploads/_534x288_fit_center-center_none/FinalDrafts-usingcashflowdecisions.png"
                      alt="entrepreneurship"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-theme">Entrepreneurship</div>
                    <div className="blog-topic">
                      Monetizing a Network: How Jodi Brandstetter Started Her
                      Second Business
                    </div>
                    <div className="story-bit">
                      STEM talent consultant Jodi Brandstetter started her
                      second business during the pandemic—a business book
                      publishing network. Here's how she made it work.
                    </div>
                    <div className="read">Read More →</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="blog-stories">
              <Link to="">
                <div className="box">
                  <div className="image">
                    <img
                      src="https://pulseapp.com/uploads/_534x288_fit_center-center_none/pulse-invoicing-hero.jpg"
                      alt="pro tips"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-theme">Pro Tips</div>
                    <div className="blog-topic">
                      5 Steps to Optimizing A Services Business from Brogan
                      Renshaw, Founder of FireWire Digital
                    </div>
                    <div className="story-bit">
                      Brogan Renshaw filled a gap in his local market by
                      starting an SEO agency, FireWire Digital. Here's what he's
                      learned from niching down and streamlining his business.
                    </div>
                    <div className="read">Read More →</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pulse-features">
        <div className="container">
          <div>
            <div className="features-question">
              <h2>Can your spreadsheets do this?</h2>
              <p>
                Pulse is like your cash flow spreadsheet, except the math isn't
                wrong. Also, Pulse has:
              </p>
            </div>
          </div>

          <div className="home-features">
            <div className="card">
              <div>
                <img src="/assets/multiple.svg" alt="svg for multiple card" />
              </div>
              <h4>Multiple Cash Flow Views</h4>
              <p>
                Monitor your cash flow on a yearly, monthly, weekly, daily
                transactional basis.
              </p>
            </div>

            <div className="card">
              <div>
                <img src="/assets/customers.svg" alt="svg for customers card" />
              </div>
              <h4>Customers and Projects</h4>
              <p>
                Run cash flow reports on customers and projects to see how
                profitable they're going to be.
              </p>
            </div>

            <div className="card">
              <div>
                <img src="/assets/visual.svg" alt="svg for visual card" />
              </div>
              <h4>Visual Reports</h4>
              <p>
                With our easy-to-understand reports, you can see cash moving in
                and out of your business.
              </p>
            </div>

            <div className="card">
              <div>
                <img src="/assets/currency.svg" alt="svg for currency card" />
              </div>
              <h4>Currency Conversion</h4>
              <p>
                If your business operates on multiple currencies, we have you
                covered with today's exchange rates.
              </p>
            </div>

            <div className="card">
              <div>
                <img src="/assets/invite.svg" alt="svg for invite card" />
              </div>
              <h4>Invite Your Team</h4>
              <p>
                Invite your team to help out, or showcase your projections to
                investors by giving them read-only access.
              </p>
            </div>

            <div className="card">
              <div>
                <img src="/assets/connect.svg" alt="svg for connect card" />
              </div>
              <h4>Connects to Quickbooks Online</h4>
              <p>
                Save time and reduce errors by keeping Pulse and your accounting
                software in sync.
              </p>
            </div>
          </div>

          <p className="see-everything">
            <Link to="features">See Everything Pulse Does →</Link>
          </p>
        </div>
      </section>

      {/*  */}

      <section className="home-hero-3 easy">
        <div className="smarter-business-decisions container">
          <div className="decisions-content">
            <h2 className="h2">
              Pulse is the easy, online way to manage and project your cash
              flow.
            </h2>
            <p>
              <Link to="customer-stories" className="button">
                See All Customer Stories
              </Link>
            </p>
          </div>

          <div className="testimony">
            <div className="testimony-content">
              <img src="/assets/blog-casimir.png" alt="casimir loeber" />
              <p className="carl-testimony">
                "Pulse has allowed us to visualize our cash flow before our
                brains turned to mush trying to deal with receipts, spreadsheets
                and accordion folders."
              </p>
              <p className="person-info">Casimir Loeber, Realtyninja</p>
              <p>
                <Link to="cutomer-stories">Read Customer Story →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <GradientOffer />
    </main>
  );
};

export default Home;
