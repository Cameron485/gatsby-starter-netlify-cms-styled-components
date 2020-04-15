import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import LandingPagePreview from './preview-templates/LandingPagePreview';
import PeoplePagePreview from './preview-templates/PeoplePagePreview';
import withStyledComponentsRendered from './styled-components';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate(
    'landing-page',
    withStyledComponentsRendered(LandingPagePreview)
);
CMS.registerPreviewTemplate(
    'people-page',
    withStyledComponentsRendered(PeoplePagePreview)
);
