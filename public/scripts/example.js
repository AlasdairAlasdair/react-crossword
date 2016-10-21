var PageContent = React.createClass({
  render(){
    const grid = {
            "cells" : [
                        {
                            "number" : 1
                        },
                        {
                            "number" : null
                        },
                        {
                            "number" : 2
                        },
                        {
                            "number" : null
                        }
                      ]
                };

    return (
      
      <main className="site-content fade-in">
        <Grid grid={grid}></Grid>
      </main>
    )
  }
})

var Grid = React.createClass({
  
  render: function() {
    
    return (
      <Cell cells={this.props.grid.cells}></Cell>
    );
  }
});

var Cell = React.createClass({
  
  render: function() {
    return (
      <div id="grid-container">
      
        {this.props.cells.map((cell) => (
            <div className="cell-container">
              <div className="number-container">
                  <p className="number">{cell.number}</p>
              </div>
              <input className="cell" maxLength="1"></input>
          </div>
        ))}

      </div>
    );
  }
});


ReactDOM.render(
  <PageContent></PageContent>,
  // <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
