import styled from "styled-components";

const Container = styled.div`
  .header {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
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
    margin: 0 auto 20px;
    .slides {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      .slide {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 25%;
        aspect-ratio: 1;
        border-radius: var(--radius);
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
        width: 7px;
        height: 7px;
        margin: 0 3px;
        border-radius: 50%;
        background: var(--silver);
        &.active {
          background: var(--gold);
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
  .period {
    display: grid;
    grid-template-columns: 130px 45px 130px;
    justify-content: center;
    grid-gap: 30px;
    margin: 20px 0 80px;
    .date {
      text-align: center;
      input {
        text-align: center;
        font-weight: var(--font_weight_light);
      }
      span {
        width: 100%;
        font-size: var(--small_font);
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .price {
      position: relative;
      font-size: var(--middle_font);
      color: var(--gold);
      span {
        position: absolute;
        left: 50%;
        bottom: -20px;
        text-transform: uppercase;
        transform: translateX(-50%);
      }
    }
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
  @media(max-width: 380px) {
    .header {
      h2 {
        font-size: var(--middle_font);
      }
      p {
        font-size: var(--small_font);
      }
    }
    .slider {
      .slides {
        height: 150px;
      }
    }
    .desc {
      font-size: var(--small_font);
    }
    .address {
      p {
        font-size: var(--small_font);
      }
    }
    .checkboxes {
      label {
        input {
          width: 15px;
          height: 15px;
          &:before {
            width: 4px;
            height: 7px;
            transform: translate(-55%, -65%) rotateZ(45deg);
          }
        }
        span {
          font-size: var(--small_font);
        }
      }
    }
    .period {
      grid-template-columns: 100px 45px 100px;
      grid-gap: 20px;
      margin: 20px 0 80px;
      .date {
        span {
          font-size: var(--font_em);
        }
      }
      .price {
        font-size: var(--small_font);
        span {
          bottom: -20px;
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