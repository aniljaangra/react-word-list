import  React  from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';


export default function Layout(props){
    return (<div>
        <Header/>
        <SideBar/>
            <div id="main">
                {props.children}
                </div>
          <Footer/>
        </div>)
} 