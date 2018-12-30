import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import Header from './Components/Header';
//import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      myData: {}
    }
  }

  getMyData(){
    $.ajax({
      url: "./mydata.json",  //htttp://localhost:3000/mydata.json
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({myData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getMyData();
  }

  render() {
    console.log(this.state.myData);
    return (
      <div className="App">
        <Header data={this.state.myData.main}/>
        <About data={this.state.myData.main}/>
        <Resume data={this.state.myData.resume}/>
        <Testimonials data={this.state.myData.testimonials}/>
        <Contacts data={this.state.myData.main}/>
        <Footer />
      </div>
    );
  }
}

export default App;
