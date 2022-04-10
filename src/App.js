import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import pic from "./Images/background.png"
import CC from './Components/Carousel/CC';
import Sprint from './Components/Sprint/Sprint';
import Footer from './Components/Footer/footer'

const numeros = ['1','2','3']
const sprint  = ['Conocer algo','Conocer algo','Conocer algo']
const images  = ['https://media.istockphoto.com/photos/blurred-bokeh-light-of-city-downtown-picture-id858204360?k=20&m=858204360&s=612x612&w=0&h=50ZaF59P3jAvvlQJ5HURHKLIZdOvHRJsQ1mnXwLdaHw=','https://media.istockphoto.com/photos/car-accident-car-running-through-red-light-on-the-intersection-and-picture-id1150263362?k=20&m=1150263362&s=612x612&w=0&h=qcPLuzb4jVxIzjtU_U8LY2nGe-OKTNK6MwlEe_SoM3o=','https://images.unsplash.com/photo-1611298037277-a6a9b2803864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdyUyMGxpZ2h0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80','https://www.ealde.es/wp-content/uploads/2017/12/direccion-de-proyectos-gestion-del-cambio.jpg']


function getSvg(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" version="1.1">
    <line x1="0" y1="0" x2="20" y2="20"    style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
    <line x1="20" y1="20" x2="40" y2="0"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
    <line x1="40" y1="0" x2="60" y2="20"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
    <line x1="60" y1="20" x2="80" y2="0"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
    <line x1="80" y1="0" x2="100" y2="20"  style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
    <line x1="100" y1="20" x2="120" y2="0" style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
    </svg>
  )
}

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <div className='up-container'>
      <div className='text-container'>
          <b>SKT T1</b>
          <span>"Vamos juntos a la victoria"</span>
          </div>
        <div className='image-container' style={{backgroundImage:`url(${pic})`}}>
        </div>              
      </div>
      <div>
        <CC/>
      </div> 
      <div className='sprintContainer' data-aos="fade-up">
        <p>Lista de Sprints</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100" version="1.1">
        <line x1="0" y1="0" x2="20" y2="20"    style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
        <line x1="20" y1="20" x2="40" y2="0"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
        <line x1="40" y1="0" x2="60" y2="20"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
        <line x1="60" y1="20" x2="80" y2="0"   style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
        <line x1="80" y1="0" x2="100" y2="20"  style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
        <line x1="100" y1="20" x2="120" y2="0" style={{stroke:`rgb(79,57,97)`,strokeWidth:5}} />
        </svg>
        <div className='sprintList'>
          <Sprint number={'1'} content={'Wea'} image={images[0]} url={'wea1'} />
          <Sprint number={'2'} content={'Wea'} image={images[1]} url={'wea1'} />
          <Sprint number={'3'} content={'Wea'} image={images[2]} url={'wea1'} />          
          <Sprint number={'4'} content={'Administrando cambios del proyecto'} image={images[3]} url={'https://62518d7180793.site123.me/'} />
        </div>     
      </div>
      <Footer/>
    </div>      
  );
}

export default App;
