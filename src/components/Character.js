// Write your Character component here
import React from "react";
import styled from "styled-components";


const CharStyle = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
`


const Character = props => {

    return (
        <CharStyle>
            <div className="container">
                <h2>Name: {props.name}</h2>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Gender: {props.gender}</p>
            </div>
        </CharStyle>
    )
}

export default Character;