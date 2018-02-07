import React from 'react';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handler = this.handler.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handler(e) {
    const text = e.target.value;
    this.setState({
      title: text
    });
  }

  onClick() {
    const { title } = this.state;
    console.log(title);
    this.props.addMovie(title);
    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.handler} />
        <button onClick={this.onClick}>Add</button>
      </div>
    )
  }
}

export default MovieInput;
