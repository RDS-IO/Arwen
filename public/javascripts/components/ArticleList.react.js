var ArticleInfo = React.createClass({
    render: function() {
        return (
            <div className="ui page grid">
                <div className="one wide column">
                <div className="basic horizontal segment">
                    <p>{this.props.titleShort}</p>
                </div>
                </div>
                <div className="thirteen wide column">
                <div className="basic horizontal segment">
                    <p>{this.props.titleLong}</p>
                </div>
                </div>
                <div className="two wide column">
                <div className="basic horizontal segment">
                    <p>{this.props.author}</p>
                </div>
                </div>
            </div>
        )
    }
});

var ArticleList = React.createClass({
    render: function() {
        return (
            <ArticleInfo titleShort="心情" titleLong="好想好想好想..." author="sunsimon"/>
        );
    }
});

var reactComponent = React.render(
    <ArticleList />,
    document.getElementById('content')
);
