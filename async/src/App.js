import React, {useEffect} from "react";
import './App.css';
import Monster from "./components/Monster"
import {fetchMonster} from "./actions"
import {connect} from "react-redux"

function App(props) {
  console.log("test", props.episodes)
  
  // useEffect(() => {
  //   props.fetchMonster()
  //   //console.log("yes",props.fetchMonster())
  // },[])

  

  return (

    

    <div className="App">
      <h1>Monster Episode List</h1>

      <button onClick={() => props.dispatch(fetchMonster())}>Display Episodes</button>

      <div className="container">
        {props.isFetching ? <h2>Loading Info</h2> : null}
        {props.error && <p>{props.error}</p>}
        {props.episodes.map(episode => <Monster key={episode.episode_id} episode={episode} />)}
      </div>


    </div>
  );
}

const mapDispatchToProps = {
  fetchMonster
}

const mapStateToProps = state => {
  console.log("App", state)
  return{
    episodes: state.episodes,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps,
  //{fetchMonster}
  )(App);
