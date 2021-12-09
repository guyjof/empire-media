import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { loadData } from './store/actions/rates-actions'

import Overview from './pages/Overview'
import History from './pages/History'

import Header from './components/Header'
import Nav from './components/Nav'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled-components/GlobalStyles'
import { theme } from './components/styled-components/Theme'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadData())
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <Nav />
        <Switch>
          <Route path='/' exact component={Overview} />
          <Route path='/history' exact component={History} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
