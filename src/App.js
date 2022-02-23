
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemDetails from './components/ItemDetail/ItemDetails';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  
  
  return (
    
 
    <div className="App">
 
      <NavBar></NavBar>
     
      <ItemListContainer > </ItemListContainer>

      <ItemDetails></ItemDetails>

    </div>

  );
}

export default App;
