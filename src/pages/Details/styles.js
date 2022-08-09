import styled from "styled-components";

export const  ContainerHome = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;

    h1{
        margin-top: 20px;
        font-size: 45px;
        color: #8B008B;
        text-align: center;
        width: 100%;
    }

`;
export const  Detail = styled.article`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
    min-height: 100%;
    width: 100%;
    
    @media(max-width: 769px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    }
`;
export const DivImg = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    margin-rigth: 30px;
    width: 40%;

    img{
        width: 300px;
        border-radius: 10px;
        height: 400px;
}
`;
export const DivSinopse = styled.div`
    width: 60%;
    margin-top: 30px;
    padding: 30px;
    strong{
        line-height: 30px;
        text-align: center;
        letter-spacing: 2px;
        width: 350px;

        h2{
            text-align: start;
            margin-bottom: 20px;
            font-size: 30px;
        }
        @media(max-width: 769px){
            width: 100%;

        }
    }

    h3{
        font-size: 30px;
        margin-top: 20px;
        text-align: end;
        height: 70px;
        font-weight: bold;

    b{
        font-size: 50px;
        color: #8B008B;
        padding-left: 10px;
    }
    strong{
        font-size: 20px;
        vertical-align: super;
        margin-top: 10px;
        color: #4F4F4F;
        padding: 5px;

    }
}
    @media(max-width: 769px){
        width: 100%;
    }
`;