import React from 'react';

const MyComponent = () => {
  return (
    <>
    
    <header role="banner" className="ui-section-header">
      <div className="ui-layout-container">
        <div className="ui-section-header__layout ui-layout-flex">
            <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                <div class="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Profile Settings</a>
                </div>
            </div>
        </div>
      </div>
    </header>
    <main role="main">
      <section className="ui-section-content">
        <div className="ui-layout-container">
          {/* <!-- COPYWRITING --> */}
          <div className="ui-layout-column-6 ui-layout-column-center">
            <h1>CircleStack</h1>
            <p className="ui-text-intro">A social circle with friend or family to create and maintain financial goals</p>
            {/* <!-- CTA --> */}
            <div className="ui-component-cta ui-layout-flex">
              <p className="ui-text-note"><small>Social Group Goals</small></p>
            </div>
          </div>
          
          
          {/* <!-- FEATURE --> */}
          <div className="ui-section-content--feature ui-layout-grid ui-layout-grid-3">
            <div>
               <a href = "creategoal.html"> <img src="https://res.cloudinary.com/uisual/image/upload/assets/icons/bookmark.svg" alt="#" class="ui-section-content--icon" /> </a>
                <h3>Create New Social Circle</h3>
                <p>Create a new goal with friends or family, sent goal limit, send the consent form, and begin! </p>
              </div>
            <div>
                <img src="https://res.cloudinary.com/uisual/image/upload/assets/icons/bookmark.svg" alt="#" class="ui-section-content--icon" />
                <h3>John, Amy, and Jack</h3>
                <p>Goal: $500.00 <br /> 80% complete</p>
              </div>
            <div>
              <img src="https://res.cloudinary.com/uisual/image/upload/assets/icons/bookmark.svg" alt="#" class="ui-section-content--icon" />
              <h3>Dungeons and Dragon Setup</h3>
              <p>Goal: $225.00 <br /> 23% complete</p>
            </div>
            <div>
              <img src="https://res.cloudinary.com/uisual/image/upload/assets/icons/chat.svg" alt="#" class="ui-section-content--icon" />
              <h3>Puerto Rico Trip!!</h3>
              <p>Goal: $4,200.00 <br /> 64% complete</p>
            </div>
            <div>
              <img src="https://res.cloudinary.com/uisual/image/upload/assets/icons/design.svg" alt="#" class="ui-section-content--icon" />
              <h3> HoneyMoon </h3>
              <p>Goal: $900.00 <br /> 74% complete</p>
            </div>
            
          </div>
        </div>
      </section>
      


    </main>
    <footer role="contentinfo" class="ui-section-footer">
      <div className="ui-layout-container">
        <div className="ui-section-footer__layout ui-layout-flex">
          {/* <!-- COPYRIGHT --> */}
          <p className="ui-section-footer--copyright ui-text-note"><small>&copy; CircleStack</small></p>
          {/* <!-- MENU --> */}
          <a href="#" role="link" aria-label="#" class="ui-text-note"><small>Features</small></a>
          <a href="#" role="link" aria-label="#" class="ui-text-note"><small>Help</small></a>
          <a href="#" role="link" aria-label="#" class="ui-text-note"><small>Terms</small></a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default MyComponent;
