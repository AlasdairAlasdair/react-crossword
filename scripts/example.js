var PageContent = React.createClass({
  render(){
    const grid = {
            "cells" : [
                        {
                            "number" : 1
                        },
                        null,
                        {
                            "number" : 2
                        },
                        {
                            "number" : null
                        },
                        null,
                        {
                            "number" : 3
                        },
                        {
                            "number" : null
                        },
                        {
                            "number" : 1
                        },
                        null,
                        {
                            "number" : 2
                        },
                        {
                            "number" : null
                        },
                        null,
                        {
                            "number" : 3
                        },
                        {
                            "number" : null
                        },
                        {
                            "number" : 1
                        },
                        null,
                        {
                            "number" : 2
                        },
                        {
                            "number" : null
                        },
                        null,
                        {
                            "number" : 3
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
    var allCells = [];
    this.props.cells.map((cell, index) => {
        allCells.push((<Cell key={"cell" + index} cellInfo={cell}/>));
      })
      
    return (
      <div className="grid">
        {allCells}
      </div>
    );
  }
});

var Cell = React.createClass({
  render: function() {
    var cellInfo = this.props.cellInfo;
    if (cellInfo === null){
        return <EmptyCell />
      } else {
        return <AnswerCell cellInfo={cellInfo}/>
      }
  }
})

var EmptyCell = React.createClass({
  render: function() {
    return (
      <div className="cell-container">
        <input className="cell empty" maxLength="1" disabled></input>
      </div>
    )
  }
})

var AnswerCell = React.createClass({
  render: function() {
    return (
      <div className="cell-container" >
            <input className="cell answer" maxLength="1"></input>
        </div>
    )
  }
}) 

ReactDOM.render(
  <PageContent></PageContent>,
  // <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
