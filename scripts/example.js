var PageContent = React.createClass({
  loadGridFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState() {
     return {
       cells : [] 
    };
  },
  componentDidMount() {
    this.loadGridFromServer();
  },

  render(){ 
    return (
      
      <main className="site-content fade-in">
        <GridContainer></GridContainer>
      </main>
    )
  }
})

var GridContainer = React.createClass({
  
  render: function() {
    
    return (
      <div id="grid-container">
          <Grid></Grid>
      </div>
    );
  }
});

var Grid = React.createClass({
  render: function() {
    var allCells = [];
    if (this.state && this.state.data.grid.cells){  
        this.state.data.grid.cells.map((cell, index) => {
            allCells.push((<Cell key={"cell" + index} cellInfo={cell}/>));
        })
    }
    
      
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
            <div className="number-container">
                <p className="number">{this.props.cellInfo.number}</p>
            </div>
          <input className="cell answer" maxLength="1"></input>
      </div>
    )
  }
}) 

ReactDOM.render(
  <PageContent url="/api/grid"></PageContent>,
  document.getElementById('content')
);
