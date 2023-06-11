import React,{Component} from 'react';
import "./App.css"
import Login from './login';

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

// function App(){
//   return (
//     <div>
//       {isLogin?<MyPage/>:<Login/>}
//     </div>
//   )
// }

export default App;