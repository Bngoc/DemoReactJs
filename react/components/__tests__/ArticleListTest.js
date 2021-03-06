import React from "react";
import ArticleList from "../src/ArticleList";
import renderer from "react-test-renderer";

describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'}
        },
        articlesActions: {
            lookupAuthor: jest.fn(()=>({})),
        }
    }

    it('renders correctly', () => {
        const element = renderer.create(
            <ArticleList
                {...testProps}
            />
            ).toJSON();

        console.log(element);

        expect(element.children.length).toBe(2);
        expect(element).toMatchSnapshot();
    });
});