import styled from 'styled-components'
import Slider from 'react-slick'

export const Container = styled(Slider)`
  position: relative;
  padding-left: 20px;

  &:before {
    position: absolute;
    left: 0;
    top: 0;

    width: 375px;
    height: 160px;

    background-color: #000000;
    content: '';
  }

  .slick-dots {
    bottom: 25%;

    li {
      width: 5px;
      height: 5px;
      margin: 0 3px;
      background-color: rgba(255, 255, 255, 0.6);

      &.slick-active {
        background-color: rgba(255, 255, 255, 1);
      }

      button {
        width: 5px;
        height: 5px;
        padding: 0;

        &:before {
          display: none;
        }
      }
    }
  }
`

export const Item = styled.div`
  position: relative;
  z-index: 1;
`
export const Cover = styled.figure`
  position: relative;

  width: 100%;
  height: 235px;
  margin: 0;

  border-radius: 4px 0 0 4px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 4px 0 0 4px;
`

export const Title = styled.h2`
  margin: 0;
  margin-top: 5px;
  padding-right: 15px;
  font-weight: 900;
  font-size: 21px;
  color: #000;
`

export const Tag = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;

  padding: 5px 8px;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
  color: #ffffff;
  font-size: 9px;
  letter-spacing: 0.3px;
  font-weight: 700;
`
