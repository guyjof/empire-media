import { useSelector } from 'react-redux'
import TimeStampsNav from '../components/TimeStamps'
import Table from '../components/Table'

const History = () => {
  const { rates } = useSelector(state => state.rates)
  const headerTitles = ['Date', 'High', 'Low', 'Open', 'Close']

  return (
    <>
      <TimeStampsNav />
      <Table titles={headerTitles} content={rates} />
    </>
  )
}

export default History
