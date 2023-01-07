import TitleBar from '../component/Titlebar';
import './home.css';
import { Button } from 'reactstrap';
import FooterBar from '../component/footerbar';

function Home(){
    return(
        <>
        <div className='App'>
            <TitleBar />
                <div className='jumbo-text'>
                    <h2>Explore <span className='highlight'> Folktales</span> from around the<span className='highlight'> World</span></h2>
                    <Button className='btn-home' color='primary' outline >Explore</Button>
                </div>
        </div>
        <div className='div-col-2'>
            <h2><span className='highlight'>History</span> isn't hidden <span className='highlight'>under soil</span> but in the fringes of the <span className='highlight'>Folktales.</span></h2>
        </div>
        <div className='div-col-3'>
        <h2>Someday you will be<span className='highlight'> old enough</span> to start reading <span className='highlight'> Folktales</span> again</h2>
        </div>
        <FooterBar/>
        </>
    )
}

export default Home;