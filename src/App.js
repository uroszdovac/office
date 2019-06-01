import React from 'react';
import './App.css';
import Header from './partials/Header';
import OfficeList from './office/OfficeList';
import SingleOfficePage from './office/SingleOfficePage';
import DataService from './services/dataService';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component{
    
  constructor(props){
    super(props);
    this.state ={
      isListView:true,
      offices: [],
      
    }
  }

  
loadOffices(){
  DataService.getData().then(data => {
    this.setState({
      offices: data
    })
  })
} 

componentDidMount(){
  this.loadOffices()
}
  
  changeToListView = () => {

    this.setState({
      isListView: true
    })
  }

  changeToGridView = () => {

    this.setState({
      isListView: false 
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header handleClick={this.changeToListView} handleClick1={this.changeToGridView} /> 
        <Switch>
          <Route exact path='/' render={(props) => <OfficeList {...props} isListView={this.state.isListView} officesData={this.state.offices} />}/>
          <Route exact path='/singleOffice/:number' render={(props) => <SingleOfficePage {...props} officeData={this.state.offices} />} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
