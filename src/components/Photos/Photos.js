import first from '../img/nature-1.jpg';
import second from '../img/nature-2.jpg';
import third from '../img/nature-3.jpg';
import fourth from '../img/nature-4.jpg';
import fifth from '../img/nature-5.jpg';
import sixth from '../img/nature-6.jfif';
import Container from '@material-ui/core/Container';
import './photos.scss'

export default function Photos() {
    return (
        <div>
            <Container maxWidth="false">
                <img className='photos' src={first} />
                <img className='photos' src={second} />
                <img className='photos' src={third} />
                <img className='photos' src={fourth} />
                <img className='photos' src={fifth} />
                <img className='photos' src={sixth} />
            </Container>
        </div>
    );
}