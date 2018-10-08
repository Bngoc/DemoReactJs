import React from "react";

const Article = (props) => {
    var {article1, author1} = props;
    return (
        <div>
            <div>
                <div>{article1.title}</div>
                <div>{article1.date}</div>
                <div>{article1.body}</div>
            </div>
            <div>
                <div>{author1.firstName}</div>
            </div>
        </div>
    );
};

export default Article;
