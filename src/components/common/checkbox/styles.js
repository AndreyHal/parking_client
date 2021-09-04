import styled from "styled-components";

const Container = styled.label`
  display: block;
  input {
    appearance: none;
    outline: none;
    position: relative;
    width: 15px;
    height: 15px;
    margin: 0 10px 0 0;
    border: 1px solid var(--silver);
    border-radius: 3px;
    &:before {
      position: absolute;
      display: none;
      content: '';
      left: 50%;
      top: 50%;
      width: 4px;
      height: 7px;
      border-right: 1px solid var(--silver);
      border-bottom: 1px solid var(--silver);
      transform: translate(-55%, -65%) rotateZ(45deg);
    }
    &:checked:before {
      display: block;
    }
  }
  span {
    font-size: var(--small_font);
    font-weight: var(--font_weight_light);
    color: var(--silver);
    vertical-align: top;
  }
`;

export {Container};