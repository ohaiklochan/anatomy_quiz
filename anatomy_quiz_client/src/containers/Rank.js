import React, {Component} from 'react'
import Rankings from '../components/Rankings'
import { Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'


class Rank extends Component {

  render() {

    const rankings = this.props.users.map((u,i) => {
      return <Rankings key={i} user={u}/>
    });

    return (
      <div>
      <br></br>
      <Grid centered>
        <Grid.Column width={3}>
        <Header as='h4'>Current Rankings</Header>
        <table className="ui celled table">
          <thead>
            <tr><th>Username</th>
                <th>High Streak</th>
            </tr></thead>
            <tbody>
              {rankings}
            </tbody>
        </table>
        </Grid.Column>
      </Grid>

      </div>
    )
  }

}

const mapStateToProps = state => {
  return {users: state.stats.users}
}

export default connect(mapStateToProps)(Rank)