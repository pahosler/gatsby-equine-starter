import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import ProductsPreview from './preview-templates/ProductsPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
// import StoreLocatorPagePreview from './preview-templates/StoreLocatorPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('products', ProductsPreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
