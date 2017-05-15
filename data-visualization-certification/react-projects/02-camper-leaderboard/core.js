var Learderboard = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.top100url,
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
  loadData: function(url){
    $.ajax({
      url: url,
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
  loadThirthDays: function(i,j){
    this.loadData(this.props.recenturl);
  },
  loadAllTime: function(i, j){
    this.loadData(this.props.top100url);
  },
  render: function() {
    return (      
      <table className="table">
        <tbody>
          <tr>
            <td>#</td>
            <td>Camper Name</td>
            <td><a className="btn" onClick={this.loadThirthDays.bind(this)}>Points in the past 30 days</a></td>
            <td><a className="btn" onClick={this.loadAllTime.bind(this)}>All time points</a></td>
          </tr>
          {
             this.state.data.map(function(camper, i) {
                return  <tr>
                          <td>{i + 1}</td>
                          <td>{camper.username}</td>
                          <td>{ camper.recent }</td>
                          <td>{ camper.alltime }</td>
                        </tr>
              })
          }
        </tbody>
      </table>
    );
  }
})

ReactDOM.render(
  <Learderboard top100url="https://fcctop100.herokuapp.com/api/fccusers/top/alltime" recenturl="https://fcctop100.herokuapp.com/api/fccusers/top/recent" />,
  document.getElementById('content')
);