import React from 'react';
import Postal from 'postal';
import Icons from './../icons';

// {id: , active: , title: , children:[]}

const FolderOpen = Icons['folder-open'];
const FolderClosed = Icons['folder-closed'];

class ActiveOutlineItem extends React.Component{
  constructor(){
    super();
    this.state = {
      collapsed: false,
      collapsedIcon: <FolderOpen />
    };
  }


  collapse(e) {
    this.setState({
      collapsed: !this.state.collapsed,
      collapsedIcon: this.state.collapsed ? <FolderOpen /> : <FolderClosed />
    });

    e.preventDefault();
  }

  render() {
    const container = this.props.children.length > 0 && !this.state.collapsed ? <OutlineContainer children={this.props.children} /> : '';
    const collapser = this.props.children.length > 0 ? <a className="toggle" href='#' onClick={this.collapse}>{this.state.collapsedIcon}</a> : '';
    return (
      <li key={this.props.id}>
        {collapser}
        <b>{this.props.title}</b>
        {container}
      </li>
    );
  }
}

class OutlineItem extends React.Component{
  constructor(){
    super();
    this.state = {
      collapsed: false,
      collapsedIcon: <FolderOpen />
    };
  }


  collapse(e) {
    this.setState({
      collapsed: !this.state.collapsed,
      collapsedIcon: this.state.collapsed ? <FolderOpen /> : <FolderClosed />
    });

    e.preventDefault();
  }


  render() {
    const onclick = e => {
      Postal.publish({
        channel: 'editor',
        topic: 'select-holder',
        data: {holder: this.props.id}
      });

      e.preventDefault();
    }

    const id = 'outline-node-' + this.props.id;
    const container = this.props.children.length > 0 && !this.state.collapsed ? <OutlineContainer children={this.props.children} /> : '';
    const collapser = this.props.children.length > 0 ? <a className="toggle" href='#' onClick={this.collapse}>{this.state.collapsedIcon}</a> : '';

    return (
      <li key={this.props.id}>
        {collapser}
        <a href="#" id={id} onClick={onclick}>{this.props.title}</a>
        {container}
      </li>
    );
  }
}

class OutlineContainer extends React.Component{
  render() {
    return (
      <ul className="outline-container">
      {
        this.props.children.map(item => {
          return item.active ?
          <ActiveOutlineItem key={item.id} title={item.title} children={item.children}/> :
          <OutlineItem key={item.id} title={item.title} id={item.id} children={item.children} />
        })
      }
      </ul>
    )
  }
}

module.exports = function({outline}){
  return (
    <div className="spec-outline">
      <OutlineContainer children={outline.children} />
    </div>
  );
}

