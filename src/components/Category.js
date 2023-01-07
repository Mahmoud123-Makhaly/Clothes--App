import React from 'react'
import { Button, Row } from 'react-bootstrap'

const Category = ({filterByCategory , AllCategory}) => {
  const onFilter = (cat)=>{
    filterByCategory(cat)
  }
  return (
    <Row>
      <div className='category-btns d-flex justify-content-center'>
{
  AllCategory.length?(
    AllCategory.map((item , index)=>{
return(
  <Button style={{border:"1px solid #b45b35"}} id='focus' key={index} onClick={()=>{onFilter(item)}} className='btn btn-light mx-2'>{item}</Button>

)
    })
  ):(<h3>لا توجد اصناف جديدة</h3>)
}  
      </div>
    </Row>
  )
}

export default Category
