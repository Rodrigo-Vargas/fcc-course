
// tutorial2.js
var MarkdownPreviewer = React.createClass({
  getInitialState: function() {
    return { text: ''};
  },
  rawMarkup : function(){
    var md = new Remarkable();
    var rawMarkup = md.render(this.state.text)
    return { __html : rawMarkup};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value });
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-6">
          <textarea className="form-control" value={this.state.text} onChange={this.handleTextChange}></textarea>
        </div>
        <div className="col-xs-6 preview">
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(MarkdownPreviewer, null),
  document.getElementById('content')
);