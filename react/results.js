var ResultInstance = React.createClass({
    render: function() {
      return(
        <li>
          <h1>item</h1>
        </li>
      );
    }
});

var ResultList = React.createClass({
  render: function() {
    return (
      <div className="resultsList">
        <ul>
          <ResultInstance />
        </ul>
      </div>
    );
  }
});

var ReTest = React.createClass({
  render: function() {
    return (
      <div className="testReact">
        <h1>Hey There</h1>
      </div>
    )
  }
});
