import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import Loader from './Loader'
import { StyledTable, Controls } from './styled-components/StyledTable.styled'
import { sortData } from '../store/actions/rates-actions'

const Table = ({ titles, content }) => {
  const dispatch = useDispatch()
  const [sortBy, setSortBy] = useState({ dir: 'up', key: 'Date' })
  useEffect(() => {
    dispatch(sortData(sortBy))
  }, [sortBy, dispatch])

  const renderButton = (dir, title) => {
    const buttons = {
      active: { up: '▲', down: '▼' },
      notActive: { up: '△', down: '▽' },
    }
    return (
      <button onClick={() => setSortBy({ dir, key: title })}>
        {sortBy.dir === dir && sortBy.key === title
          ? buttons.active[dir]
          : buttons.notActive[dir]}
      </button>
    )
  }

  if (!content || !content.length) return <Loader />
  return (
    <StyledTable>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>
              <span>{title}</span>
              <Controls>
                {renderButton('up', title)}
                {renderButton('down', title)}
              </Controls>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {content?.map(({ Date, High, Low, Open, Close }, index) => (
          <tr key={index}>
            <td>{moment(Date).format('lll')}</td>
            <td>{High.toFixed(2)}</td>
            <td>{Low.toFixed(2)}</td>
            <td>{Open.toFixed(2)}</td>
            <td>{Close.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}
export default Table
