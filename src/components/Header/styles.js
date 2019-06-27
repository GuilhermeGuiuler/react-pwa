import styled from 'styled-components'

export const Container = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonMenu = styled.button`
  position: relative;

  width: 25px;
  height: 25px;
`

export const Ball = styled.span`
  position: absolute;

  width: 8px;
  height: 8px;
  display: block;

  border-radius: 100%;
  background: #000;
`

export const Perfil = styled.img`
  width: 52px;
  height: 52px;
  background-color: #d8d8d8;
  border-radius: 100%;
`
