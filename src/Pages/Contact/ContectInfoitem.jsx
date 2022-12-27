import React from 'react'
import {MdPlace} from "react-icons/md"
import styled from 'styled-components'


const ContectInfoitem = ({Icon =<MdPlace/>,text="this my info", onClick}) => {
     
  return (
    <ItemStyles onClick={onClick}>
        <div className="icon">{Icon}</div>
        <div className="info">
            <p>{text}</p>
        </div>
    </ItemStyles>
  )
}

const ItemStyles = styled.div`
    padding: 0.75rem;
    background-color: #d5d5d5;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon{
        color: white;
        background-color: #9c9c9c;
        padding: 0.5rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    @media only screen and (max-width:768px){
      gap: 1rem;
    }
`

export default ContectInfoitem