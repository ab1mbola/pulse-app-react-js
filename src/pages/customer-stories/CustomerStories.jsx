import React from 'react';
import './CustomerStories.css';
import GradientOffer from '../../components/gradient-offer/GradientOffer';
import { Link } from 'react-router-dom';

const CustomerStories = () => {
  return (
    <main>
      <section className="customer-hero">
        <div className="container">
          <div className="heading">
            <h1>See What Our Customers Are Saying About Pulse.</h1>
          </div>
        </div>
        <div className="container">
          <div className="customer-cards">
            <div className="card">
              <div className="card-image">
                <Link>
                  <img
                    src="https://pulseapp.com/uploads/blog-casimir.jpg"
                    alt="casimir"
                  />
                </Link>
              </div>

              <div className="card-text">
                <div>
                  “Casimir Loeber from RealtyNinja tells us how Pulse takes the
                  'fear and stress out of cash flow projection and management.'”
                </div>
                <div>
                  How RealtyNinja Uses Pulse to Avoid Stress About Cash Flow
                </div>
                <div>
                  <Link>Read Case Study →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="customer-cards">
            <div className="card">
              <div className="card-image">
                <Link>
                  <img
                    src="https://pulseapp.com/uploads/boldunderline-sopi.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="card-text">
                <div>
                  “Pulse helps us monitor the heart-rate of our business and
                  reconcile our monthly operational expenses.”
                </div>

                <div>
                  How boldUnderline Uses Pulse to Stay Financially Strong
                </div>
                <div>
                  <Link>Read Case Study →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="customer-cards">
            <div className="card">
              <div className="card-image">
                <Link>
                  <img
                    src="https://pulseapp.com/uploads/ngen-crop.jpg"
                    alt=""
                  />
                </Link>
              </div>

              <div className="card-text">
                <div>
                  “Pulse gives the folks at nGen Works confidence in their cash
                  flow.”
                </div>

                <div>
                  How nGen Works Uses Pulse to Make Better Business Decisions
                </div>
                <div>
                  <Link>Read Case Study →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="customer-cards">
            <div className="card">
              <div className="card-image">
                <Link>
                  <img
                    src="https://pulseapp.com/uploads/Carl_Smith.jpg"
                    alt=""
                  />
                </Link>
              </div>

              <div className="card-text">
                <div>
                  “After using Pulse at his previous agency, Carl came back to
                  Pulse because it gives him a feeling of control over his
                  business.”
                </div>

                <div>Bureau of Digital Uses Pulse to Control Cash Flow</div>
                <div>
                  <Link>Read Case Study →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review-section">
        <div className="container">
          <p>
            Have something to say about Pulse? We'd love to hear it.{' '}
            <Link>Tell us your Story</Link>
          </p>

          <div className="reviews">
            <div className="card">
              <div>
                <p>
                  "Cash flow is king, and yet, there are no tools to properly
                  manage it. I think Pulse is really onto something. It took me
                  about an hour to finish entering all of my inflows and
                  outflows and share it with the other partners. I now have a
                  really clear idea of where I need to tighten things up to hit
                  my goals."
                </p>
                <p>
                  Navid Safabakhsh, <Link>Freshout</Link>
                </p>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div>
                <p>
                  "Pulse is perfect for those of us who are not
                  accounting-minded and need something more automated than an
                  Excel spreadsheet and less complicated than Quickbooks."
                </p>
                <p className="mt-auto">
                  Scott Allen, Founder/CCO, <Link>Monkeyfoot Interactive</Link>
                </p>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div>
                <p>
                  "Pulse is the only app that has allowed me to easily see how
                  my cash flow changes if I add additional income or expenses
                  and plan accordingly. I would rebuild Pulse as a spreadsheet
                  if you guys stopped offering it."
                </p>
                <p>Daryl Freier, Fine Council</p>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div>
                <p>
                  "Pulse is exactly the application I was looking for when I was
                  trying to figure out how to track eight accounts in a single
                  view. It was very difficult with Excel and beyond my
                  accounting skills."
                </p>
                <p>
                  Karin Armstrong, <Link>UVic.CA</Link>
                </p>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div>
                <p>
                  "Our company, which has offices in Milan, Italy and a network
                  of more than 400 consultants worldwide, has been using Pulse
                  for some weeks, and we love it because it's simple and totally
                  web-based."
                </p>
                <p>
                  Simone Lovati, founder, <Link>Fashionbi.com</Link>
                </p>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div>
                <p>
                  "Thank you for developing Pulse App. I have been using Excel
                  to manage my cash flow for years, as there was no robust
                  online alternative available. Pulse is excellently designed
                  and has no junk features. It's nice and simple and does an
                  excellent job!"
                </p>
                <p>Niall Kearns</p>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div>
                <p>
                  "Pulse gives me a fluid overview of my cash flow that I can
                  not achieve using my accounting package."
                </p>
                <p>
                  Rachel, <Link>Boost New Media</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientOffer />
    </main>
  );
};

export default CustomerStories;
