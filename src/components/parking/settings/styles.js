import styled from "styled-components";

const Container = styled.div`
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
        .delete {
          position: absolute;
          right: 0;
          top: 0;
          width: 20px;
          cursor: pointer;
        }
        &.active .delete {
          top: 22px;
        }
        img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }
        .btn {
          position: absolute;
          bottom: 8px;
          left: 50%;
          font-size: 8px;
          text-align: center;
          padding: 5px 10px;
          width: 70%;
          border-radius: 20px;
          background: #fff;
          transform: translateX(-50%);
          cursor: pointer;
        }
        &.active .btn {
          bottom: 27px;
          font-size: 14px;
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
  .addPhoto {
    display: inline-block;
    margin-left: 20px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #ccc;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: #bbb;
    }
  }
  input[type='file'] {
    display: none;
  }
  .newPhotos {
    margin: 10px 15px;
    .titlePhoto {
      position: relative;
      display: inline-block;
      padding: 5px 40px 5px 10px;
      margin: 5px;
      border-radius: 20px;
      background: #ccc;
      img {
        position: absolute;
        right: 2px;
        top: 50%;
        width: 25px;
        transform: translateY(-50%);
      }
    }
  }
`;

export {Container};