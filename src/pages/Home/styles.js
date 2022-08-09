import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHome = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    
`;
export const Movie = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    background-color: #BA55D3;
    background-image: linear-gradient(5deg, #ff47a4 0, #ff3aaf 10%, #ff2cba 20%, #ff20c5 30%, 
        #ff15d0 40%, #f810db 50%, #e317e6 60%, #ca24f1 70%, #ac31fc 80%, #873dff 90%, #5048ff 100%);

`;
export const DataMovie = styled.article`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
padding: 30px;
border: 1px solid #aaa;
margin: 10px;
border-radius: 20px;
box-shadow: inset 0 0 2em #aaa;
background-color: #eee;

strong{
    margin-top: 30px;
    font-size: 18px;
}

img{
    width: 200px;
    height: 250px;
    cursor: pointer;
    -webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   border-radius: 20px;  
}
img:hover{
    -webkit-transform: scale(1.2);
    transform: scale(1.2);

    background-color: rgba(0, 0, 0, 0.7);
}
`;
export const LinkDetail = styled(Link)`
padding: 10px 20px;
margin-top: 20px;
background-color: 	#8B008B;
text-decoration: none;
color: #fff;
border-radius: 10px;
transform-style: preserve-3d;

&:before{
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0px;
    height: 45px;
    background-color: rgba(255,255,255,0.3);
    border-radius: 10px;
    transition: all 2s ease;
}
&:hover:before{
    width: 100%;
}
`;