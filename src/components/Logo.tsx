import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const Logo = styled.figure<{ height: number; width: number }>`
  background-image: url(${({ theme }) => theme.appLogo});
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
  padding: 0;
  margin: 0;
`
