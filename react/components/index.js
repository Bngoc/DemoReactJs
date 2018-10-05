import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => (
//     <h2> React </h2>
// );

class App extends React.Component {
    state = {
        an: 333
    };

    asyncFunc = (isCheck) => {
        // return Promise.resolve(23);
        return Promise.reject(24443);
        // return isCheck == true ? Promise.resolve(23) : Promise.reject(50);
    };

    async componentDidMount() {
        this.setState({
            an: await this.asyncFunc(false)
        });
    };

    render() {
        return (
            <h2> React = > {this.state.an} </h2>
        )
    }
}

export default App;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
