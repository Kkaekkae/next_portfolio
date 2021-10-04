import React, { memo } from 'react';

import { compose } from 'redux';

import Layout from '../../components/Layout';
import menuList from '../../constants/layout/menu.contants';

class Home extends React.PureComponent {
  render() {
    return (
      <Layout className="kkae-main-back">
        <div>
          <div className="kkae-wrap-a">
            <h1 className="title">남동현</h1>
            <ul className="language-list">
              {menuList.map(item => {
                return (
                  <li className="language-item">
                    <h4>{item.title}</h4>
                    {item.children.map(row => {
                      return <p>{row.title}</p>;
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {};

export default compose(memo)(Home);
