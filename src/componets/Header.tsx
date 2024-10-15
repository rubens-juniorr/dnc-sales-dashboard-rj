import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Logo } from '@/componets'
import { Avatar, Box, Container } from '@mui/material'
import { pxToRem } from '@/uils'

const StyledHead = styled.header`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStronke};
  margin-bottom: ${pxToRem(37)};
  width: 100%;
`
function Header() {
  return (
    <StyledHead>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            height: pxToRem(64),
          }}
        >
          <Link to="/home">
            <Logo height={30} width={73} />
          </Link>
          <Link to="perfil">
            <Avatar
              alt="DNC Avatar"
              src="/dnc-avatar.svg"
              sx={{ width: pxToRem(40), height: pxToRem(40) }}
            />
          </Link>
        </Box>
      </Container>
    </StyledHead>
  )
}
export default Header
