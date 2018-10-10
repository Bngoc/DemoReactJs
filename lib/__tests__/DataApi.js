import DataApi from '../stage-api/';
import {data} from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
    it('exposs articles as an object', () => {
        const article = api.getArticles();
        const articleID = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        // Result Pass
        expect(article).hasOwnProperty(articleID);
        expect(article[articleID].title).toBe(articleTitle)
    });

    it('exposs articles as an object', () => {
        const author = api.getAuthors();
        const authorID = data.authors[0].id;
        const authorTitle = data.authors[0].firstName;

        // Result Pass
        expect(author).hasOwnProperty(authorID);
        expect(author[authorID].firstName).toBe(authorTitle)
    });
});