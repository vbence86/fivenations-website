import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

export default class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').aboutUs;  
  }

  render() {
    return (
      <section className="container" id="about_me">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            <div className="row">
              <div className="col-md-5 col-sm-4 col-xs-12">
                <h3><i className="fa fa-user"></i>{this.state.aboutUsHeader}</h3>
                <div className="block">
                  <ReactMarkdown source={this.state.aboutUsContent} />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <h3><i className="fa fa-building"></i>Work history</h3>
                <div className="block">
                  <h4>Product Manager</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-building"></i> Dropbox</li>
                    <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                  </ul>
                </div>
                <div className="block">
                  <h4> Senior UX Designer</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-building"></i> Dropbox</li>
                    <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                  </ul>
                </div>
                <div className="block">
                  <h4>UX Design Intern</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-building"></i> Dropbox</li>
                    <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6">
                <h3><i className="fa fa-graduation-cap"></i>Education</h3>
                <div className="block">
                  <h4>User experience Design</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-book"></i> University of Punjab</li>
                    <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                  </ul>
                </div>
                <div className="block">
                  <h4>User experience Design</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-book"></i> University of Punjab</li>
                    <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                  </ul>
                </div>
                <div className="block">
                  <h4>User experience Design</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-book"></i> University of Punjab</li>
                    <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>    
    );
  }
}
