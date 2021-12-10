// Write your Character component here
import React from "react";
import styled from "styled-components";


const CharStyle = styled.div`
    text-align: center;
    align-items: center;
    border-bottom: 5px dotted black;
    color: white;
`

const Character = props => {

    const {info} = props;

    return (
        <CharStyle>
            <div className="container">
                <h2>Name: {info.name}</h2>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Gender: {info.gender}</p>
            </div>
        </CharStyle>
    )
}

export default Character;