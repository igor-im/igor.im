const React = require('react');
import { App } from './App.jsx'

export const PreRender = React.createClass({
    render: function () {
        return (
            <html>
            <head>
                <title>Remount Example</title>
            </head>
            <body>
            <div id="mount-point"><App />
            </div>
            <script id="app-state">
            </script>
            <script src="app.js"></script>
            </body>
            </html>
        );
    }
});

