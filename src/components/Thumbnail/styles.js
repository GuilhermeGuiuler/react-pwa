import styled, { css } from 'styled-components'
import styledMap from 'styled-map'

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${({ pinned }) =>
    pinned &&
    css`
      position: absolute;
      z-index: 2;
      top: 20px;
      left: 15px;
    `}
`

export const Photo = styled.img`
  width: 35px;
  height: 35px;

  border: solid 2px #ffffff;
  background-color: #a2a2a2;
  border-radius: 100%;
`

export const Left = styled.div`
  line-height: 11px;
  margin-left: 5px;
`

export const Name = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${styledMap('colorName', {
    light: '#fff',
    dark: '#111'
  })};
`

export const Time = styled.time`
  font-size: 11px;
  font-weight: 500;
  color: ${styledMap('colorTime', {
    light: '#fff',
    dark: '#aaa'
  })};
`
