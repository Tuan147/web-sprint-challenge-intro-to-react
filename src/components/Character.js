// Write your Character component here
import React from "react";
import styled from "styled-components";


const CharStyle = styled.div`

`


const Character = props => {
    const {data} = props;


    return (
        <CharStyle>
            <div className="container">
                <h2>Name: {data.name}</h2>
                <p>Height: {data.height}</p>
                <p>Mass: {data.mass}</p>
                <p>Gender: {data.gender}</p>
            </div>
        </CharStyle>
    )
}

export default Character;