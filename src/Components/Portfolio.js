import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
       console.log(this.props.data);
      var portfolios = this.props.data.map(function(port) {
        var image = "images/portfolio/"+port.image;
        //var name = this.props.data.school;
        return  <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={port.modal} title={port.title}>
                      <img alt={port.title} src={image} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{port.category}</h5>
                          <p>{port.tags}</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus"></i></div>
                    </a>
                  </div>
                </div>
      });
    }
    return (
      <section id="portfolio">
            <div className="row">
               <div className="twelve columns collapsed">
                  <h1></h1>
                  <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {}
                  </div>
               </div>
            </div>
         </section>
    );
  }
}

export default Portfolio;
