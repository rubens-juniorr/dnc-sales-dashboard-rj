// COMPONETS
import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@/componets'
import { Container, Grid } from '@mui/material'

// HOOKS
import { useGet } from '@/hooks'

// UTILS
import { currencConverter, highlightTextConvert } from '@/uils'

// TYPES
import { HighlightsData, StarsData, NewsData, CustomChartProps } from '@/types'

function Home() {
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsData[]>('sales/highlights')

  // SALES PER MONTH
  const {
    data: salesPerMonthData,
    loading: salesPerMonthLoading,
    error: salesPerMonthError,
  } = useGet<CustomChartProps>('sales/month')

  // SALES STARS
  const {
    data: salesStarsData,
    loading: salesStarsLoading,
    error: salesStarsError,
  } = useGet<StarsData[]>('sales/stars')

  // NEWS
  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsData[]>('news')

  //SALES YEAR
  const {
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>('sales/year')

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          {!highlightsError && (
            <>
              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Total de vendas do mês
                      </StyledH2>
                      <StyledH3 className="mb-1" size={40} lineheight={40}>
                        {currencConverter(highlightsData[0].value)}
                      </StyledH3>
                      <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsData
                      ? highlightsData[1].subtitle
                      : 'skeleton-loading skeleton-loading-mh-1'
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color="white">
                        Meta do mês
                      </StyledH2>
                      <StyledH3
                        color="white"
                        className="mb-1"
                        size={40}
                        lineheight={40}
                      >
                        {currencConverter(highlightsData[1].value)}
                      </StyledH3>
                      <StyledSpan color="white">
                        {highlightTextConvert(highlightsData[1].subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mb-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">Leads contactados</StyledH2>
                      <StyledH3 className="mb-1" size={40} lineheight={40}>
                        {highlightsData[2].value}
                      </StyledH3>
                      <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
            </>
          )}
          <Grid item xs={12} md={7}>
            {!salesPerMonthError && (
              <CardComponent
                className={
                  salesPerMonthLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesPerMonthLoading && salesPerMonthData && (
                  <>
                    <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
                    <CustomChart
                      labels={salesPerMonthData.labels.map((label) => label)}
                      data={salesPerMonthData.data.map((data) => data)}
                      type={salesPerMonthData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} md={5}>
            {!salesStarsError && (
              <CardComponent
                className={
                  !salesStarsLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesStarsLoading && salesStarsData && (
                  <>
                    <StyledH2 className="mb-1">
                      Maiores vendendores do mês
                    </StyledH2>
                    <AvatarList
                      listData={salesStarsData.map((star) => ({
                        avatar: '/dnc-avatar.svg',
                        name: star.name,
                        subtitle: currencConverter(star.value),
                      }))}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} md={5}>
            {!newsError && (
              <CardComponent
                className={
                  !newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!newsLoading && newsData && (
                  <>
                    <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                    <CustomTable
                      headers={['Título', 'Horário']}
                      rows={newsData.map((news) => [
                        <a
                          className="ellipsis ellipsis-sm"
                          href={news.link}
                          target="_blank"
                        >
                          {news.title}
                        </a>,
                        <a href={news.link} target="_blank">
                          {news.date}
                        </a>,
                      ])}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            {!salesYearError && (
              <CardComponent
                className={
                  salesYearLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesYearLoading && salesYearData && (
                  <>
                    <StyledH2 className="mb-1">
                      Valor de Vendas por mês
                    </StyledH2>
                    <CustomChart
                      labels={salesYearData.labels.map((label) => label)}
                      data={salesYearData.data.map((data) => data)}
                      type={salesYearData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
