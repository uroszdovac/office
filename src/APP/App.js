import React from 'react';
import './App.scss';
import Header from './partials/Header';
import OfficesPage from './office/officesPage';
import DataService from './services/dataService';
import Animation from '../APP/partials/Animation';

class App extends React.Component{

  constructor(props){

    super(props);
    this.state = {

      offices: [],
      view: 'list',
      loading: true

    }
  }

  loadOffices(){

     DataService.getData().then(data => {

       this.setState({

         offices: data,
         loading: false

       })
     });

  }

  gridViewHandler = () =>{

    this.setState({
      view: 'grid'
    })

  }

 listViewHandler = () =>{

  this.setState({

    view: 'list'

  })
}

mapViewHandler = () =>{

  this.setState({

    view: 'map'
  })
}

 componentDidMount(){
  this.loadOffices();
}

  render(){

    return (

      <div className="App">

      <Header view={this.state.view} handleClick={this.listViewHandler} handleClick1={this.gridViewHandler} handleClick2={this.mapViewHandler}/> 
      
        
        {(this.state.loading) ? <Animation/> : <OfficesPage view={this.state.view} officesData={this.state.offices} />}
        
        

    </div>
  );
    }
}

export default App;
