import React, { Component } from 'react';
import './footer.scss'

class Footer extends Component {
    state = {  }
    render() { 
        return (<div className="footer"> 
            <p class="footer-heart">
        Made with <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
      <img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"/></g-emoji> by RA
      </p>
      </div>);
    }
}
 
export default Footer;