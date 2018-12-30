// Contacts.js
import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var city = this.props.data.adress.city;
      var country = this.props.data.adress.country;
      var zip = this.props.data.adress.zip;
      var phone = this.props.data.phone;
    }
    return (
      <section id="contact">

             <div className="row section-head">

                <div className="two columns header-col">

                   <h1><span>Get In Touch.</span></h1>

                </div>

                <div className="ten columns">

                      <p className="lead">Если у Вас возникли какие-либо вопросы, Вы можете написать мне на почту, позвонить или связаться со мной любым удобным для Вас способом.
                      </p>

                </div>

             </div>

             <div className="row">

                <div className="eight columns">
                   <form action="" method="post" id="contactForm" name="contactForm">
    					<fieldset>

                      <div>
    						   <label htmlFor="contactName">Имя<span className="required">*</span></label>
    						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" />
                      </div>

                      <div>
    						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
    						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                      </div>

                      <div>
    						   <label htmlFor="contactSubject">Тема</label>
    						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                      </div>

                      <div>
                         <label htmlFor="contactMessage">Содержание вопроса <span className="required">*</span></label>
                         <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                      </div>

                      <div>
                         <button className="submit">Отправить</button>
                         <span id="image-loader">
                            <img alt="" src="images/loader.gif"/>
                         </span>
                      </div>

    					</fieldset>
    				   </form>
                   <div id="message-warning"> Ошибка отправки ообщения!</div>
    				   <div id="message-success">
                      <i className="fa fa-check"></i>Ваше письмо было отправлено, спасибо!<br />
    				   </div>

                </div>


                <aside className="four columns footer-widgets">

                   <div className="widget widget_contact">
    					   <h4>{name}</h4>
    					   <p className="address">
    						   {occupation} <br />
    						   {zip}  <br />
    						   {city} {country} <br />
    						   <span>{phone}</span>
    						   <span></span></p>

    				   </div>

                   <div className="widget widget_tweets">

                      <h4 className="widget-title">Полезные ссылки</h4>

                      <ul id="twitter">
                            <span>
                            Изучение JS:
                            <a href="https://learn.javascript.ru/"> https://learn.javascript.ru/</a>
                            </span>
                            <span>
                            Изучение React:
                            <a href="https://reactjs.org/"> https://reactjs.org/</a>
                            </span>
                      </ul>

    		         </div>
                </aside>
          </div>
       </section>
    );
  }
}

export default Contacts;
