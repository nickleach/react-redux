import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux';
import getRouter from '../routes'
import DevTools from '../components/devTools';
import { Router } from 'react-router';

class Root extends Component {
    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <div>
                    {getRouter(history)}
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default Root;
