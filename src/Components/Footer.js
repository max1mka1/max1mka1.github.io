// Footer.js
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    if(this.props.data){
      console.log(this.props.data);
    }
    return (
      <footer>
          <div className="row">
             <div className="twelve columns">
                <ul className="social-links">
                   <li><a href="https://www.facebook.com/tingaevmi"><i className="fa fa-facebook"></i></a></li>
                   <li><a href="https://twitter.com/maxinstellar/"><i className="fa fa-twitter"></i></a></li>
                   <li><a href="https://plus.google.com/u/0/106214854252929724411"><i className="fa fa-google-plus"></i></a></li>
                   <li><a href="https://vk.com/tingaevmi"><i className="fa fa-vk"></i></a></li>
                   <li><a href="https://www.instagram.com/maxinstellar/"><i className="fa fa-instagram"></i></a></li>
                   <li><a href="https://github.com/max1mka1/"><i className="fa fa-github"></i></a></li>
                   <li><a href="skype:maxinstellar?userinfo/"><i className="fa fa-skype"></i></a></li>
                </ul>
                <ul className="copyright">
                   <li>&copy; Copyright 2019 Максим Тиньгаев</li>
                   <li>Дизайн сайта <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                </ul>
             </div>
             <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
          </div>
       </footer>
    );
  }
}

export default Footer;
