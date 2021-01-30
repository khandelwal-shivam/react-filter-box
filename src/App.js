// import logo from './logo.svg';
// import './App.css';
// import ReactFilterBox, {SimpleResultProcessing} from "react-filter-box";
// import "react-filter-box/lib/react-filter-box.css";
import  React from "react";
import data from './data';
import ReactFilterBox, {SimpleResultProcessing} from "react-filter-box";
import "react-filter-box/lib/react-filter-box.css"
import CustomAutoComplete from './Component/CustomAutoComplete';
 
export default class App extends React.Component {
    
    constructor(props){
        super(props);
 
         this.options = [
            {
                columnField: "Name",
                type:"text"
            },
            {
                columnField: "Description",
                type:"text"
            },
            {
                columnField: "Status",
                type:"selection" // when using type selection, it will automatically sugest all posible values
            },
            {
                columnText: "Email @",
                columnField: "Email",
                type:"text"
            }
        ];
    }
 
    onParseOk(expressions){
      debugger
        var data = [];
        var newData = new SimpleResultProcessing(this.options).process(data,expressions);
        //your new data here, which is filtered out of the box by SimpleResultProcessing
    }
 
    render(){
         return <div className="main-container"> 
                    <h2>React Filter Box</h2>
         
                        <ReactFilterBox 
                            
                            data={data}
                            options={this.options}
                            onParseOk={this.onParseOk.bind(this)}
                            />
                    <div>
                        <h2>My Filter Box</h2>
                        <CustomAutoComplete/>
                    </div>
                    </div>
    }
}

// function onParseOk(expressions){
//   var data = [];
//   var newData = new SimpleResultProcessing(options).process(data,expressions);
//   //your new data here, which is filtered out of the box by SimpleResultProcessing
// }
//   return (
//     <div className="main-container"> 
//                     <h2>React Filter Box</h2>
         
//                         <ReactFilterBox
//                             data={data}
//                             options={options}
//                             />
                     
//                     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
