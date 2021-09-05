import styled from "styled-components";

const Container = styled.div`
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
        top: 55%;
        width: 25%;
        aspect-ratio: 1;
        opacity: 0;
        transform: translateY(-50%);
        transition: 0.5s;
        &.active {
          left: 50%;
          width: 45%;
          opacity: 1;
          transform: translate(-50%, -50%);
          .delete, .gradient-button {
            display: block;
          }
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
          border-radius: var(--radius);
        }
        .delete {
          display: none;
          position: absolute;
          right: 0;
          top: 0;
          width: 25px;
          border-radius: 50%;
          transform: translate(50%, -50%);
          background: var(--silver);
        }
        .gradient-button {
          display: none;
          position: absolute;
          left: 50%;
          bottom: 15px;
          width: 80%;
          padding: 7px;
          margin: 0;
          border-radius: 20px;
          transform: translateX(-50%);
          font-size: var(--small_small_font);
          font-weight: var(--font_weight_light);
          &:before {
            top: 1px;
            bottom: 1px;
            left: 1px;
            right: 1px;
            border-radius: 20px;
          }
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
  .new-photos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    grid-gap: 20px;
    margin: 10px 0;
    .preview-photo {
      position: relative;
      img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: var(--radius);
      }
      .delete {
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        border-radius: 50%;
        transform: translate(50%, -50%);
        background: var(--silver);
      }
    }
  }
  .checkboxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 25px;
  }
  .cancel-btn {
    text-align: center;
    font-size: var(--small_font);
    color: var(--silver);
    text-transform: uppercase;
    margin: 15px;
    cursor: pointer;
  }
  @media(max-width: 430px) {
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
    .new-photos {
      grid-template-columns: repeat(3, 1fr);
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
    .cancel-btn {
      font-size: var(--font_em);
    }
  }
`;

export {Container};