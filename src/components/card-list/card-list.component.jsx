
import './card-list.styles.css'
import  Card from '../card/card.component'




const CardList = ({monsters})=>(
  <div className='card-list'>
      {monsters.map((monster) =>{         
        return <Card monster={monster}/>;
      })}
  </div>           
);






// import { Component} from 'react';
// class CardList extends Component{

//     render(){

//         //console.log(this.props); props c'est un accessoires pour afficher la propriete et sa valeur passer dans Cardlist
//         const {monsters} = this.props
//       return( 
//         <div className='card-list'>
//             {monsters.map((monster) =>{
               
//                return(
//                 <Card monster={monster}/>
//                );
//             })}
//         </div> 
//       );          
//     }
// }

export default CardList;