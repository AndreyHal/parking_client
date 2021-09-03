import styled from "styled-components";

const Container = styled.div`
  //padding: 20px;
  .header {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    //align-items: center;
    //font-weight: bold;
    margin-bottom: 30px;
    color: var(--gold);
    h2 {
      font-size: var(--big_font);
      margin: 0;
    }
    p {
      font-size: var(--middle_font);
      margin: 0;
    }
  }
  .slider {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
    .slides {
      position: relative;
      width: 100%;
      height: 140px;
      overflow: hidden;
      .slide {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 25%;
        aspect-ratio: 1;
        border-radius: 5px;
        opacity: 0;
        transform: translateY(-50%);
        transition: 0.5s;
        &.active {
          left: 50%;
          width: 45%;
          opacity: 1;
          transform: translate(-50%, -50%);
        }
        &.next {
          left: 75%;
          width: 25%;
          opacity: 1;
        }
        &.prev {
          left: 0;
          width: 25%;
          opacity: 1;
        }
        &.nextNext {
          left: 100%;
        }
        &.prevPrev {
          left: -25%;
        }
        img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }
      }
    }
    .dots {
      width: max-content;
      text-align: center;
      margin: 0 auto;
      .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 3px;
        border: 1px solid #000;
        border-radius: 50%;
        background: #aaa;
        &.active {
          background: #fff;
        }
      }
    }
  }
  .desc {
    font-size: var(--middle_font);
    font-weight: var(--font_weight_light);
    color: var(--silver);
    text-align: justify;
    margin-top: 30px;
  }
  .address {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    margin-top: 15px;
    p {
      margin: 0;
      font-size: var(--middle_font);
      font-weight: var(--font_weight_light);
      &:first-child {
        color: var(--gold);
      }
      &:last-child {
        color: var(--silver);
      }
    }
  }
  .map {
    width: 100%;
    aspect-ratio: 1;
    margin: 15px 0;
    overflow: hidden;
    //filter: invert(1);
    border-radius: var(--radius);
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  .checkboxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 400px) {
    .checkboxes {
      grid-template-columns: 1fr;
      label {
        margin-top: 5px;
        input {
          width: 18px;
          height: 18px;
          &:before {
            width: 5px;
            height: 9px;
            transform: translate(-50%, -65%) rotateZ(45deg);
          }
        }
        span {
          font-size: var(--middle_font);
        }
      }
    }
  }
`;

const PopupCont = styled.div`
  position: absolute;
  left: 0;
  top: ${props => props.top}px;
  width: 100vw;
  min-height: 100vh;
  background: #000a;
  z-index: 1;
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 400px;
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 24px;
      text-align: center;
    }
    .period {
      display: grid;
      grid-template-columns: auto auto auto;
      justify-content: space-between;
      grid-gap: 10px;
    }
    .price {
      text-align: center;
      span {
        font-weight: bold;
      }
    }
    
  }
`;

export {Container, PopupCont};