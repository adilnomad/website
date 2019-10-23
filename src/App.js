import React from 'react';
import Particles from 'react-particles-js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mess">
          Updating ... 
        </h1>
      </div>
    );
  }

}

export default App;

/*

import React from 'react';
import Particles from 'react-particles-js';

var param = 500;
var parameters = {
  "particles": {
      "number": {
          "value": 15,
          "density": {
              "enable": true,
              "value_area": param
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.1
      },
      "move": {
          "direction": "none",
          "speed": 0.5
      },
      "size": {
          "value": 2
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.5
          }
      }
  },
  "interactivity": {
      "events": {
          "onhover" : {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "distance": 50
          },
          "grab": {
            "distance": 150,
            "line_linked": {
              "opacity": 0.3
            }
          }
      }
  },
  "retina_detect": true
}

var paragraph = <p>
  My name is Adil and I'm a software engineer. <br/><br/>
  As of recently, I have graduated from the University of South Florida with
  the CS degree where I gained a solid foundation in algorithms and data structures. <br/><br/>
</p>;

  class App extends React.Component {
  state = {
    img: "avatar.jpg"
  }
  render() {
    return(
      <div>
        <img alt="profile pic" src={this.state.img} 
        onMouseOver={()=>{this.setState({img: "avatarPup.png"})}} 
        onMouseOut={() => {this.setState({img:"avatar.jpg"})}} className="profilePic"/>
        <a className="git" rel="noopener noreferrer" href="https://github.com/adilnomad" target="_blank">
        <img alt="github link" src="https://cdn0.iconfinder.com/data/icons/social-line-transparent/50/Github-line-transparent-512.png" className="git"/>
        </a>
        <a className="linkedin" rel="noopener noreferrer" href="https://www.linkedin.com/in/adil-sakenov/" target="_blank">
        <img alt="linkedin link" 
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="git"/>
        </a>
        <a  href="resume.pdf" rel="noopener noreferrer" target="_blank">
        <img alt="resume icon" className="button"
        src="https://cdn2.iconfinder.com/data/icons/business-management-and-teamwork-filled-color/300/163251747Untitled-3-512.png"/>
        </a>
        <div className="message">
          <h1>Hello!<span role="img">🙂</span> </h1>
          <p className="mess">{paragraph}</p>
        </div>
        <Particles params={parameters}/>
      </div>
    );
  }
}
export default App;

*/