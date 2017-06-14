/* globals $, window */
import React, {Component} from 'react';

export default class Universe extends Component {

  componentWillMount() {
    // Smooth Scroll Start
    var navInneer = $('.scroll-nav');
    navInneer.singlePageNav({
      updateHash: false,
      filter: ':not(.external)',
      offset: 61,
      speed: 1000,
      currentClass: 'sdm-active',
      easing: 'swing',
    });
    $(".scroll-nav li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      $('.scroll-nav li a').removeClass('sdm-active');
      $(this).addClass('sdm-active');
    });
    // Smooth Scroll End
    var win = $(window);
    win.on('scroll',function() {
      var scroll = win.scrollTop();
      if (scroll >= 400) {
        $('.scroll-nav').addClass('scroll-down');
        $('#side-cta').addClass('open');
      } else {
        $('.scroll-nav').removeClass('scroll-down');
        $('#side-cta').removeClass('open');
      }
    });

  }

  render() {
    return (
      <div id={this.props.id} data-spy="scroll" data-target=".navbar" data-offset="50">
        {this.props.children}
      </div>
    );
  }
}
