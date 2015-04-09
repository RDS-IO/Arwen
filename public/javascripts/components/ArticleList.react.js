var ArticleInfo = React.createClass({
    render: function() {
        return (
            <div className="ui tertiary inverted teal segment">
            <a className="ui red ribbon label">爆</a>
            <div className="ui page grid">
                <div className="two wide column">
                <div className="ui basic horizontal segment">

                    <p>{this.props.shortTitle}</p>
                </div>
                </div>
                <div className="twelve wide column">
                <div className="ui basic horizontal segment">
                    <p>{this.props.longTitle}</p>
                </div>
                </div>
                <div className="two wide column">
                <div className="ui basic horizontal segment">
                    <p>{this.props.author}</p>
                </div>
                </div>
            </div>
            </div>
        )
    }
});

var ArticleList = React.createClass({
    getInitialState: function() {
        return {
            articleInfos: [{
                id: 0,
                shortTitle: "徵才",
                longTitle: "知意圖公司徵才",
                author: "etutest",
                timestamp: "04/04 00:41"
            },{
                id: 1,
                shortTitle: "分享",
                longTitle: "React 真好玩啊 分享心得",
                author: "ggyy",
                timestamp: "04/04 00:46"
            },{
                id: 2,
                shortTitle: "租屋",
                longTitle: "大台北租屋心得分享",
                author: "sumade56",
                timestamp: "04/04 00:59"
            }]
        };
    },
    render: function() {
        var articleInfoNodes = this.state.articleInfos.map(function(articleInfo, index) {
            return (
                <ArticleInfo shortTitle={articleInfo.shortTitle} longTitle={articleInfo.longTitle}
                author={articleInfo.author} timestamp={articleInfo.timestamp} key={index}/>
            );
        });
        return (
            <div className="ui container">
                {articleInfoNodes}
            </div>
        );
    }
});

var reactComponent = React.render(
    <ArticleList />,
    document.getElementById('content')
);
