import React from 'react'
import ListProduitsCard from './ListProduitsCard'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ListProduits = () => {
  const {idcate} = useParams()
  const prod = useSelector(state=>state.product)
  console.log("product",prod)
  return (
    <div>
      <ListProduitsCard/>
    </div>
  )
}

export default ListProduits
