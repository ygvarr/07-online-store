import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas } from './redux/actions/pizzas'

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route
            exact
            path='/'
            render={() => <Home items={this.props.items} />}
          />
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = {
  setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
