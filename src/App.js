import React, { useState, useEffect, useContext } from "react";
import "./App.scss";

import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/header";
import Main from "./pages/mainPage/main/main";
import JoinPage from "./pages/joinPage/joinPage";
import WinnerPage from "./pages/winnerPage/winnerPage";
import LoserPage from "./pages/looserPage/looserPage";
import BattlePage from "./pages/battlePage/battlePage";
import AvailPoks from "./components/availPoks/availPoks";
import StartGame from "./components/startGameButton/startGame";
import Error from "./components/error/error";

import * as gameActions from "./redux/gameFunctions/actions";
import { SocketContext } from "./socketConnection/connectSocket";
// import axios from "axios";

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const {
    matchStarted,
    myCurrentPokemon,
    groupId,
    pokemons,
    isJoined,
    isRoundsFinished,
  } = useSelector((store) => store.gameReducer);
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  //
  //
  const roundsFinshed = () => {
    var count = 0;
    pokemons.forEach((pokemon) => {
      if (pokemon.disable) {
        count += 1;
      }
    });
    // console.error("countttttt", count);
    if (count === 5) {
      dispatch(gameActions.setRoundsFinished());
    }
  };

  const addPokemonsDetails = (pokemons) => {
    for (let i = 0; i < 5; i++) {
      dispatch(gameActions.addPokemon(pokemons[i]));
    }
  };

  const countPoints = (pokemons) => {
    var count = 0;
    pokemons.forEach((pokemon) => {
      if (pokemon.win) {
        count += 1;
      }
    });
    return count;
  };

  //
  //
  useEffect(() => {
    // alert(pathname)
    if (pathname !== "/" && pathname !== "/join") {
      if (!groupId) {
        history.replace("/");
      }
    }

    //adding matchStart effect
    socket.once("startGame", (pokemons) => {
      dispatch(gameActions.toggleMatchStarted());
      addPokemonsDetails(pokemons);
    });

    socket.on("error", (err) => {
      // alert(err.msg)
      dispatch(gameActions.setError(err.msg));
    });
  }, []);

  //
  //
  useEffect(() => {
    if (matchStarted) {
      window.scrollTo(0, 150); //scroll 200px down
    }
  }, [matchStarted]);

  //
  //
  useEffect(() => {
    if (isRoundsFinished) {
      // console.warn("rounds finshed", isRoundsFinished);
      let count = countPoints(pokemons); //count the winning points
      if (count > 2) {
        history.replace("/winner");
      } else {
        history.replace("/loser");
      }
    }
  }, [isRoundsFinished]);

  //
  //
  useEffect(() => {
    // console.error("saala useEffect" );

    socket.on("sendCurrentPokemon", (pokemon) => {
      dispatch(gameActions.setYourCurrentPokemon(pokemon));
    });

    socket.on("getPokemonDetails", ({details,id}) => {
      // console.error("get pokemon details");
      console.table(myCurrentPokemon);
      if (myCurrentPokemon != "" && !myCurrentPokemon.disable) {
        // console.error("sending both details for match");
        socket.emit("matchResult", {
          details: [myCurrentPokemon, details],
          groupId,
        });
      }
      else{
        console.error("lemme choose")
        // socket.emit("lemmeChoose",id)
      }
    });

    socket.on("matchResult", (result) => {
      dispatch(gameActions.setMatchResult(result.msg));
      dispatch(
        gameActions.changeDisability({ name: myCurrentPokemon.name, result })
      );
      roundsFinshed();
    });
  }, [myCurrentPokemon]);

  return (
    <div className="app">
      <Error />
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        <Route exact path="/join">
          <Header />
          <JoinPage/>
        </Route>
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
