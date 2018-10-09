import React from "react";

const Article = (props) => {
    var {article, action} = props;
    const author = action.lookupAuthor(article.authorId);
    const dateDisplay = (dateString) => {
        return new Date(dateString).toDateString();
    };

    return (
        <div>
            <div>
                <div>{article.title}</div>
                <div>{dateDisplay(article.date)}</div>
                <div>{article.body}</div>
            </div>
            <div>
                <div>{author.firstName}</div>
            </div>
        </div>
    );
};

export default Article;
