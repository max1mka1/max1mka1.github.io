import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
      console.log(this.props.data);
      var name = this.props.data.name;
      //var occupation = this.props.data.occupation;
      var image = "%PUBLIC_URL%/images/profilepic.jpg";
      var bio = this.props.data.bio;
      var city = this.props.data.adress.city;
      var country = this.props.data.adress.country;
      var zip = this.props.data.adress.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumedownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
          <img className="profile-pic"  src={image} alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Подробнее</h2>
                <p className="address">
     						  <span>{name}</span><br />
     						  <span>
     						  {city} {country}, {zip}
                  </span><br />
     						  <span>{phone}</span><br />
                  <span>{email}</span>
   					    </p>
              </div>
              <div className="columns download">
                <p><a href={resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
