import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5">About Us</h1>
          <div className="row">
            <div className="col-md-12">
              <p className="lead">
                XynthraAi is a cutting-edge AI platform designed to help creators, marketers, and businesses generate powerful AI content effortlessly.
              </p>
              <p>
                Our mission is to democratize AI technology and make it accessible to everyone. We provide tools for generating images, audio, text, video, and much more using advanced machine learning algorithms.
              </p>
              <p>
                With our intuitive interface and powerful features, you can create amazing content in seconds. Join thousands of users who are already leveraging our platform to grow their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />

      <Footer />
    </div>
  )
}

export default AboutPage
