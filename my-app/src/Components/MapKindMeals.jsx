import React from 'react'
import { RoundImg, Para, MainImg, AButton, MiniContainer,SocialIcon } from './Styled'
{ }
const MapKindMeals = (data) => {
    return (


        <MiniContainer>
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", padding: "5px" }}>
                <div>
                    <RoundImg src={data.authorimg} alt={data.name} />
                </div>
                <div>
                    <p>{data.authorname}</p>
                    <Para>{data.date}</Para>
                </div>
                <AButton style={{ width: "80px" }}>view</AButton>
            </div>
            <MainImg src={data.img} alt={data.name} />

            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", padding: "5px" ,height:"35px",gap:"50px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <SocialIcon src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg"/>
                <p style={{fontSize:"20px"}}>{data.Like}</p>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <SocialIcon src='https://www.kindmeal.my/images/icon_camera_darkgrey.png'/>
                <p style={{fontSize:"20px"}}>{data.camera}</p>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <SocialIcon src='https://www.kindmeal.my/images/icon_comment_darkgrey.png'/>
                <p style={{fontSize:"20px"}}>{data.Comment}</p>
                </div>
            </div>

            <div style={{padding:"5px"}}>
                <img style={{width:"20px",height:"19px"}}
                src="https://www.kindmeal.my/images/icon_star.png" alt="" />
                    <img style={{width:"20px",height:"19px"}}
                src="https://www.kindmeal.my/images/icon_star.png" alt="" />
                    <img style={{width:"20px",height:"19px"}}
                src="https://www.kindmeal.my/images/icon_star.png" alt="" />
                    <img style={{width:"20px",height:"19px"}}
                src="https://www.kindmeal.my/images/icon_star.png" alt="" />
                    <img style={{width:"20px",height:"19px"}}
                src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            </div>
            <p style={{padding:"5px"}}>{data.description}</p>
            <hr  />

        </MiniContainer>

    )
}

export default MapKindMeals