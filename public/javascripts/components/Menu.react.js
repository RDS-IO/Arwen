var Menu = React.createClass({
    render: function(){
        return (
            <div className="ui secondary pointing menu">
                <a className="active item">
                    <i className="home icon"></i> 熱門文章
                </a>
                <a className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="搜尋看板..."/>
                        <i className="search link icon"></i>
                    </div>
                </a>
                <a className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="搜尋使用者..."/>
                        <i className="search link icon"></i>
                    </div>
                </a>
            </div>
        );
    }
});


var reactComponent = React.render(
    <Menu />,
    document.getElementById('content')
);
