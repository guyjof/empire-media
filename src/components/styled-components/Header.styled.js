import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: ${({ theme }) => theme.colors.header};
padding: 25px 20px 25px;
box-shadow: rgb(0 0 0 / 16%) 0px 1px 6px 0px;
display: flex;
justify-content: space-between;
margin-block-end:25px ;
`;

export const Left = styled.div`
display: flex;
flex-direction: column;
h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
}
small {
    font-size:.6rem;
    color:#999 ;
}
`

export const Logo = styled.div`
display: flex;
align-items: center;
align-content: center;
margin-bottom: 12px;
img{
object-fit: contain;
margin-inline-end: 10px;
}
`

export const Right = styled.div`
display: flex;
flex-direction: column;
h3{
    margin: 0;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
}
small{
    font-size: .9rem;
    color: #507e11;
    margin-inline-end: 7px;
}

`

export const PriceChanges = styled.div`
display: flex;
justify-content: space-between;
span{
    font-size: .9rem;
    color: #507e11;
}
`