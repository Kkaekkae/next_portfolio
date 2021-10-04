import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
export class Spb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reference: [
        {
          title: '',
        },
      ],
    };
  }

  render() {
    return (
      <Layout>
        <div className="kkae-wrap-a">
          <h1 className="title">Spring Boot</h1>
          <div className="content">
            <p>토큰 ( JWT , Bearer ) 을 이용한 인증/인가 처리 MongoDB , Mysql 연동 Log4j Oauth2</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Spb;
