import React, { useEffect, useContext } from "react";
import "./App.scss";

import { Route, Switch, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/header";
import Main from "./pages/mainPage/main/main";
import JoinPage from "./pages/joinPage/joinPage";
import WinnerPage from "./pages/winnerPage/winnerPage";
import LoserPage from "./pages/looserPage/looserPage";
import BattlePage from "./pages/battlePage/battlePage";
import AvailPoks from "./components/availPoks/availPoks";
import StartGame from "./components/startGameButton/startGame";

import * as gameActions from "./redux/gameFunctions/actions";
import { SocketContext } from "./socketConnection/connectSocket";
import axios from "axios";

function App() {
  // const { pathname } = useLocation();
  const {
    matchStarted,
    myCurrentPokemon,
    groupId,
    countRounds,
    pokemons,
    matchResult,
  } = useSelector((store) => store.gameReducer);
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  useEffect(() => {
    window.scrollTo(0, 90); //scroll 200px down
  }, [matchStarted]);

  const getPokemonsDetails = (pokemons) => {
    for (let i = 0; i < 5; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemons[i]}`)
        .then((res) => {
          console.log("adding pokemon", res);
          dispatch(
            gameActions.addPokemon({
              name: res.data.name,
              height: res.data.height,
              weight: res.data.weight,
              image: res.data.sprites.other.dream_world.front_default,
              disable: false,
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const roundsFinshed=()=>{
    let count = 0;
    pokemons.forEach((pokemon) => {
      if (pokemon.disable) {
        count += 1;
      }
    });
    console.log("countttttt", count);
    if (count == 5) {
      console.log("Rounds Finshed bhai");
      console.log("Rounds Finshed bhai");
      console.log("Rounds Finshed bhai");
      dispatch(gameActions.setRoundsFinished());
    }
  }

  useEffect(() => {
    

  });

  useEffect(() => {
    //adding matchStart effect
    socket.once("startGame", (pokemons) => {
      console.log("dispatching toggleMatchStarted");
      dispatch(gameActions.toggleMatchStarted());

      getPokemonsDetails(pokemons);
    });

    socket.on("sendCurrentPokemon", (pokemon) => {
      dispatch(gameActions.setYourCurrentPokemon(pokemon));
    });

    socket.on("warning", (msg) => {
      alert(msg);
    });

    socket.on("matchResult", (result) => {
      console.log("match resulttttttttttttt")
      dispatch(gameActions.setMatchResult(result));
    });
  }, []);

  useEffect(() => {
    socket.on("getPokemonDetails", (oppDetails) => {
      console.log("details");
      console.log("mycurrentPokemon", myCurrentPokemon);
      console.log("oppdetails", oppDetails);
      if (myCurrentPokemon) {
        socket.emit("matchResult", {
          details: [myCurrentPokemon, oppDetails],
          groupId,
        });
      }
      console.log("disabling current pokemon", myCurrentPokemon);
      dispatch(gameActions.changeDisability(myCurrentPokemon.name));
    });
  });

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/join" component={JoinPage} />
        <Route exact path="/battle">
          {/*multiple components at same path*/}
          {!matchStarted ? <StartGame /> : null}
          {matchStarted ? <AvailPoks /> : null}
          <BattlePage />
        </Route>
        <Route exact path="/winner">
          {matchStarted ? <AvailPoks /> : null}
          <WinnerPage />
        </Route>
        <Route exact path="/loser">
          {matchStarted ? <AvailPoks /> : null}
          <LoserPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
