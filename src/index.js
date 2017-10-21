var React      = require('react');
var ReactDOM   = require('react-dom');
var Show       = require('./Show');
var shows      = require('./shows');


ReactDOM.render(
 <Show shows={shows} showIndex={1} />,
 document.getElementById('root')
);
