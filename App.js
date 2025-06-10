import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='row'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
        
      <Footer/>
    </div>
  );
}

export default App;

function Card() {
  return (
    <div className='cardItems'>Card Div</div>
  )
}