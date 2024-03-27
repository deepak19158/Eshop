import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{}] }) => {
  const [curImg, setCurImg] = useState(0);
  return (
    <Wrapper>
      <div className="gallery">
        {imgs.map((curElem, index) => {
          return (
            <figure key={index}>
              <img
                src={curElem.url}
                alt={curElem.filename}
                className="box-image--style"
                key={index}
                onMouseOver={() => {
                  setCurImg(index);
                }}
              />
              {/* 155P-buOysH-mq025RYULZZDo0CrVmOxY */}
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={imgs[curImg].url} alt={imgs[curImg].filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 50vw;
  max-width: 600px;
  min-width: 300px;
  position: relative;
  height: 250px;
  .gallery {
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .gallery img {
    width: 100%;
  }
  .main-screen {
    padding: 20px 10px;
    position: relative;
    left: 100px;
  }
  .main-screen img {
    width: 80%;
  }
`;
//   display: grid;
//   grid-template-columns: 0.4fr 1fr;
//   gap: 1rem;
//   .grid {
//     flex-direction: row;
//     justify-items: center;
//     align-items: center;
//     width: 100%;
//     gap: 1rem;
//     /* order: 2; */
//     img {
//       max-width: 100%;
//       max-height: 100%;
//       background-size: cover;
//       object-fit: contain;
//       cursor: pointer;
//       box-shadow: ${({ theme }) => theme.colors.shadow};
//     }
//   }
//   .main-screen {
//     display: grid;
//     place-items: center;
//     order: 1;
//     img {
//       max-width: 100%;
//       height: auto;
//       box-shadow: ${({ theme }) => theme.colors.shadow};
//     }
//   }
//   .grid-four-column {
//     grid-template-columns: 1fr;
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     display: flex;
//     flex-direction: column;
//     order: 1;
//     .grid-four-column {
//       grid-template-rows: 1fr;
//     }
//   }
// `;

export default MyImage;
