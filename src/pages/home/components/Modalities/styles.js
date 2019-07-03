import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 20px;
  margin-top: 60px;
`

export const TitleWrap = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;

  &:before {
    position: absolute;
    left: 0;
    top: 50%;

    width: 100%;
    height: 1px;

    background: #eee;
    content: '';
    transform: translateY(-50%);
  }
`

export const Title = styled.h1`
  position: relative;

  margin: 0;

  font-weight: 900;
  font-size: 18px;
  color: #000;
  background: #fff;
`

export const ButtonMore = styled.a`
  position: relative;

  padding-left: 10px;

  font-size: 13px;
  font-weight: 700;
  color: #666666;
  background: #fff;
`

export const Item = styled.article`
  position: relative;

  display: flex;
  align-items: center;
  height: 85px;
  margin-bottom: 15px;
`

export const Border = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 93%;
  padding: 15px;
  height: inherit;
  display: flex;
  align-items: center;

  border: solid 1px #eeeeee;
  padding-right: 85px;
  border-radius: 6px;
`

export const Resume = styled.h3`
  margin: 0;

  font-size: 13px;
  line-height: 1.38;
  font-weight: 700;
  color: #000;
`

export const Thumbnail = styled.img`
  position: absolute;
  right: -9%;
  top: 10px;

  width: 120px;
  height: 80px;
  border-radius: 6px;
`
