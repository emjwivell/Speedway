var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var CopackagingComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="cd-fixed-bg cd-bg-5 header-img supporting-header">
                        <center className="tape-center">
                        <h1 className="header-h1 supporting-h1 co-header">Co Packaging</h1>
                        </center>
                        <center className="tape-center">
                        <p className="product-description-header"><em>Manufacturing and packaging shelf-ready<br/>*products* bringing convience and quality to your business.</em></p>
                        </center>
                        <div className="row">
                            <div className="supporting-description">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-co-column-1">
                                    <center className="supporting-center">
                                        <p className="supporting-product-description fade-in sup-context">Our experience, abilities, industry connections, and production quality make everything easier for our customers.</p>
                                        <p className="fade-in sup-context">_________________________________</p>
                                        <p className="supporting-product-description fade-in sup-context">Speedway Packaging and Distribution helps your business meet the growing demands of the future.  Does your campany have new or existing business with growing demand but having challenges expanding capacity?<br/>That's where we come in!</p>
                                     </center>
                                 </div>
                                 <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-co-column">
                                  <img className='fade-in sup-context co-sup-image' src="../dist/images/copackperson-blur-10-cropped.jpg"/>
                                </div>
                            </div>
                        </div>
                    <div className="action">
                        <div className="row">
                            <div className="col-md-6 bottom-tag no-top-padding">
                                <h2 className="project-managers">Let Speedway Packaging and Distribustion be the answer for all of your questions!</h2>
                            </div>
                            <div className="col-md-6 call-button">
                                <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call<br/><small>(864)271-1149</small></button></a>
                            </div>
                        </div>
                    </div>

                    <div className="left-10">
                        <Footer/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
})

module.exports = CopackagingComponent;
