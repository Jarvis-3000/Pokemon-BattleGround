import React from "react";
import "./App.scss";

import { Route, Switch, useLocation } from "react-router-dom";

import Header from "./components/header/header";
import Main from "./pages/mainPage/main/main";
import JoinPage from "./pages/joinPage/joinPage";
import WinnerPage from "./pages/winnerPage/winnerPage";
import LoserPage from "./pages/looserPage/looserPage";
import BattlePage from "./pages/battlePage/battlePage";
import AvailPoks from "./components/availPoks/availPoks";
import StartGame from "./components/startGameButton/startGame";

import { SocketContext } from "./socketConnection/connectSocket";

function App() {
  // const { pathname } = useLocation();
  const [display, setDisplay] = React.useState(false);

  const socket = React.useContext(SocketContext);

  const handleDisplay = () => {
    socket.emit("startGame");
    socket.once("startGame", () => {
      setDisplay(true);
      window.scrollTo(0, 90)  //scroll 200px down
    });
  };

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/join" component={JoinPage} />
        <Route exact path="/battle">
          {/*multiple components at same path*/}
          {!display ? <StartGame handleDisplay={handleDisplay} /> : null}
          {display ? <AvailPoks style={display} /> : null}
          <BattlePage />
        </Route>
        <Route exact path="/winner">
          {display ? <AvailPoks style={display} /> : null}
          <WinnerPage />
        </Route>
        <Route exact path="/loser">
          {display ? <AvailPoks style={display} /> : null}
          <LoserPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
