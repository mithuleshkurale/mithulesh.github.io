import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Publicis Sapient Consulting<span> June 2018-present</span></h2>
                        <p>For past one year I have been working as a software engineering consultant at Goldman Sachs on an agile team in developing a newly automated digital platform for individuals who want to partake in a company’s IPO share program. Platform allows for client onboarding as well as personal dashboard access to manage accounts and perform sell order transactions. My main responsibility as a backend developer is to design, develop, and enhance the business logic on the backend for REST API services using core Java and Spring framework. Great exposure to Java 8, Mongodb, Spring, and Microservice Architecture. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>Undergraduate Education @ Rutgers University <span> Sept 2014- May 2018</span></h2>
                      <p>I have completed my Bachelors in Engineering in Electrical and Computer Engineering.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Global Business and Technology Solutions Intern at Prudential Financial <span>June 2017 - August 2017 </span></h2>
                        <p>I interned on the platform infra team in GBTS and worked extensively with Splunk and its unique search processing language to query and filter windows event log data to aid in system troubleshooting. Reduced future system failures by significant margins by understanding the causes of the initial faults. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
