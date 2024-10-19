import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Contact10 = (props) => {
  return (
    <>
      <div className="contact10-container1 thq-section-padding">
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content1 thq-flex-row">
            <div className="contact10-content2">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="contact10-text21 thq-heading-2">
                      Contact Us
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="contact10-text17 thq-body-large">
                      Have questions or want to learn more about our services?
                      Feel free to reach out to us.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact10-content3 thq-flex-row">
            <div className="contact10-container2">
              <img
                alt={props.location1ImageAlt}
                src={props.location1ImageSrc}
                className="contact10-image1 thq-img-ratio-16-9"
              />
              <h3>
                {props.location1 ?? (
                  <Fragment>
                    <h3 className="contact10-text18 thq-heading-3">
                      Headquarters
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.location1Description ?? (
                  <Fragment>
                    <p className="contact10-text20 thq-body-large">
                      123 Main Street, Cityville, Country
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="contact10-container3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="contact10-container4">
              <img
                alt={props.location2ImageAlt}
                src={props.location2ImageSrc}
                className="contact10-image2 thq-img-ratio-16-9"
              />
              <h3>
                {props.location2 ?? (
                  <Fragment>
                    <h3 className="contact10-text16 thq-heading-3">
                      Support Center
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.location2Description ?? (
                  <Fragment>
                    <p className="contact10-text19 thq-body-large">
                      456 Elm Avenue, Townsville, Country
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="contact10-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact10-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-max-width {
            align-self: center;
          }
          .contact10-content1 {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .contact10-content2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-content3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact10-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image1 {
            object-fit: cover;
          }
          .contact10-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image2 {
            object-fit: cover;
          }
          .contact10-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-text16 {
            display: inline-block;
            text-align: center;
          }
          .contact10-text17 {
            display: inline-block;
          }
          .contact10-text18 {
            display: inline-block;
            text-align: center;
          }
          .contact10-text19 {
            display: inline-block;
          }
          .contact10-text20 {
            display: inline-block;
          }
          .contact10-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact10-content1 {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact10-content3 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact10-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact10-image1 {
              width: 100%;
            }
            .contact10-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact10.defaultProps = {
  location2: undefined,
  location2ImageAlt: 'Support Center Image',
  location1ImageAlt: 'Headquarters Image',
  content1: undefined,
  location1: undefined,
  location2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  location2Description: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1561554250-0086e85c2042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzUxMTczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  heading1: undefined,
}

Contact10.propTypes = {
  location2: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact10
