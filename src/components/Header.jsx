import { useEffect, useState } from 'react'
import moment from 'moment'
import {
  StyledHeader,
  Left,
  Right,
  Logo,
  PriceChanges,
} from './styled-components/Header.styled'

const Header = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const ws = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon')
    ws.onopen = () => {
      const msg = {
        type: 'SUBSCRIBE',
        instruments: ['cc-btc-usd-cccagg'],
      }
      ws.send(JSON.stringify(msg))
    }
    ws.onmessage = event => {
      const formatedResponse = JSON.parse(event.data)
      const data = formatedResponse['cc-btc-usd-cccagg']
      setData(data)
    }
    return () => ws.close()
  }, [])

  const changeStatus = () => {
    if (data?.change > 0) {
      return '#009624'
    } else if (data?.change < 0) {
      return '#d91e18'
    } else {
      return '#9e9e9e'
    }
  }

  const priceChange = (change, type) => {
    if (type === 'arrow') {
      if (change > 0) {
        return <small style={{ color: changeStatus() }}>▲</small>
      } else {
        return <small style={{ color: changeStatus() }}>▼</small>
      }
    }

    if (type === 'amount') {
      return (
        <span style={{ color: changeStatus() }}>{data?.change.toFixed(2)}</span>
      )
    }

    if (type === 'percent') {
      return (
        <span style={{ color: changeStatus() }}>({data?.percentChange}%)</span>
      )
    }
  }

  return (
    <StyledHeader>
      <Left>
        <Logo>
          <img src='./images/btc.png' alt='' />
          <h3>Bitcoin</h3>
        </Logo>
        <small>As of: {moment(data?.lastUpdate).format('lll')}</small>
      </Left>

      <Right>
        <h3>
          {priceChange(data?.change, 'arrow')}$ {data?.last.toLocaleString()}
        </h3>
        <PriceChanges>
          {priceChange(data?.change, 'amount')}
          {priceChange(data?.change, 'percent')}
        </PriceChanges>
      </Right>
    </StyledHeader>
  )
}

export default Header
