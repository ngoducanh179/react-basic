import React from 'react';
import './App.css';
// import Greet from './component/Greet';
// import Welcome from './component/Welcome';
// import Hello from './component/Hello'
// import Message from './component/Message';
// import Couter from './component/Couter'
// import Greet from './component/Greet';
// import FuntionClick from './component/FuntionClick'
// import ClassClick from './component/ClassClick';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
// import Greet from './component/Greet';

function App() {
  return (
    <div className="App">

      {/* <Greet />
      <Welcome /> */}
      {/* <Hello name="bruce" heroName="fbuefbe">
        <p>This is children props</p> </Hello>
      <Hello name="Clark" heroName="....4545">
        <button>Action</button></Hello>
      <Hello name="Diana" heroName="23123" />
      <br />
      <Welcome name="Diana" heroName="23123" />
      <Welcome name="Clark" heroName="....4545 " />
      <Welcome name="bruce" heroName="fbuefbe" /> */}
      {/* <Couter /> */}
      {/* <Hello /> */}
      {/* <Welcome name="Diana" heroName="23123" />
      <Welcome name="Clark" heroName="....4545 " />
      <Welcome name="bruce" heroName="fbuefbe" />
      <Greet name="Diana" heroName="23123" />
      <Greet name="Clark" heroName="....4545 " />
      <Greet name="bruce" heroName="fbuefbe" /> */}
      {/* <FuntionClick /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* 
      <Greet user={this.state.user} />
      <form>
        <input type="text" value={this.state.user}></input>
        onChange={e => this.setState({ user: e.target.value })}
        <input type="submit">submit</input>

      </form> */}
      <NameList />

    </div>
  );
}

export default App;
