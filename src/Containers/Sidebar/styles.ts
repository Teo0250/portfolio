import styled from 'styled-components'
import { Paragraph } from '../../components/Paragraph/styles'

export const Description = styled(Paragraph)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTheme = styled.button`
  font-size: 10px;
  font-height: bold;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
`

export const Sticky = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
