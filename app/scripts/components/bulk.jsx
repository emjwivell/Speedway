var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var BulkComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="cd-fixed-bg cd-bg-bulk header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 bulk-header">Plastic Dry Bulk Services</h1>
                            <center className="tape-center">
                                <p className="product-description-header"><em>Drive your business forward with each and<br/>every shipment delivering your product safely and efficiently.</em></p>
                            </center>
                        <div className="row">
                            <div className="supporting-description">
                                <div className="row left-10">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-left-column">
                                        <center className="supporting-center">
                                            <p className="supporting-product-description fade-in sup-context">For years Speedway Packaging and Distribution has provided plastic dry bulk services for customers and our continued goal is to ensure our customers have the best possible service.</p>
                                            <p className="fade-in sup-context">_________________________________</p>
                                            <h3 className="bold fade-in sup-context">Some Of Our Specifics</h3>
                                            <p className="extra-letter-space fade-in sup-context"> Railcar Box Offs, Sea Container Offloading, Dry Bulk Container Service, Super Sacks or Bags to Tankers, Silo to Tankers Service, and Warehouse Storage.</p>
                                         </center>
                                     </div>
                                       <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <img className='fade-in sup-context sup-image' src="../dist/images/drybulk-cropped.jpg"/>
                                      </div>
                                </div>
                            </div>
                          </div>
                          <div className="action">
                          <div className="row">
                              <div className="col-md-6 call-button">
                                  <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call!</button></a>
                              </div>
                              <div className="col-md-6 bottom-tag">
                                  Let Speedway Packaging and Distribustion be the answer for all of your questions!
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

module.exports = BulkComponent;
