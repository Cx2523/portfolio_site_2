"use strict";
import React from 'react';
import { render } from 'react-dom';
import BubbleChart from './BubbleChart.js';
import BubbleChartjs from './ChartJsBubbleChart.js';

(function ($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu

  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function onMapMouseleaveHandler(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
};
var onMapClickHandler = function onMapClickHandler(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
};

// const skillData = [
//   {
//     name: "Javascript",
//     value:9
//   },
//   {
//     name: "C#",
//     value:7
//   },
//   {
//     name: ".Net",
//     value:7
//   },
//   {
//     name: "React",
//     value:6
//   },
//   {
//     name: "Angular",
//     value:4
//   },
//   {
//     name: "SQL",
//     value:5
//   },
//   {
//     name: "SQL Server",
//     value:2
//   },
//   {
//     name: "Node",
//     value:5
//   }
// ];
//
// render(<BubbleChart skills={skillData} />, document.getElementById('react-node'));

var ctx1 = document.getElementById("myChart");
BubbleChartjs(ctx1);
var ctx2 = document.getElementById("myChart2");
BubbleChartjs(ctx2);
