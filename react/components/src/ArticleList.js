import React from "react";
import Article from "./Article";

const ArticleList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map((article, index) => {
                return <Article
                    article1={article}
                    author1={props.authors[article.authorId]}
                    key={article.id}
                />
            })
            }
        </div>
    )
};

export default ArticleList;


