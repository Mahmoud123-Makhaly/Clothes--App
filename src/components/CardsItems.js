import React from 'react'
import { Row  ,Col,Card} from 'react-bootstrap'
import NotfoundCard from './NotfoundCard'

const CardsItems = ({Data}) => {
  return (
    <Row>
            <Col>
{
    Data.length?(
        Data.map((item , index)=>{
         return( 
     
            <Card className="d-flex flex-row mt-2" style={{background:"#f6f6f6"}}>
              <Card.Img variant="top" src={item.src} className='card-img' style={{width:"200px",height:"200px"}}/>
              <Card.Body>
              <Card.Title  className='d-flex justify-content-between'>
              <span className='card-title'>  {item.title}</span>
              <span className='card-price'>  {item.price}</span>
                  </Card.Title> 
               <Card.Text>
                Tshirt Desc
                </Card.Text>
              </Card.Body>
            </Card>
       
          )   
        })
    ):(<NotfoundCard messege="No Items Found"/>)
}
</Col>
    </Row>
  )
}

export default CardsItems
