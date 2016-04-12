import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { makeFunOfHim } from '../actions/crazyPerson';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { crazyPerson, onclick } = this.props;
        return (
            <div>
                <h1>Crazy People!!!</h1>
                <div>Current State: {crazyPerson.status}</div>
                <button onClick={onclick}>Click Me!</button>
            </div>
        );
    }
}

App.propTypes = {
    crazyPerson: PropTypes.object.isRequired,
    onclick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        crazyPerson: state.crazyPerson,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onclick: () => dispatch(makeFunOfHim()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
