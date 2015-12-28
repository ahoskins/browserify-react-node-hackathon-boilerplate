'use strict'

const React = require('react')

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: 'hello state'
        }
    }

	render () {
        return (
            <div>
                {this.state.data}
			</div>
		)
	}
}

module.exports = App
