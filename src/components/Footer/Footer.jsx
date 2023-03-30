import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray">
      <div className="container">
        <div className="container-div">
          <div className="flex">
            <div className="text-center">
              <p>
                <Link to="/">
                  <img src="/assets/pulse-logo.svg" alt="pulse logo" />
                </Link>
              </p>
              <p>
                <Link to="sign-up" className="button button-gradient">
                  Sign up for a 30-Day Free Trial
                </Link>
              </p>
            </div>

            <div className="footer-right">
              <ul>
                <li className="text-white">Product</li>
                <li>
                  <Link to="features" className="text-green">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="pricing" className="text-green">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="sign-up" className="text-green">
                    Sign Up
                  </Link>
                </li>
              </ul>

              <ul>
                <li className="text-white">Company</li>
                <li>
                  <Link to="customer-stories" className="text-green">
                    Customer Stories
                  </Link>
                </li>
                <li>
                  <Link to="about" className="text-green">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" className="text-green">
                    Contact
                  </Link>
                </li>
              </ul>

              <ul>
                <li className="text-white">Resources</li>
                <li>
                  <Link to="support" className="text-green">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="blog" className="text-green">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container bottom">
        <div className="text-gray">
          <div>
            ©2019 Pulseapp.com, Inc. All Rights Reserved |{' '}
            <Link to="terms" className="text-gray">
              Term of use
            </Link>{' '}
            |{' '}
            <Link to="privacy" className="text-gray">
              Privacy Policy
            </Link>{' '}
            |
            <Link to="eu-privacy" className="text-gray">
              {' '}
              EU Privacy
            </Link>
            <br /> Pulse is made by
            <Link to="simple-focus" className="text-gray">
              {' '}
              Simple Focus
            </Link>
            . We also make{' '}
            <Link to="ballpark" className="text-gray">
              Ballpark
            </Link>
            ,{' '}
            <Link to="sifter" className="text-gray">
              Sifter
            </Link>
            , and
            <Link to="curated" className="text-gray">
              {' '}
              Curated
            </Link>{' '}
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
