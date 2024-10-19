import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Hero17 from '../components/hero17'
import Gallery7 from '../components/gallery7'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'

const Landing = (props) => {
  return (
    <>
      <div className="landing-container1">
        <Head>
          <title>Landing - Togthr template</title>
          <meta property="og:title" content="Landing - Togthr template" />
        </Head>
        <header data-thq="thq-navbar" className="landing-navbar">
          <img alt="image" src="/logo.svg" className="landing-branding1" />
          <div data-thq="thq-burger-menu" className="landing-burger-menu">
            <div className="landing-hamburger">
              <img alt="image" src="/hamburger.svg" className="landing-icon1" />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="landing-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="landing-nav1"
            >
              <div className="landing-container2">
                <img alt="image" src="/logo.svg" className="landing-image1" />
                <div data-thq="thq-close-menu" className="landing-menu-close">
                  <svg viewBox="0 0 1024 1024" className="landing-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="landing-nav2"
              >
                <span className="landing-text100">About</span>
                <span className="landing-text101">Features</span>
                <span className="landing-text102">Pricing</span>
                <span className="landing-text103">Team</span>
                <span className="landing-text104">Blog</span>
              </nav>
              <div className="landing-container3">
                <button className="landing-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="landing-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="landing-icon4"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="landing-icon6"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="landing-icon8"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <Hero17
          action1={
            <Fragment>
              <span className="landing-text105 thq-body-small">
                Main action
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="landing-text106 thq-body-small">
                Secondary action
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text107 thq-body-large">
                Unlock the potential for growth and development with our
                optimized platform. We focus on creating environments and
                providing top-notch customer validation services to propel your
                success.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text108 thq-heading-1">
                <span>Improve about us</span>
                <br></br>
              </span>
            </Fragment>
          }
        ></Hero17>
        <span>Text</span>
        <Gallery7
          content1={
            <Fragment>
              <span className="landing-text112 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text113 thq-heading-2">
                Photo Gallery
              </span>
            </Fragment>
          }
        ></Gallery7>
        <Features24
          feature1Title={
            <Fragment>
              <span className="landing-text114 thq-heading-2">
                Multiverse Exploration
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="landing-text115 thq-heading-2">
                Ecosystem Development
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="landing-text116 thq-heading-2">
                Integration Solutions
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="landing-text117 thq-body-small">
                Discover and navigate through diverse multiverses to expand your
                horizons.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="landing-text118 thq-body-small">
                Build robust ecosystems that foster growth and innovation within
                your projects.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="landing-text119 thq-body-small">
                Seamlessly integrate various components to create a harmonious
                and efficient system.
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="landing-text120">Get Started</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text121 thq-body-large">
                Join our platform today and unlock the potential for growth and
                development in your business.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text122 thq-heading-2">
                Ready to Grow Your Business?
              </span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="landing-text123 thq-heading-2">
                Multiverse Exploration
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="landing-text124 thq-heading-2">
                Ecosystem Development
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="landing-text125 thq-heading-2">
                Integration Solutions
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="landing-text126 thq-body-small">
                Discover and navigate through diverse multiverses to expand your
                horizons.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="landing-text127 thq-body-small">
                Foster the growth of interconnected ecosystems to enhance
                sustainability and innovation.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="landing-text128 thq-body-small">
                Seamlessly integrate different components for a harmonious and
                efficient system.
              </span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan1={
            <Fragment>
              <span className="landing-text129 thq-body-large">Basic Plan</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="landing-text130 thq-body-large">
                Business plan
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="landing-text131 thq-body-large">
                Enterprise plan
              </span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="landing-text132 thq-body-large">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="landing-text133 thq-body-large">
                Business plan
              </span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="landing-text134 thq-body-large">
                Enterprise plan
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text135 thq-body-small">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="landing-text136 thq-body-large">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text139 thq-heading-2">
                Pricing plan
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="landing-text140 thq-heading-3">$10/month</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="landing-text141 thq-heading-3">$29/mo</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="landing-text142 thq-heading-3">$49/mo</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="landing-text143 thq-body-small">Sign Up</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="landing-text144 thq-heading-3">$20/month</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="landing-text145 thq-body-large">$100/year</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="landing-text146 thq-body-small">
                Get started
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="landing-text147 thq-heading-3">$299/yr</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="landing-text148 thq-body-large">
                or $299 yearly
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="landing-text149 thq-body-small">
                Get started
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="landing-text150 thq-heading-3">$499/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="landing-text151 thq-body-large">
                or $499 yearly
              </span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="landing-text152 thq-body-small">
                Sign Up Now
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="landing-text153 thq-body-large">$200/year</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="landing-text154 thq-body-small">
                Get started
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="landing-text155 thq-body-large">
                or $29 monthly
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="landing-text156 thq-body-small">
                Get started
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="landing-text157 thq-body-large">
                or $49 monthly
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="landing-text158 thq-body-small">
                Feature 1 included
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="landing-text159 thq-body-small">
                Feature 2 included
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="landing-text160 thq-body-small">
                Feature 3 included
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="landing-text161 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="landing-text162 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="landing-text163 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="landing-text164 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="landing-text165 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="landing-text166 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="landing-text167 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="landing-text168 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="landing-text169 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="landing-text170 thq-body-small">
                Additional feature: XYZ
              </span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="landing-text171 thq-body-small">
                Additional feature: ABC
              </span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="landing-text172 thq-body-small">
                Additional feature: DEF
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="landing-text173 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="landing-text174 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="landing-text175 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="landing-text176 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="landing-text177 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="landing-text178 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="landing-text179 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="landing-text180 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="landing-text181 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Title={
            <Fragment>
              <span className="landing-text182 thq-heading-2">
                Create an Account
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="landing-text183 thq-heading-2">
                Explore Environments
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="landing-text184 thq-heading-2">
                Validate Your Ideas
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="landing-text185 thq-heading-2">
                Integrate and Grow
              </span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="landing-text186 thq-body-small">
                Sign up for a free account on our platform to access all the
                features and services.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="landing-text187 thq-body-small">
                Discover different environments tailored for growth and
                development in various industries.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="landing-text188 thq-body-small">
                Utilize our customer validation services to test and validate
                your ideas with real users.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="landing-text189 thq-body-small">
                Integrate your projects into our multiverse ecosystem for
                accelerated growth and success.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="landing-text190 thq-body-small">5 stars</span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="landing-text191 thq-body-small">
                Highly recommend this platform for any business looking to
                innovate and expand their reach.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="landing-text192 thq-body-small">
                Exceptional service and valuable insights provided. Our company
                has seen significant progress since partnering with this
                platform.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="landing-text193 thq-body-small">
                The tools and guidance offered here have been instrumental in
                our success. Grateful for the support!
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text194 thq-body-small">
                Working with this platform has been a game-changer for our
                company. The support and resources provided have truly
                accelerated our growth.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text195 thq-heading-2">
                Client Testimonials
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="landing-text196 thq-body-large">John Doe</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="landing-text197 thq-body-large">Jane Smith</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="landing-text198 thq-body-large">
                Michael Johnson
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="landing-text199 thq-body-large">Sarah Lee</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="landing-text200 thq-body-small">
                CEO, Tech Co.
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="landing-text201 thq-body-small">
                CTO, Software Solutions Ltd.
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="landing-text202 thq-body-small">
                Founder, Marketing Pro Inc.
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="landing-text203 thq-body-small">
                COO, Digital Dynamics Corp.
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="landing-text204 thq-body-large">
                Have questions or want to learn more about our services? Feel
                free to reach out to us.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text205 thq-heading-2">Contact Us</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="landing-text206 thq-heading-3">
                Headquarters
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="landing-text207 thq-heading-3">
                Support Center
              </span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="landing-text208 thq-body-large">
                123 Main Street, Cityville, Country
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="landing-text209 thq-body-large">
                456 Elm Avenue, Townsville, Country
              </span>
            </Fragment>
          }
        ></Contact10>
        <div className="landing-footer">
          <div className="landing-content">
            <div className="landing-main">
              <div className="landing-branding2">
                <img alt="image" src="/logo.svg" className="landing-image2" />
                <span className="landing-text210">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="landing-links">
                <div className="landing-column1">
                  <span className="landing-header1">Company</span>
                  <div className="landing-list1">
                    <Link href="/">
                      <a className="landing-link10">About</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link11">Services</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link12">How</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link13">
                        <span className="landing-text211">Why</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="landing-column2">
                  <span className="landing-header2">Extern</span>
                  <div className="landing-list2">
                    <Link href="/">
                      <a className="landing-link14">News</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link15">Articles</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link16">Blog</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link17">Privacy</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link18">Terms</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link19">Legal</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link20">Press</a>
                    </Link>
                  </div>
                </div>
                <div className="landing-column3">
                  <span className="landing-header3">Social</span>
                  <div className="landing-list3">
                    <Link href="/">
                      <a className="landing-link21">LinkedIn</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link22">Twitter</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link23">Instagram</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link24">Facebook</a>
                    </Link>
                    <Link href="/">
                      <a className="landing-link25">TikTok</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="landing-bottom">
              <span className="landing-text213">
                © 2022 togthr - All rights reserved
              </span>
              <button data-role="scroll-top" className="landing-button button">
                <img alt="image" src="/arrow.svg" className="landing-image3" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .landing-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .landing-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .landing-branding1 {
            width: 120px;
            object-fit: cover;
          }
          .landing-burger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .landing-hamburger {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: #0000f5;
          }
          .landing-hamburger:hover {
            opacity: 0.5;
          }
          .landing-icon1 {
            width: 60px;
            object-fit: cover;
          }
          .landing-mobile-menu {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .landing-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .landing-image1 {
            height: 2rem;
          }
          .landing-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .landing-icon2 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .landing-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-text100 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .landing-text101 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .landing-text102 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .landing-text103 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .landing-text104 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .landing-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .landing-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .landing-icon-group {
            fill: var(--dl-color-gray-white);
            display: flex;
          }
          .landing-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .landing-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .landing-icon8 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .landing-text105 {
            display: inline-block;
          }
          .landing-text106 {
            display: inline-block;
          }
          .landing-text107 {
            display: inline-block;
            text-align: center;
          }
          .landing-text108 {
            display: inline-block;
            text-align: center;
          }
          .landing-text112 {
            display: inline-block;
            text-align: center;
          }
          .landing-text113 {
            display: inline-block;
            text-align: center;
          }
          .landing-text114 {
            display: inline-block;
          }
          .landing-text115 {
            display: inline-block;
          }
          .landing-text116 {
            display: inline-block;
          }
          .landing-text117 {
            display: inline-block;
          }
          .landing-text118 {
            display: inline-block;
          }
          .landing-text119 {
            display: inline-block;
          }
          .landing-text120 {
            display: inline-block;
          }
          .landing-text121 {
            display: inline-block;
          }
          .landing-text122 {
            display: inline-block;
          }
          .landing-text123 {
            display: inline-block;
          }
          .landing-text124 {
            display: inline-block;
          }
          .landing-text125 {
            display: inline-block;
          }
          .landing-text126 {
            display: inline-block;
          }
          .landing-text127 {
            display: inline-block;
          }
          .landing-text128 {
            display: inline-block;
          }
          .landing-text129 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .landing-text130 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .landing-text131 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .landing-text132 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .landing-text133 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .landing-text134 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .landing-text135 {
            display: inline-block;
            text-align: center;
          }
          .landing-text136 {
            display: inline-block;
            text-align: center;
          }
          .landing-text139 {
            display: inline-block;
            text-align: center;
          }
          .landing-text140 {
            display: inline-block;
            font-size: 48px;
          }
          .landing-text141 {
            display: inline-block;
            font-size: 48px;
          }
          .landing-text142 {
            display: inline-block;
            font-size: 48px;
          }
          .landing-text143 {
            display: inline-block;
          }
          .landing-text144 {
            display: inline-block;
            font-size: 48px;
          }
          .landing-text145 {
            display: inline-block;
          }
          .landing-text146 {
            display: inline-block;
          }
          .landing-text147 {
            display: inline-block;
            font-size: 48px;
          }
          .landing-text148 {
            display: inline-block;
          }
          .landing-text149 {
            display: inline-block;
          }
          .landing-text150 {
            display: inline-block;
            font-size: 48px;
          }
          .landing-text151 {
            display: inline-block;
          }
          .landing-text152 {
            display: inline-block;
          }
          .landing-text153 {
            display: inline-block;
          }
          .landing-text154 {
            display: inline-block;
          }
          .landing-text155 {
            display: inline-block;
          }
          .landing-text156 {
            display: inline-block;
          }
          .landing-text157 {
            display: inline-block;
          }
          .landing-text158 {
            display: inline-block;
          }
          .landing-text159 {
            display: inline-block;
          }
          .landing-text160 {
            display: inline-block;
          }
          .landing-text161 {
            display: inline-block;
          }
          .landing-text162 {
            display: inline-block;
          }
          .landing-text163 {
            display: inline-block;
          }
          .landing-text164 {
            display: inline-block;
          }
          .landing-text165 {
            display: inline-block;
          }
          .landing-text166 {
            display: inline-block;
          }
          .landing-text167 {
            display: inline-block;
          }
          .landing-text168 {
            display: inline-block;
          }
          .landing-text169 {
            display: inline-block;
          }
          .landing-text170 {
            display: inline-block;
          }
          .landing-text171 {
            display: inline-block;
          }
          .landing-text172 {
            display: inline-block;
          }
          .landing-text173 {
            display: inline-block;
          }
          .landing-text174 {
            display: inline-block;
          }
          .landing-text175 {
            display: inline-block;
          }
          .landing-text176 {
            display: inline-block;
          }
          .landing-text177 {
            display: inline-block;
          }
          .landing-text178 {
            display: inline-block;
          }
          .landing-text179 {
            display: inline-block;
          }
          .landing-text180 {
            display: inline-block;
          }
          .landing-text181 {
            display: inline-block;
          }
          .landing-text182 {
            display: inline-block;
          }
          .landing-text183 {
            display: inline-block;
          }
          .landing-text184 {
            display: inline-block;
          }
          .landing-text185 {
            display: inline-block;
          }
          .landing-text186 {
            display: inline-block;
            text-align: center;
          }
          .landing-text187 {
            display: inline-block;
            text-align: center;
          }
          .landing-text188 {
            display: inline-block;
            text-align: center;
          }
          .landing-text189 {
            display: inline-block;
            text-align: center;
          }
          .landing-text190 {
            display: inline-block;
            text-align: left;
          }
          .landing-text191 {
            display: inline-block;
            text-align: left;
          }
          .landing-text192 {
            display: inline-block;
            text-align: left;
          }
          .landing-text193 {
            display: inline-block;
            text-align: left;
          }
          .landing-text194 {
            display: inline-block;
            text-align: center;
          }
          .landing-text195 {
            display: inline-block;
          }
          .landing-text196 {
            display: inline-block;
          }
          .landing-text197 {
            display: inline-block;
          }
          .landing-text198 {
            display: inline-block;
          }
          .landing-text199 {
            display: inline-block;
          }
          .landing-text200 {
            display: inline-block;
          }
          .landing-text201 {
            display: inline-block;
          }
          .landing-text202 {
            display: inline-block;
          }
          .landing-text203 {
            display: inline-block;
          }
          .landing-text204 {
            display: inline-block;
          }
          .landing-text205 {
            display: inline-block;
          }
          .landing-text206 {
            display: inline-block;
            text-align: center;
          }
          .landing-text207 {
            display: inline-block;
            text-align: center;
          }
          .landing-text208 {
            display: inline-block;
          }
          .landing-text209 {
            display: inline-block;
          }
          .landing-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .landing-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-top-width: 1px;
          }
          .landing-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .landing-branding2 {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-image2 {
            width: 120px;
            object-fit: cover;
          }
          .landing-text210 {
            color: #7c7c80;
            line-height: 24px;
          }
          .landing-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .landing-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-header1 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .landing-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-link10 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link10:hover {
            opacity: 0.5;
          }
          .landing-link11 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link11:hover {
            opacity: 0.5;
          }
          .landing-link12 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link12:hover {
            opacity: 0.5;
          }
          .landing-link13 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link13:hover {
            opacity: 0.5;
          }
          .landing-text211:hover {
            opacity: 0.5;
          }
          .landing-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-header2 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .landing-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-link14 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link14:hover {
            opacity: 0.5;
          }
          .landing-link15 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link15:hover {
            opacity: 0.5;
          }
          .landing-link16 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link16:hover {
            opacity: 0.5;
          }
          .landing-link17 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link17:hover {
            opacity: 0.5;
          }
          .landing-link18 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link18:hover {
            opacity: 0.5;
          }
          .landing-link19 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link19:hover {
            opacity: 0.5;
          }
          .landing-link20 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link20:hover {
            opacity: 0.5;
          }
          .landing-column3 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-header3 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .landing-list3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-link21 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link21:hover {
            opacity: 0.5;
          }
          .landing-link22 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link22:hover {
            opacity: 0.5;
          }
          .landing-link23 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link23:hover {
            opacity: 0.5;
          }
          .landing-link24 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link24:hover {
            opacity: 0.5;
          }
          .landing-link25 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .landing-link25:hover {
            opacity: 0.5;
          }
          .landing-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-text213 {
            color: #7c7c80;
            font-size: 14px;
            line-height: 21px;
          }
          .landing-button {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 0px;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
          }
          .landing-image3 {
            width: 21px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .landing-content {
              border-top-width: 0px;
            }
            .landing-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .landing-branding2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .landing-burger-menu {
              display: flex;
            }
            .landing-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .landing-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .landing-branding1 {
              padding-top: var(--dl-space-space-unit);
            }
            .landing-hamburger {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .landing-icon1 {
              width: 30px;
            }
            .landing-mobile-menu {
              padding: 16px;
            }
            .landing-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .landing-bottom {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .landing-button {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Landing
