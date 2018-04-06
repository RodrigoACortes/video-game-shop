import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import * as actions from "../actions";

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameArray: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("api/game_list").then(result => {
      this.setState({
        gameArray: result.data
      });
    });
  }

  buyGame(props) {
    console.log(this.props.auth)
  }

  render() {
    return (
      <div style={{ textAlign: `center`, margin: `0 auto`}} >  
        <ul>
          {this.state.gameArray.map(game => (
            <div key={game._id}>
                <br></br>
            
              <li>
                <p style={{ 
                    color: `white`,
                    fontSize: `2vmax`
                    }}>{game.title}</p>
                <p style={{ 
                    backgroundImage: `url(${game.cover})`, 
                    width: `16.5vmax`, 
                    height: `23vmax`, backgroundSize: `contain`, 
                    backgroundRepeat: `no-repeat`,
                    margin: `0 auto`,
                    textAlign: `center`
                }}
                    ></p>
                <p style={{
                    color: `white`,
                    fontSize: `1.5vmax`
                }}>{game.console}</p>
                <input 
                type="submit"
                onClick={this.buyGame}
                value={game.price + " credits"}
                />
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
    return { auth };
  }

export default connect(mapStateToProps)(Landing);
