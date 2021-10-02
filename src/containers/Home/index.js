import React, { memo } from 'react';

import { compose } from 'redux';

import Layout from 'components/Layout';

class Home extends React.PureComponent {

  render(){
    return (
      <Layout>
      </Layout>
    );
  }
}

Home.propTypes = {
};

export default compose(memo)(Home);
