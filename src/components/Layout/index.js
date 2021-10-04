import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
class LayoutComponent extends React.Component {
  render() {
    return (
      <div className={'kkae-container ' + this.props.className}>
        <Header />
        <Sidebar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

LayoutComponent.propTypes = {
  children: PropTypes.node,
};

export default LayoutComponent;
