import CMS from 'netlify-cms'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import ProductsPagePreview from './preview-templates/ProductsPagePreview'
import HighlightsPagePreview from './preview-templates/HighlightsPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('products', ProductsPagePreview)
CMS.registerPreviewTemplate('highlights', HighlightsPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
