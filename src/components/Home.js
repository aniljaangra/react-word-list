import  React  from 'react';
import  { Link } from 'react-router-dom';

export default function Home(props){
    return  (
        <div>
          <h1>Welcome to Our  Website</h1>
          <Link to='/login'>Login Now</Link>
          </div>
         )
        
} 