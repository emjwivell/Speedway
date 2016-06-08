var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var TapeComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row"></div>

                    <div className="cd-fixed-bg cd-bg-1 header-img supporting-header">
                        <h1 className="header-h1 supporting-h1">Tape</h1>
                        <div className="img-overlay supporting-overlay"></div>
                    </div>

                    <div className="cd-fixed-bg cd-bg-2">
                        <center>
                            <h1>Explore Speedway</h1>
                        </center>
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <video controls>
                              <source src="images/HY-BD.mp4" type="video/mp4" />
                              Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <ul>
                            <li><h1 className="li_description">Width: 1.6 M</h1></li>
                            <li><h1 className="li_description">Speed: 200m per Minute</h1></li>
                            <li><h1 className="li_description">Max Unwind OD: 800mm</h1></li>
                            <li><h1 className="li_description">Max Rewind OD: </h1>
                               <ul>
                                    <li><h1 className="li_description">4 shafts exchange 150mm</h1></li>
                                    <li><h1 className="li_description">2 Shafts exchange 280mm</h1></li>
                               </ul></li>
                        </ul>
                        </div>
                    </div>
                    <center>
                        <h1 className="speedway-is">Our Mission</h1>
                    </center>
                    </div>
                    <div className="cd-fixed-bg cd-bg-4">
                    <center><div className="mission-header">
                        <h1>Satisfy Our Customers</h1>
                        <h1>and Continuously Improve</h1>
                        </div>
                     </center>
                     </div>
                    <div>
                        <Footer/>
                    </div>
                    <div className="copyright">
                        <center>
                            <span> &copy; 2016 <a href="http://emilywivell.com" target="_blank">emilywivell.com</a></span>
                        </center>
                    </div>
            </div>
        </div>
        );
    }
})

module.exports = TapeComponent;
