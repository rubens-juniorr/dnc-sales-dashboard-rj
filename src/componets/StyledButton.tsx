import styled from 'styled-components'
import { ButtonProps } from '@mui/material'
import { pxToRem } from '@/uils'

export const StyledButton = styled.button<ButtonProps>`
  border-radios: ${pxToRem(8)};
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${pxToRem(16)};
  font-weight: bold;
  height: ${pxToRem(50)};
  padding: 0 ${pxToRem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &.primary {
    background-color: ${(props) => props.theme.button.primary};
    color: ${(props) => props.theme.button.primaryColor};
    &:hover {
      background-color: ${(props) => props.theme.button.primaryHover};
    }
  }

  &.alert {
    background-color: ${(props) => props.theme.button.alert};
    color: ${(props) => props.theme.button.alertColor};
    &:hover {
      background-color: ${(props) => props.theme.button.alertHover};
    }
  }

  &.borderless-alert {
    background-color: none;
    color: ${(props) => props.theme.button.alert};
    height: 0;
    padding: 0;
    &:hover {
      color: ${(props) => props.theme.button.alertHover};
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.button.disabled};
    color: ${(props) => props.theme.button.disabledColor};
    cursor: not-allowed
    &:hover {
      color: ${(props) => props.theme.button.disabled};
    }
  }
`
