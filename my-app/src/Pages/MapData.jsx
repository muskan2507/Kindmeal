import React from 'react'
import { AButton, AImg, Apara, ATitle, BImg, Container, Date } from '../Components/Styled'

const MapData = ({ id, title, imgURL, para, by, date }) => {
    return (
        <div>
            <Container>
                <BImg>
                    <AImg src={imgURL} alt={id} />
                </BImg>
                <div style={{ padding: "20px" }}>
                    <ATitle>{title}</ATitle>
                    <Apara>{by}</Apara>
                    <Apara>{para}</Apara>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <AButton>View Video</AButton>
                        <Date>{date}</Date>
                    </div>
                </div>
            </Container>
            <br />
            <br />
        </div>
    )
}

export default MapData