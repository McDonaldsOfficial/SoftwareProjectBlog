import Header from '../Header/Header';
import pic from "../../Images/background.png"
import CC from '../Carousel/CC';
import Sprint from '../Sprint/Sprint';
import Footer from '../Footer/footer'
import './Main.css'
const numeros = ['1','2','3']
const sprint  = ['Conocer algo','Conocer algo','Conocer algo']
const images  = [
'https://www.monday.com/blog/wp-content/uploads/2021/06/cg45imeetz97Bi1aO7F7Hczm_okRzkD90cI_n85UntHmyphNEJH2J1DmAO1KPt0jjIPLAmCsKannpMIDta9armoNXipQOrsCRxDQPwBR7rjcawY6BD4-HxQDqxsgSQAFoA2LQfvT.png',
'https://d112uwirao0vo9.cloudfront.net/wp-content/uploads/2021/08/scrum-methodology.png',
'http://www.cidi.com.ar/assets/images/servicioPM.jpg',
'https://www.ealde.es/wp-content/uploads/2017/12/direccion-de-proyectos-gestion-del-cambio.jpg',
'https://www.isotools.org/wp-content/uploads/2020/06/Software-GRC.jpg']

function Main() {
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
          <Sprint number={'1'} content={'Introducción a la administración de proyectos de Software'} image={images[0]} url={'w'} />
          <Sprint number={'2'} content={'Metodologías de administración de proyectos de Software'} image={images[1]} url={'w'} />
          <Sprint number={'3'} content={'Metodologías y PMBOK'} image={images[2]} url={'w'} />          
          <Sprint number={'4'} content={'Administrando cambios del proyecto'} image={images[3]} url={'https://62518d7180793.site123.me/'} />
          <Sprint number={'5'} content={'Gestionando riesgos'} image={images[4]} url={'https://62686f70d7f85.site123.me/'} />
        </div>     
      </div>
      <Footer/>
    </div>      
  );
}

export default Main;