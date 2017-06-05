import React, {Component} from 'react';
import Universe from './Universe';
import Header from './Header';
import ContentMenu from './ContentMenu';
import Carousel from './Carousel';
import AboutUs from './AboutUs';
import FeatureList from './FeatureList';
import CTABox from './CTABox';
import ContactUs from './ContactUs';
import ContentProvider from '../../utils/ContentProvider';

export class LandingPage extends Component {

  render() {
    return (
      <Universe>
        <Header contentProvider={ContentProvider} />
        <ContentMenu contentProvider={ContentProvider} />
        <Carousel contentProvider={ContentProvider} />
        <AboutUs contentProvider={ContentProvider} />
        <FeatureList contentProvider={ContentProvider} />
        <CTABox contentProvider={ContentProvider} />
        <ContactUs contentProvider={ContentProvider} />
      </Universe>
    );
  }
}

export default LandingPage;
