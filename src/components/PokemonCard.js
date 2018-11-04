import React from 'react'
import {Card} from 'semantic-ui-react'

class PokemonCard extends React.Component {

    state = {
        card: true
    }

    handleClick = (event) => {
        this.setState({card: !this.state.card})
    }

    render() {
        const { pokemon, pokemon: {name,stats,sprites}} = this.props
        return (
                <Card onClick={this.handleClick} >
                    {this.state.card
                    ?   <div className="image">
                            <img alt="oh no!" src={sprites.front}/>
                        </div>
                    :   <div className="image">
                            <img alt="oh no!" src={sprites.back}/>
                        </div>

                    }
                    <div className="content">
                        <div className="header">{name}</div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="icon heartbeat red"/> {stats[stats.length - 1].value}
                            hp
                        </span>
                    </div>
                </Card>
        )
    }
}

export default PokemonCard
