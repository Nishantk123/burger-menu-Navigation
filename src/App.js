import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      homeMenu:true,
      burgerMenu:false,
      vegBurgerMenu:false,
      hamburgerMenu:false,
      cheeseburgerMenu:false,
      priceMenu:false
    }
  };
  componentWillMount() {
    this.hydrateStateWithLocalStorage();
  }
  // for fetching the data for local storage and setState
  hydrateStateWithLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  };
  // For pusing the data in local storage
  saveStateToLocalStorage = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  // For handle out side click
  handleBodyClick = (event)  =>{
     if(event.target.id!=("hamburger-menu") ){
      var openlist = document.getElementById('ham-navigation');
      openlist.classList.remove("on");
      var button = document.getElementById('hamburger-menu'),
      span = button.getElementsByTagName('span')[0];
      span.classList.remove('hamburger-menu-button-close'); 
    }
  }
  // for button hadle 
  buttonHandler = (e) => {
      var button = document.getElementById('hamburger-menu'),
      span = button.getElementsByTagName('span')[0];
      span.classList.toggle('hamburger-menu-button-close');
      var openlist = document.getElementById('ham-navigation');
      if(openlist.classList&&openlist.classList.value=="ham-menu on"){
        openlist.classList.remove("on");
      }
      else{
        openlist.classList.add("on");
      }
  };
  // for setting state for home menu click
  homePageHandler = () => {
    this.setState({homeMenu:true, burgerMenu:false, vegBurgerMenu:false, hamburgerMenu:false, cheeseburgerMenu:false,  priceMenu:false}, () => this.saveStateToLocalStorage())
 
  };
  // for setting state for burger menu click
  burgerPageHandler = () => {
    this.setState({homeMenu:false, burgerMenu:true, vegBurgerMenu:false, hamburgerMenu:false, cheeseburgerMenu:false,  priceMenu:false}, () => this.saveStateToLocalStorage())
  };
  // for setting state for veg burger click
  vegBurgerHandler = () => {
    this.setState({homeMenu:false, burgerMenu:false, vegBurgerMenu:true, hamburgerMenu:false, cheeseburgerMenu:false,  priceMenu:false}, () => this.saveStateToLocalStorage())  
  };
  // for setting state for ham burger click
  hamBurgerHandler = () => {
    this.setState({homeMenu:false, burgerMenu:false, vegBurgerMenu:false, hamburgerMenu:true, cheeseburgerMenu:false,  priceMenu:false}, () => this.saveStateToLocalStorage())
  };
  // for setting state for cheese burger click
  cheeseBurgerHandler = () => {
    this.setState({homeMenu:false, burgerMenu:false, vegBurgerMenu:false, hamburgerMenu:false, cheeseburgerMenu:true,  priceMenu:false}, () => this.saveStateToLocalStorage())
  };
  // for setting state for price menu click
  priceHandler = () => {
    this.setState({homeMenu:false, burgerMenu:false, vegBurgerMenu:false, hamburgerMenu:false, cheeseburgerMenu:false,  priceMenu:true}, () => this.saveStateToLocalStorage())
  };
  // render
  render() {
    // for showing the text message for all menu
    var pageData = "";
    if(this.state.homeMenu){
      pageData="This is home page";
    }
    else if(this.state.burgerMenu){
      pageData = "This is burger page";
    }
    else if(this.state.vegBurgerMenu){
      pageData = "This is veg-burger page";
    }
    else if(this.state.hamburgerMenu){
      pageData = "This is ham-burger page";
    }
    else if(this.state.cheeseburgerMenu){
      pageData = "This is cheese-burger page";
    }
    else if(this.state.priceMenu){
      pageData = "This is priceMenu page";
    }
    // return
    return (
      <div className="App"  
      style={{height: window.innerHeight}}
      onClick = {(event) => this.handleBodyClick(event)}
      >
        <button onClick={(e) => this.buttonHandler(e)}  
            id="hamburger-menu" data-toggle="ham-navigation" class="hamburger-menu-button">
          <span class="hamburger-menu-button-open">Menu</span>
        </button>
          <nav  class="ham-menu"  id="ham-navigation">
            <ul class="menu"  id="menu-navigation">
              <li onClick={() => this.homePageHandler()} className={this.state.homeMenu?"active ":""}><a href="#">Home</a></li>
              <li onClick={() => this.burgerPageHandler()} className={this.state.burgerMenu?"active ":""}><a href="#">Burger</a></li>
              <li onClick={() => this.vegBurgerHandler()} className={this.state.vegBurgerMenu?"active ":""}><a href="#">VegBurger</a></li>
              <li onClick={() => this.hamBurgerHandler()} className={this.state.hamburgerMenu?"active ":""}><a href="#">Hamburger</a></li>
              <li onClick={() => this.cheeseBurgerHandler()} className={this.state.cheeseburgerMenu?"active ":""}><a href="#">Cheeseburger</a></li>
              <li onClick={() => this.priceHandler()} className={this.state.priceMenu?"active ":""}><a href="#">Price</a></li>
            </ul>
          </nav>
            <div className="page-detail">
            {pageData}
            </div>
          </div>
    );
  }
}

export default App;
