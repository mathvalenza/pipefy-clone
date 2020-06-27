import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  img {
    height: 24px;
    width: 24px;
    border-radius: 24px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }
`;

export const Label = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
