import React from 'react';
import Particles from 'react-particles-js';

var param = 300;
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
          "direction": "left",
          "speed": 0.1
      },
      "size": {
          "value": 3
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

var paragraph = <p> You vexed shy mirth now noise. Talked him people 
  valley add use her depend letter. Allowance too applauded now way 
  something recommend. Mrs age men and trees jokes fancy. Gay pretended 
  engrossed eagerness continued ten. Admitting day him contained 
  unfeeling attention mrs out. 
  <br />
  Extremity direction existence as dashwoods do up. Securing marianne 
  led welcomed offended but offering six raptures. Conveying concluded 
  newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. 
  Occasional continuing possession we insensible an sentiments as is. 
  Law but reasonably motionless principles she. Has six worse downs 
  far blush rooms above stood.
</p>;

  class App extends React.Component {
  state = {
    img: "avatar.jpg"
  }
  render() {
    return(
      <div>
        <img alt="profile pic" src={this.state.img} 
        onMouseOver={()=>{this.setState({img: "icon.png"})}} 
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
          {paragraph}
        </div>
        <Particles params={parameters}/>
      </div>
    );
  }
}
export default App;
