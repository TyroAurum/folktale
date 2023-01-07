import './card.css';
import { Card, CardBody, CardTitle } from "reactstrap";

function CardX({cardDetails:{link,title}}){
    return (
        <>
        <a href='https://reactstrap.github.io/?path=/docs/components-card--card-groups'>
        <Card 
            className="card-main"
            >
            <img
                className='card-img'
                alt="Fable"
                src={link}
                />
            
            <CardBody>
                <CardTitle>{title}</CardTitle>
            </CardBody>
        </Card></a>
        </>
    )
}

export default CardX;