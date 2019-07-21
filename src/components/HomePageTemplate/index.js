import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Products from '../Products'

const HomePageTemplate = ({
  title,
  meta_title,
  meta_description,
  heading,
  subheading,
  offerings,
  partners,
  quote,
  advantage,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-white has-section-padding-none'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns '>
            <div className='column is-4 is-offset-2'>
              <div className='section'>
                <h1 className='title is-size-3'>{heading}</h1>
                <h5 className='subtitle is-size-7'>{subheading}</h5>
              </div>
            </div>
            <div className='column is-6  '>
              <div className='section'>
                <img src='/img/equineadvantage_logo.svg'
                  style={{ height: 186, width: 350, marginTop: -10 }}
                  alt='Equine Advantage logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section is-paddingless'
      style={{ padding: 0 }}
    >
      <div className='columns is-mobile is-centered'>
        <div className='column is-three-fifths-desktop is-one-quarter-mobile' />
        <div className='column'>
          <div className='button is-low-starch-blue is-border-low-starch-blue is-medium has-text-right is-radiusless'
            style={{ zIndex: 10, marginTop: -45 }}
          >
            <Link className='has-text-black is-size-6 has-text-weight-bold' to='/'>
            ORDER A SAMPLE
            </Link>
          </div>
        </div>
      </div>
      <figure className='is-3by1'>
        <img className='image' src='/img/horse-header.png'
          style={{ marginTop: -70 }}
          alt='An oil painting of a mare and her foul'
        />
      </figure>
    </section>
    <section className='section is-low-starch-blue'>
      <div className='columns is-centered'>
        <div className='column is-half'>
          <div className='is-size-5 has-text-weight-bold has-text-centered has-text-black'><u>EQUINE ADVANTAGE PRODUCTS</u></div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Products gridItems={offerings.blurbs} partners={partners} />
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  partners: PropTypes.object,
  quote: PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }),
  advantage: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default HomePageTemplate
