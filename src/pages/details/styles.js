import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  padding: 20px;
`

export const Cover = styled.div`
  position: relative;

  width: 100%;
  height: 470px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.422639);
  background: #fff;
`
export const Title = styled.h1`
  position: absolute;
  bottom: 40px;
  left: 20px;
  z-index: 1;

  font-size: 33px;
  font-weight: 900;
  color: #fff;
`
export const ButtonLike = styled.button`
  position: absolute;
  bottom: -25px;
  right: 20px;

  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  box-shadow: 0px 7px 15px rgba(243, 80, 134, 0.422639);
  background: #f35086;
`
