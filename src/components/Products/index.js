import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Products = ({ gridItems, partners }) => (
  <Fragment>
    <div className='columns is-multiline level'>
      {gridItems.map(item => (
        <div key={item.image} className='column is-4'>
          <section className='section'>
            <p className='has-text-centered level-item'>
              <Link to={`/products/${item.slug}`}>
                <figure className='image'>
                  <img alt={item.name} src={item.image} style={{ height: 255, width: 163 }} />
                </figure>
              </Link>
            </p>
            <h3 className='is-size-5 has-text-centered has-text-weight-bold has-text-black level-item'>{item.name}</h3>
            <p className='level-item has-text-black' style={{ width: '100%' }}>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
    <div className='columns is-centered'>
      <div className='column is-half'>
        <div className='columns is-mobile is-centered level'>
          {partners.logo.map(logo => (
            <div key={logo.image} className='column is-3'>
              <section className='section'>
                <figure className='image is-96x96 level-item'>
                  <img alt='partner logo' src={logo.image} />
                </figure>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Fragment>
)

Products.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      slug: PropTypes.string,
      name: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.array,
    })
  ),
}

export default Products
