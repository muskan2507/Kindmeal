import styled from 'styled-components';


//Navbar

export const Nav = styled.div`
width:100%;
height:90px;
display:flex;
justify-content:center;
align-items: center;
font-family: 'Roboto', Arial, Helvetica, sans-serif;
gap:8.5%;
margin-left:-1%;
`;

export const Logo = styled.img`
height:80px;
`;

export const Social = styled.img`
height: 40px;
width: 40px;
margin-left:15px;
`;

export const Facebook = styled.button`
width: 80px;
height: 20px;
line-height: 20px;
padding: 1px;
background-color: #35619f;
font-weight: bold;
font-size: 13px;
text-align: center;
border-radius: 5px;
color: #ffffff;
border:#35619f`;

export const Email = styled.button`
width: 80px;
height: 20px;
background-color: #666666;
font-weight: bold;
font-size: 13px;
text-align: center;
border-radius: 5px;
color: #ffffff;
border:#666666;
`;
export const Signup = styled.p`
font-size: 12px;
    color: #444444;
    text-align: -webkit-center;
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    width: 50px;
    text-align: -webkit-right;
    border-left: 1px solid #cccccc;
    padding:6px 0px;
`;

export const GreenBar = styled.div`
width:100%;
height:40px;
background-color: #2bb673;
display:flex;
justify-content:center;
gap:1%;
`;

export const GreenLinks = styled.div`
heigth:100%;
padding:0px 22px;
display: block;
`;

//--------------------------------------------------------------------------------------------------------------------------

//Footer

export const FooterLayout = styled.div`
width: 100%;
background-color: #2bb673;

padding-top: 10px;
padding-bottom: 10px;
text-align: -webkit-center;
color: #ffffff;

left: 0;
bottom: 0;
width: 100%;
`;

export const Flex = styled.div`
display:flex;
justify-content:center;
text-align: left;
gap:40px;
margin-bottom:15px;
`;

export const Heddline = styled.p`
font-weight: bold;
color: #ffffff;
border-collapse: separate;
text-indent: initial;
border-spacing: 2px;
font-size: 14px;
`;

export const P = styled.p`
border-collapse: separate;
border-spacing: 2px;
font-weight: normal;
color: #eeeeee;
font-size: 12px;
font-weight: normal;
line-height: 15px;
`
export const Para = styled.p`
font-size: 12px;
line-height: 15px;
`;