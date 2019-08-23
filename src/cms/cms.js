import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import ProductsPreview from './preview-templates/ProductsPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import StoreLocatorPagePreview from './preview-templates/StoreLocatorPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('products', ProductsPreview)
<<<<<<< HEAD
=======
CMS.registerPreviewTemplate('highlights', HighlightsPagePreview)
CMS.registerPreviewTemplate('locator', StoreLocatorPagePreview)
>>>>>>> ea5bf32467ad047a9b48daa012883a917b3ceca5
CMS.registerPreviewTemplate('contact', ContactPagePreview)
