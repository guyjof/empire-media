import styled from 'styled-components';

export const StyledLoader = styled.div`
    padding: 15px;
    border: 6px solid #3333339a;
    border-right-color: #333;
    border-radius: 50%;
    animation: rotate 0.7s infinite linear;
    position: absolute;
    left: 50%;
    top: 50%;
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
    
`;
