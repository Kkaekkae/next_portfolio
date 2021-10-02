import React from 'react';
import PropTypes from 'prop-types';
import Sidebar   from 'components/Sidebar';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
class LayoutComponent extends React.Component {
  render(){
    return (
      <div className="kkae-container">
        
            
              <Header />
              
                {this.props.children}
              <Sidebar />  
          <Banner />
        <Footer />
      </div>
    );
  } 
}

LayoutComponent.propTypes = {
  children: PropTypes.node,
};

export default LayoutComponent;
