
var Post  = React.createClass({
    getInitialState: function() {
        return {
            title: '[無言] 買票客人問我知不知道一個地方',
            content: '第一次發文，若排版錯誤請見諒。\n四月是電影院的爆炸月，這幾天整個戲院大概9成9都是要看玩命關頭的觀眾，對於我這個\n才上過五次班的菜鳥來說，幫助老鳥回答客人的廁所在哪？換餐在哪？網路換票在哪的簡\n單問題是我覺得上班最開心的時光……\n也是看見客人有多可愛我有多腦殘的時候……\n（傍晚人又開始爆炸了）\n我：網路訂票取票，這邊為您服務哦\n客人：請問你知道有一個地方嗎？\n我：嗯？什麼地方？\n客人：就一個地方只有我們知道啊…\n我：（心裡想說我們又不認識）嗯？你是說類似員工走道這種地方嗎？\n客人：屙不是的，小姐，它是一部片……\n我：哦哈哈哈哈，不好意思我們這邊目前沒有上映這部片哦…（內心無限次乾笑\n乾，我到底在腦幾點的\n回家查了一下還真有那個地方的存在\n到底！！！\nhttp://miupix.cc/pm-3ERVR0',
            comments: [{
                id: 0,
                account: "a5566",
                status: "推",
                comment: "XDDDDD",
                timestamp: "04/04 00:41"
            },{
                id: 1,
                account: "7788",
                status: "噓",
                comment: "WTF",
                timestamp: "04/04 00:46"
            },{
                id: 2,
                account: "ggyy",
                status: "->",
                comment: "不好笑",
                timestamp: "04/04 00:59"
            }]
        };
    },
    render: function() {
        return (
            <div className="container ui">
            <div className="ui raised segment">
                <div className="html ui top attached segment">
                <h1>{this.state.title}</h1>
                <div className="ui stacked segment">
                    {this.state.content}
                </div>
                <h4 className="ui horizontal header divider">
                Comments
                </h4>
                <CommentList data={this.state.comments} />
                </div>
            </div>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment, index) {
            return (
                <Comment account={comment.account}
                comment={comment.comment} timestamp={comment.timestamp} key={index}/>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="ui segment attached secondary">
                {this.props.comment} {this.props.timestamp}
            </div>
        );
    }
});

var reactComponent = React.render(
    <Post />,
    document.getElementById('content')
);
