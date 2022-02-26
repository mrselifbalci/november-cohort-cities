import './App.css';
import CityCard from './components/CityCard';
import Header from './components/Header';
import {
	BrowserRouter,
	Route, 
	Routes,
} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import CityDetails from './components/CityDetails';
import ContactUs from './components/ContactUs';




function App() {

const user = [
  {
    firstName:"Elif",
    avatarUrl:"https://picsum.photos/200"
  }
]

const cities = [
  {
    cityName:"london",
    population:"10M",
    imageUrl:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!"
  },
  {
    cityName:"bangkok",
    population:"8M",
    imageUrl:"https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!"
  },
  {
    cityName:"tokyo",
    population:"8M",
    imageUrl:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!"
  },
  {
    cityName:"vienna",
    population:"8M",
    imageUrl:"https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!"
  },

]


  return (
    <div>
      <BrowserRouter>
          <Header user={user[0]}/>
          
          <Routes>
                <Route path="/" 
                element={
                    <div className='cities-container'>
                      {
                        cities.map(city=>{
                        return <CityCard city={city}/> 
                        })
                      }
                  </div>
                }/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route exact path="/citydetails/:cityName" element={<CityDetails cities={cities}/>} />
          </Routes>
          <Footer/>

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
