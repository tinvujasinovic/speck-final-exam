import styled from "styled-components";

export const CardWrapper = styled.div`
border-radius: 8px;
    width: 80%;
    margin: 12px 0;
    box-shadow: 0 15px 10px -10px rgb(0 0 0 / 50%), 0 1px 4px rgb(0 0 0 / 30%), 0 0 40px rgb(0 0 0 / 10%) inset;
`;

export const CardHeader = styled.div`
width: 100%;
border-radius: 8px 8px 0 0;
    background-color: ${props => props.isAdmin === true ? 'green':'blue'};
    height: 50px;
    text-align: center;
    padding-top: 12px;
    
    font-size: 18px;
    font-weight: bold;
    color: white;
`;

export const StudnetName = styled.div`
display:flex;
justify-content: space-between;
padding: 0 12px;
`;

export const Name = styled.p`
    
    font-size: 18px;
    font-weight: bold;
`;

export const LastName = styled.p`
    
    font-size: 18px;
    font-weight: bold;
`;


export const StudentEmail = styled.div`
    display:flex;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
`;