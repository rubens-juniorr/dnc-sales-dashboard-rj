import { AvatarList, CardComponent, Header } from '@/componets'
import { Container } from '@mui/material'
import { currencConverter } from '@/uils'
function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencConverter(5254.74),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencConverter(56056.75),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencConverter(2626555.528),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
