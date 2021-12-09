import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: none;
  thead{
    tr{
      background-color: #f7f7f7;
      border: 1px solid #d8d8d8;
      margin-bottom: -3px;
      th{
        padding: 5px;
      }
    }
  }
  tbody{
    tr{
      border: 1px solid #d8d8d8;
      border-top: none;
      td{
        padding: 10px 0;
      }
    }
  }
  thead,tbody{
    tr{
      display: flex;
      justify-content: space-between;
      text-align: left;
      th,td{
        font-size: .75rem;
        text-align: left;
        display: flex;
        align-items: center;
        flex: 1;
        margin-inline-start: 5px;
      }
    }
  }
`;

export const Controls = styled.div`
  button{
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: none;
  padding: 0;
  font-size: .5rem;
  margin-inline-start: 5px;
  background-color: transparent;
}
`;