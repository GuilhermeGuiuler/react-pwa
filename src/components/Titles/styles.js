import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  position: relative;
  padding-right: 30px;
`

export const Text = styled.h1`
  margin-bottom: 20px;

  line-height: 1.33;
  font-weight: 900;
  font-size: 33px;
  color: ${colors.dark};
`
export const SeeAll = styled.a`
  position: absolute;
  right: 30px;
  bottom: 0;

  font-weight: 600;
  font-size: 15px;
  color: ${colors.primary};
`
