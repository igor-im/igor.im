const React = require('react');

const Component = React.createClass({
    render: function () {
        return (
            <html>
            <head>
                <title>Remount Example</title>
            </head>
            <body>
            <div id="mount-point"
                 dangerouslySetInnerHTML={{ __html: this.props.children }}>
            </div>
            <script id="app-state"
                    dangerouslySetInnerHTML={{ __html: this.props.state }}>
            </script>
            <script src="app.js"></script>
            </body>
            </html>
        );
    }
});

module.exports = Component;