import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/componets'
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
  const mockTableData = {
    headers: ['Nome', 'E-mail', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>row@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>row@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>row@gmail.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.54, 986.32, 654.89, 655.22, 454.22]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
