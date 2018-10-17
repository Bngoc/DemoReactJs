import React from "react";
import PropTypes from "prop-types";

const dateDisplay = (dateString) => {
    return new Date(dateString).toDateString();
};

const Article = (props) => {
    var {article, store} = props;
    const author = store.lookupAuthor(article.authorId);

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

Article.PropTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired
    })
};

export default Article;
