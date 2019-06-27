import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section``

export const Post = styled(Link)`
  position: relative;

  width: 310px;
  height: 200px;
  padding: 0 20px 20px 15px;
  display: flex;
  align-items: flex-end;
  margin-right: 15px;

  border-radius: 18px;
  background-color: #eaeaea;
  overflow: hidden;

  &:after {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    content: '';
  }
`

export const Cover = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`

export const Title = styled.h2`
  z-index: 2;
  font-weight: 800;
  font-size: 20px;
  color: #fff;
`

export const Carrousel = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  will-change: transform;
`

export const CarrouselList = styled.div`
  display: table;
`

export const CarrouselListItem = styled.div`
  display: table-cell;
  vertical-align: middle;

  &:last-of-type {
    ${Post} {
      margin-right: 25px;
    }
  }
`
