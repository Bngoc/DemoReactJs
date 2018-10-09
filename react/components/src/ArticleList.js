import React from "react";
import Article from "./Article";

const ArticleList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map((article, index) => {
                return <Article
                    article={article}
                    action={props.articlesActions}
                    key={article.id}
                />
            })
            }
        </div>
    )
};

export default ArticleList;


