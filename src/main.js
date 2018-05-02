import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import Configure from './components/Configure';
import Construct from './components/Construct';
import { getOptionsAction } from './store/actions/optionsActions'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = props;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.options);
  }

  componentDidMount() {
    // initial pull of api object
    this.props.getOptions();
  }

  // operator(route) {
  //   const { subscribers } = this.state;
  //   switch(route) {
  //     case 'construct':
  //       return <Construct subscribers={subscribers}/>;
  //     case 'configure':
  //       return <Configure subscribers={subscribers}/>;
  //     default:
  //       return <Construct subscribers={subscribers}/>;
  //   }
  // }

  render() {
    const { options } = this.state;
    return (
      <section className="main-container">
        {/* <Header /> */}
        {/* this.operator(this.props.ui.routeVisible) */}
        <Construct />
        <Configure options={options}/>
      </section>
    )
  }
};

const mapStateToProps = ({ ui, options }) => ({
  ui,
  options
})

const mapDispatchToProps = dispatch => ({
  getOptions: () => dispatch(getOptionsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
