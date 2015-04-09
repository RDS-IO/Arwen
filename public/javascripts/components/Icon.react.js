var Icon = React.createClass({
    render: function() {
        return (
            <h1 className="ui header" >
                <i className="massive comments icon"></i>
                    <div className="content">
                        PTT opinion
                    </div>
            </h1>
        );
    }
});

var reactComponent = React.render(
    <Icon />,
    document.getElementById('icon')
);
