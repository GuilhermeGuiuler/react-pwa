import styled from 'styled-components'

export const Container = styled.section``

export const Post = styled.article`
  position: relative;

  width: 330px;
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

export const Profile = styled.div`
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 15px;

  line-height: 11px;
`

export const Thumbnail = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;

  border: solid 2px #ffffff;
  background-color: #a2a2a2;
  border-radius: 100%;
`

export const Name = styled.p`
  padding-left: 40px;
  margin-top: 6px;

  font-size: 13px;
  font-weight: 500;
  color: #fff;
`

export const Time = styled.time`
  padding-left: 40px;

  font-size: 11px;
  font-weight: 500;
  color: #fff;
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
