import './Features.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <div className="">
      <section className="section-1 text-center">
        <h1 className="">Need an accurate financial forecast?</h1>
        <h2 className="">
          Use Pulse to project your cash flow with confidence
        </h2>
        <p>
          <Link to="sign-up" className="button button-blue">
            Try 30 Days Free
          </Link>
        </p>
      </section>

      <section className="section-2">
        <div className="container">
          <div className="manage">
            <h2>Manage your cash flow.</h2>
          </div>

          <div className="gif">
            <img src="/assets/gif.svg" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="organise-features">
            <div>
              <h4 className="h4">Enter your cash flow projections</h4>
              <p>
                Add single income or expenses to your cash flow for complete
                control.
              </p>
            </div>

            <div>
              <h4 className="h4">Automate recurring entries</h4>
              <p>
                Reduce manual entry with powerful recurring income and expense
                logic.
              </p>
            </div>

            <div>
              <h4 className="h4">View Detailed Transactions</h4>
              <p>
                Add multiple lines to a single item to make your cash flow easy
                to understand.
              </p>
            </div>

            <div>
              <h4 className="h4">Adjust past transactions</h4>
              <p>
                If something needs to be edited, you can do that to any entry,
                at any time.
              </p>
            </div>

            <div>
              <h4 className="h4">Dial in growth and expense curves</h4>
              <p>Anticipating some growth? Pulse can automate that, too.</p>
            </div>

            <div>
              <h4 className="h4">Play with scenarios</h4>
              <p>
                Quickly see what would happen to your bottom line by toggling
                income and expenses on and off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 bg-green">
        <div className="container">
          <div className="visualize">
            <h2>Visualize your income and expenses.</h2>
          </div>
          <div className="visualize-right">
            <div className="viz-gif">
              <div className="feat-viz">
                <img src="/assets/feat-viz.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="reports-features">
            <div>
              <h4>Track your cash flow over any time range</h4>
              <p>
                Monitor your cash flow by week, month, or custom date range.
                Check your cash on hand at the beginning of each month and view
                each day's incoming and outgoing funds.
              </p>
            </div>

            <div>
              <h4>Organize flow into categories</h4>
              <p>Know where your money's coming from and going.</p>
            </div>

            <div>
              <h4>Group cash flow by customer</h4>
              <p>Know who your best (and worst) customers will be.</p>
            </div>

            <div>
              <h4>Group cash flow by project</h4>
              <p>Quickly measure potential profitability on a project basis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-green section-4">
        <div className="container">
          <p className="text-center">
            <Link to="sign-up">Sign Up for a Free 30-Day Trial →</Link>
          </p>
        </div>
      </section>

      <section className="section-5">
        <div className="monitor-intro container text-center">
          <div className="connect">
            <h2>Connect your accounting software.</h2>
          </div>

          <div className="connect-gif">
            <div className="flex">
              <div className="feat-connect">
                <img src="/assets/feat-connect.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="monitor-features">
            <div>
              <h4 className="h4">Quickbooks Online Integration</h4>
              <p className="p">
                Sync at anytime to get the latest transactions from QuickBooks
                Online
              </p>
            </div>

            <div>
              <h4 className="h4">Compare actuals and projections</h4>
              <p className="p">
                By putting your accounting data right alongside your cash flow
                projections, you can compare your projections with your actual
                cash flow.
              </p>
            </div>

            <div>
              <h4 className="h4">Less manual entry and errors</h4>
              <p className="p">
                With a direction connection, you don't have to worry about
                messing anything up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-6 bg-green">
        <div className="customize-intro container">
          <div className="text">
            <h2>Share your progessions.</h2>
          </div>
          <div className="svg">
            <div className="flex">
              <div className="feat-share">
                <img src="/assets/feat-share.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="customize-features">
            <div>
              <h4 className="h4">Invite colaborators</h4>
              <p className="p">
                Share the work load with your team by inviting them to manage
                cash flow with you.
              </p>
            </div>

            <div>
              <h4 className="h4">Share with investors</h4>
              <p className="p">
                We offer read-only access so you can share cash flow projections
                with people who don't need to make changes.
              </p>
            </div>

            <div>
              <h4 className="h4">Attach files</h4>
              <p className="p">
                Include proposals, invoices and contracts with transactions to
                audit or help evaluate income and expenses.
              </p>
            </div>

            <div>
              <h4 className="h4">Export data and print reports</h4>
              <p className="p">
                Easily export your cash flow data from Pulse to a CSV file.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 30% off banner */}
      <section className="bg-gradient-green section-4">
        <div className="container">
          <p className="text-center">
            <Link to="sign-up">Sign Up for a Free 30-Day Trial →</Link>
          </p>
        </div>
      </section>
      {/*  */}
    </div>
  );
}
