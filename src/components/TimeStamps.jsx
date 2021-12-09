import { loadData } from '../store/actions/rates-actions'
import { TimeNav } from '../components/styled-components/Overview.styled'
import { useDispatch } from 'react-redux'

const TimeStampsNav = () => {
  const dispatch = useDispatch()
  const timeStamps = [
    { title: '1 Minute', time: '1min' },
    { title: '5 Minute', time: '5min' },
    { title: '1 Hour', time: '1hour' },
    { title: '1 Week', time: '1week' },
  ]

  const changeTimeFrame = timeFrame => {
    dispatch(loadData(timeFrame))
  }

  return (
    <TimeNav>
      {timeStamps.map(({ title, time }, index) => (
        <button key={index} onClick={() => changeTimeFrame(time)}>
          {title}
        </button>
      ))}
    </TimeNav>
  )
}

export default TimeStampsNav
