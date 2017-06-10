import React, {Component} from 'react';

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
                <h3><i className="fa fa-user"></i>About me</h3>
                <div className="block">
                  <p>
                    I am a passionate User Experience and User Interface Designer who has been working in this field for more than 3 years now.
                  </p>
                  <p>
                    You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Lets have a chat and discuss your idea!
                  </p>
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
