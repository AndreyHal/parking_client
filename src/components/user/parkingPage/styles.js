import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  .header {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 20px;
    h2 {
      font-size: 30px;
      margin: 0;
    }
    p {
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
          //transform: translate(0, -50%);
        }
        &.prev {
          left: 0;
          width: 25%;
          opacity: 1;
          //transform: translate(0, -50%);
        }
        &.nextNext {
          left: 100%;
          //transform: translate(0, -50%);
        }
        &.prevPrev {
          left: -25%;
          //transform: translate(0, -50%);
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
  .decs {
    
  }
  .address {
    font-weight: bold;
  }
  .map {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    //filter: invert(1);
    border-radius: 5px;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export {Container};