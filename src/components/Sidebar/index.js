import React from 'react';
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Menu from './Menu';
import MenuInfo from '../../constants/layout/menu.contants';
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuClick: false,
    };
  }

  toggleMenu() {
    this.setState({ isMenuClick: !this.state.isMenuClick });
  }

  render() {
    const { isMenuClick } = this.state;
    return (
      <div className="kkae-sidebar" style={{ left: isMenuClick ? 0 : -200 }}>
        <div className="sidebar">
          <Menu data={MenuInfo} />
        </div>
        <div className="menu-wrap">
          <buttton className="menu-button" onClick={() => this.toggleMenu()}>
            <div className="menu-icon">
              {isMenuClick ? <ArrowLeftOutlined style={{ fontSize: 14 }} /> : <MenuOutlined style={{ fontSize: 14 }} />}
            </div>
          </buttton>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
