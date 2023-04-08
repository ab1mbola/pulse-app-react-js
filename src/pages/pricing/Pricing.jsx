import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  return (
    <main>
      <section className="pricing-hero">
        <div className="container">
          <div className="heading">
            <h1>Try Pulse free for 30days.</h1>
            <p>
              See why Pulse is the best way to monitor your cash flow. Sign up
              for any plan and try Pulse absolutely free for 30 days.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="pricing-cards">
            <div className="card">
              <div className="container">
                <h2>
                  These are what we call the Pulse Basics. They're what every
                  customer gets.
                </h2>

                <ul>
                  <li>
                    Manage cash flow on a daily, weekly, monthly, or yearly
                    basis
                  </li>
                  <li>
                    Forecast growth with recurring income or expenses that scale
                    automatically
                  </li>
                  <li>Works with any currency</li>
                  <li>
                    See Money In and Money Out, categorize transactions, and run
                    helpful reports
                  </li>
                  <li>
                    Toggle entries and accounts on and off to game out different
                    scenarios
                  </li>
                </ul>

                <p>
                  Just need the Pulse Basics?{' '}
                  <Link to="sign-up">Get Them now</Link> for $29 per month.
                </p>
              </div>
            </div>

            <div className=" cards">
              <Link to="sign-up" target={'_blank'} className="recommended">
                <div>
                  <div className="recommended-banner">Recommended</div>

                  <div className="content">
                    <div className="content-header">
                      <div>Small Business Plan</div>
                      <div>$59 per month</div>
                      <div>
                        <div className="pricing-button">Sign Up Now</div>
                      </div>
                      <div>You get Pulse Basics, Plus:</div>
                    </div>

                    <ul>
                      <li>
                        <span>
                          Manage cash flow across multiple financial accounts
                        </span>
                      </li>
                      <li>
                        <span>
                          Invite your investors, book keeper, or management team
                          to see reports or manage cash flow
                        </span>
                      </li>
                      <li>
                        <span>
                          Integrate with QuickBooks Online for more accurate
                          cash flow
                        </span>
                      </li>
                      <li>
                        <span>
                          Track your actual cash flow alongside your projected
                          cash flow
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" cards">
              <Link to="sign-up" className="card-link">
                <div>
                  <div className="banner">
                    Complex business with multiple financial accounts,
                    currencies, or auditing needs?
                  </div>

                  <div className="content">
                    <div className="content-header">
                      <div>Unlock Extra Features</div>
                      <div>$89 per month</div>
                      <div>
                        <div className="pricing-button">Try Premium</div>
                      </div>
                      <div>Get It All, Plus:</div>
                    </div>

                    <ul>
                      <li>
                        <span>
                          Manage cash flow across multiple financial accounts
                        </span>
                      </li>
                      <li>
                        <span>
                          Convert to any currency for localized cash flow
                          reporting and projections
                        </span>
                      </li>
                      <li>
                        <span>
                          Attach invoices or contracts to your cash flow entries
                          for accountability and auditing
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="marketing">
            <div className="image">
              <img src="/assets/subvert-avatar.png" alt="subvert logo" />
            </div>
            <div className="content">
              <div>
                “Pulse is worth every penny because it empowers business owners
                with critical financial insight and knowledge.”
              </div>
              <div>Subvert Marketing, Inc.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2>FAQ</h2>

          <div className="faq-blocks">
            <div className="blocks">
              <h4>How does the 30-day free trial work</h4>
              <p>
                You can use Pulse absolutely free for 30 days. After 30 days, we
                will charge the credit card you used when you sign up. If you
                choose to cancel your account before your trial ends, your card
                will not be charged.
              </p>
            </div>

            <div className="blocks">
              <h4>
                If I upgrade an existing account, do I get another free trial?
              </h4>
              <p>
                Brand new accounts are the only ones eligible for a 30-day free
                trial. If you upgrade an existing account, your credit card will
                be billed the new amount on the date of your next billing cycle.
              </p>
            </div>

            <div className="blocks">
              <h4>What is a “Financial Account”?</h4>
              <p>
                Financial Accounts are a grouping of income and expense items
                that can be used for tracking or reporting purposes.
                <br />
                <br />
                They're designed to be flexible and can be used to differentiate
                between bank accounts, companies, individuals or between
                personal and business entries.
              </p>
            </div>

            <div className="blocks">
              <h4>Do I have to commit to a long-term contract?</h4>
              <p>
                No. There is no contract when you use Pulse, other than agreeing
                to our Terms of Service.
              </p>
            </div>

            <div className="blocks">
              <h4>Will I be able to cancel my account if I don't use Pulse?</h4>
              <p>
                Yes - you can cancel your account at any time. To cancel your
                account, go to your billing page and click on “Please cancel my
                account” at the bottom of the page. The account owner is the
                only one who can cancel an account. An email request to delete
                an account is not considered cancellation.
              </p>
            </div>

            <div className="blocks">
              <h4>What types of payments do you accept?</h4>
              <p>
                We accept payments made online using Visa, Mastercard, Discover,
                and American Express.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
