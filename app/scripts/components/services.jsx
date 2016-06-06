var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Services = React.createClass({
    render: function(){
        return (
            <div className="row">

                <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-t">
                    <span id="surround">
                    <a href="#tape">
                    <div className="product-expand">
                    <span id="initial">
                       <h1 className="product-header">Tape</h1>
                       <p className="product-description">All types pressure and non sensitive materials on 3 inch cores.  Rewinders.  Turn salvage product into money!</p>
                       <img src="images/tape-icon-white.png"/>
                   </span>
                   <span id="onhover">
                       <h1 className="product-header">Tape</h1>
                       <p className="product-description">All types pressure and non sensitive materials on 3 inch cores.  Rewinders.  Turn salvage product into money!</p>
                       <img src="images/tape-icon.png"/>
                       </span>
                    </div>
                    </a>
                </span>
                </div>

                <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-o">
               <a href="#">
              <div className="product-expand">
              <h1 className="product-header">Other</h1>
              <p className="product-description">sfgbgfb fsgg srdgsdgf sfgsgf sdfsdfg sfbs sgbsgbs  into money!</p>
              <span><h1>O</h1></span>
              </div>
          </a>
           </div>
   <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-b">
       <a href="#bulk">
           <div className="product-expand">
           <h1 className="product-header">Plastic Dry Bulk Services</h1>
           <p className="product-description">Railcar Box Offs, Sea Container Offloading, etc.</p>
               <span><h1>PDBS</h1></span>
           </div>
       </a>
   </div>
   <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-i">
       <a href="#industrial">
           <div className="product-expand">
           <h1 className="product-header">Light Industrial</h1>
           <p className="product-description">This is a description of the services provided</p>
           <span><h1>I</h1></span>
           </div>
       </a>
   </div>
   <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-c">
       <a href="#copackaging">
           <div className="product-expand">
           <h1 className="product-header">Co Packaging</h1>
           <p className="product-description">This is a description of the services provided</p>
           <span><h1>C</h1></span>
           </div>
       </a>
   </div>
   <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-3">
       <a href="#pl">
           <div className="product-expand">
           <h1 className="product-header">3PL</h1>
           <p className="product-description">This is a description of the services provided under this header</p>
           <span><h1>3</h1></span>
           </div>
       </a>
   </div>
</div>

);
}
})

module.exports = Services;
