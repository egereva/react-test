import './App.css';
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl_400x400.jpg'/>
      </header>
      <nav className='nav'>
          <div>
              <a href="">Profile</a>
          </div>
          <div>
              <a href="">Messages</a>
          </div>
          <div>
              <a href="">News</a>
          </div>
          <div>
              <a href="">Music</a>
          </div>
          <div>
              <a href="">Settings</a>
          </div>
      </nav>
      <div className='content'>
          <div>
              <img
                  src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
          </div>
          <div>
              {/*<img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' />*/}
              ava + description
          </div>
          <div>
              my posts
              <div>
                  new post
              </div>
              <div>
                  <div>
                      post 1
                  </div>
                  <div>
                      post 2
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
