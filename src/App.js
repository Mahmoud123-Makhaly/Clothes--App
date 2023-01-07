import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CardsItems from './components/CardsItems'
import Category from './components/Category'
import ClothesMenu from './components/ClothesMenu'
import Navs from './components/Navs';
import { Items } from './Data'

const App = () => {
  const[Data , setData] = useState(Items);
    //category filter
const filterByCategory = (cat)=>{
  if(cat==="All"){
    setData(Items)
  }
  else{
    const newArray = Items.filter((item)=>{return item.category===cat});
setData(newArray)
  }

}
//extract category from Items
const AllCategory = ["All" , ...new Set(Items.map((item)=>{return item.category}))]
//search
const filterBySearch = (word)=>{
const newArray = Items.filter((item)=>{return item.title===word})
setData(newArray)
}
  return (
    <div className='font app-color'>
      <Navs filterBySearch={filterBySearch}/>
   <Container>
    <ClothesMenu/>
    <Category filterByCategory = {filterByCategory} AllCategory = {AllCategory}/>
    <CardsItems Data = {Data}/>
    </Container>
 
    </div>
  )
}

export default App
