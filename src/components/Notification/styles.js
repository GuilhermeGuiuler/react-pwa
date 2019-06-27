import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;

  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  box-shadow: 0px 7px 15px rgba(82, 200, 255, 0.422639);
  background: ${colors.primary};
`
