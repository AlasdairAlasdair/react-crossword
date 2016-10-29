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
        <GridContainer grid={grid}></GridContainer>
      </main>
    )
  }
})

var GridContainer = React.createClass({
  
  render: function() {
    
    return (
      <div id="grid-container">
          <Grid cells={this.props.grid.cells}></Grid>
      </div>
    );
  }
});

var Grid = React.createClass({
  
  render: function() {
    return (
      <div className="grid">
        {this.props.cells.map((cell, index) => (
            <div className="cell-container" key={cell + index}>
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
