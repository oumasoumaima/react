import { useState, useEffect } from 'react';
import  CardList  from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


const App = ()=> {
  const [searchfield, setSearchFeild] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users') // on aura un probleme d'une boucle infinie qui va se repeter a chaque fois la fonction et appeler donc on doit utiliser un effet secondaire
    .then((response)=> response.json())
    .then((users)=> setMonsters(users));  }
    ,[]);
  

 
          
  const onSearchChange= (event)=>{ // elle  va etre executer seulement une seule fois pour minimiser le code 
      const searchfieldString = event.target.value.toLocaleLowerCase();
      setSearchFeild(searchfieldString);
  };

  const filterMonsters = monsters.filter((monster) => {    
    return monster.name.toLocaleLowerCase().includes(searchfield);
         
  });
  return (
      <div className="App">
        <h1 className=''>Monsters Rolodex</h1>
           
            {/*filterMonsters.map((monster)=> {
              return <div key={monster.id}><h1>{monster.name}</h1></div>;
            })*/}
          <SearchBox 
            className = 'monsters-search-box'
            placeholder = 'search monsters'
            onChangeHandler = {onSearchChange}
          />
          
          <CardList monsters={filterMonsters} />
          
          
      </div>
  );    
}
// class App extends Component {
//   constructor(){
//     super();

//     this.state={
//       monsters:[],
//       searchfield : '',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((users)=>
//       this.setState(
//         ()=> {
//           return {monsters: users};
//         }
//       )
//     );
//   }



//   onSearchChange= (event)=>{ // elle  va etre executer seulement une seule fois pour minimiser le code 
//     console.log(event.target.value);
//     const searchfield = event.target.value.toLocaleLowerCase(); // pour que la chaine de caractere soit en miniscule
    
//     this.setState(()=>{
//       return {searchfield};
//     });  
//   }


//   render(){

//     const { monsters, searchfield} = this.state; // juste pour optimiser le code
//     const {onSearchChange} = this; // juste pour optimiser le code

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchfield);
//     });
    

//         <h1 className=''>Monsters Rolodex</h1>
//     return (
//       <div className="App">

       
//         {/*filterMonsters.map((monster)=> {
//           return <div key={monster.id}><h1>{monster.name}</h1></div>;
//         })*/}
//         <SearchBox 
//           className = 'monsters-search-box'
//           placeholder = 'search monsters'
//           onChangeHandler = {onSearchChange}
//         />
//         <CardList monsters={filterMonsters} />
      
//       </div>
//     );
//   }
  
// }

export default App;
