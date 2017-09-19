import React, {Component} from 'react';
import Universe from './Universe';
import Header from './Header';
import ContentMenu from './ContentMenu';
import AboutUs from './AboutUs';
import FeatureList from './FeatureList';
import CTABox from './CTABox';
import ContactUs from './ContactUs';
import ContentProvider from '../../utils/ContentProvider';
import GoogleAnalytics from './GoogleAnalytics';

export class LandingPage extends Component {

  render() {
    return (
      <Universe id="universe">
        <GoogleAnalytics contentProvider={ContentProvider} />
        <Header contentProvider={ContentProvider} />
        <ContentMenu contentProvider={ContentProvider} />
        <FeatureList contentProvider={ContentProvider} />
        <CTABox contentProvider={ContentProvider} />
        <ContactUs contentProvider={ContentProvider} />
        <AboutUs contentProvider={ContentProvider} />
      </Universe>
    );
  }
}

export default LandingPage;
