import React from "react";
import axios from "axios";
import DataApi from "../../lib/stage-api";
// import {data} from '../../lib/testData';
import ArticleList from './src/ArticleList';

const api = new DataApi(data);

class App extends React.Component {
    state = {
        articles: {},
        authors: {}
    };

    async componentDidMount() {
        const resp = await axios.get('/data');
        const api = new DataApi(resp.data);
        this.setState = (() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }));
    }
    articlesActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId]
    };

    asyncFunc = (isCheck) => {
        return Promise.resolve(234);
        // return Promise.reject(24443);
        // return isCheck == true ? Promise.resolve(23) : Promise.reject(50);
    };

    // async componentDidMount() {
    //     this.setState({
    //         an: await this.asyncFunc(false)
    //     });
    // };


    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articlesActions={this.articlesActions}
            />
        )
    }
}

export default App;