import { useSelector } from 'react-redux'
import { Container } from '../components/styled-components/Overview.styled'
import TimeStampsNav from '../components/TimeStamps'
import Loader from '../components/Loader'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const Overview = () => {
  const { rates } = useSelector(state => state.rates)

  if (!rates || !rates.length) return <Loader />

  return (
    <>
      <TimeStampsNav />
      <Container>
        <AreaChart
          width={1200}
          height={550}
          data={rates}
          margin={{ top: 10, right: 0, left: 30, bottom: 0 }}
        >
          <XAxis dataKey='Date' />
          <YAxis />
          <CartesianGrid strokeDasharray='1 1' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='Close'
            stroke='blue'
            fillOpacity={1}
            fill='#005ca31a'
          />
        </AreaChart>
      </Container>
    </>
  )
}

export default Overview
