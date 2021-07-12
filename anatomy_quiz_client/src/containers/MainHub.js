import React, { Component } from 'react'
import Rank from './Rank'
import { connect } from 'react-redux'
import { rankedUsers } from '../actions/AllActions'

class MainHub extends Component {

    componentWillUpdate() {
        this.props.rankedUsers()
    }

    render() {
        return (
            <div><Rank /></div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rankedUsers: () => dispatch(rankedUsers())
    }
}

export default connect(null, mapDispatchToProps) (MainHub)