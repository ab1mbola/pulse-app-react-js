import './GradientOffer.css';
import React from 'react';

export default function GradientOffer() {
  return (
    <section className="bg-gradient-green gradient-banner">
      <div className="container">
        <p className="text-center">
          <Link to="sign-up">Sign Up for a Free 30-Day Trial →</Link>
        </p>
      </div>
    </section>
  );
}
