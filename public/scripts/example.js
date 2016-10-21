var PageContent = React.createClass({
  render(){
    return (
        <main className="site-content fade-in">
            <div id="grid-container">
                <Grid></Grid>
            </div>
        </main>
    )
  }
})

var Grid = React.createClass({
  
  render: function() {
    return (
      <Cell></Cell>
    );
  }
});

var Cell = React.createClass({
  
  render: function() {
    return (
      <div className="cell-container">
          <div className="number-container">
              <p className="number"></p>
          </div>
          <input className="cell" maxLength="1"></input>
      </div>
    );
  }
});


ReactDOM.render(
  <PageContent></PageContent>,
  // <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
