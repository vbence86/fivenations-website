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
    // Add header class on scroll Start
    var win = $(window);
    win.on('scroll',function() {
      var scroll = win.scrollTop();
      if (scroll >= 400) {
        $('.scroll-nav').addClass('scroll-down');
      } else {
        $('.scroll-nav').removeClass('scroll-down');
      }
    });
    // Add header class on scroll End

  }

  render() {
    return (
      <div data-spy="scroll" data-target=".navbar" data-offset="50">
        {this.props.children}
      </div>
    );
  }
}
