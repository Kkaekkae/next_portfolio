import { Tree, Input } from 'antd';
import React from 'react';
import { withRouter } from 'next/router';
class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      oldData: null,
    };
  }

  componentDidMount() {
    this.generatorMenuData(this.props.data);
  }

  componentDidUpdate() {
    if (JSON.stringify(this.props.data) != JSON.stringify(this.state.oldData)) {
      this.setState({
        oldData: this.props.data,
      });
      this.generatorMenuData(this.props.data);
    }
  }

  generatorMenuData(data) {
    const updateData = data.map(item => {
      return this.recrusiveMenuData(item);
    });

    this.setState({
      data: updateData,
    });
  }

  recrusiveMenuData(item) {
    if (!item.children) {
      return this.renderRouter(item);
    } else {
      item.children = item.children.map(row => {
        return this.recrusiveMenuData(row);
      });
      return item;
    }
  }

  renderRouter(item) {
    return {
      title: <div onClick={() => this.movePage(item)}>{item.title}</div>,
      key: item.key,
    };
  }

  movePage(item) {
    this.props.router.push(item.key);
  }

  render() {
    return (
      <div>
        <Tree height={'calc(100vh - 64px)'} treeData={this.state.data} />
      </div>
    );
  }
}

export default withRouter(Menu);
