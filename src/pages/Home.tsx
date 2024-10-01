import { CardComponent, Header } from '@/componets'
import { Container } from '@mui/material'
function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
      </Container>
    </>
  )
}

export default Home
