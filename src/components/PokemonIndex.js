import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import {Search, Dropdown} from 'semantic-ui-react'
import _ from 'lodash'

const options = [
    { key: 1, text: 'all', value: 'all'},
    { key: 2, text: 'water', value: 'water'},
    { key: 3, text: 'flying', value: 'flying'},
    { key: 4, text: 'poison', value: 'poison'},
    { key: 5, text: 'electric', value: 'electric'},
    { key: 6, text: 'normal', value: 'normal'},
    { key: 7, text: 'bug', value: 'bug'},
    { key: 8, text: 'fairy', value: 'fairy'},
    { key: 9, text: 'ground', value: 'ground'},
    { key: 10, text: 'fire', value: 'fire' }
]

class PokemonPage extends React.Component {

    state = {
        poke: {},
        searchTerm: "",
        option: "all"
    }

    componentDidMount() {
        this.pokemon()
    }

    pokemon = () => {
        fetch('http://localhost:3000/pokemon')
        .then(r => r.json())
        .then(r => this.setState({poke: r}))
    }

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleChange = (event) => {
        this.setState({option: event.target.innerText})
    }

    render() {
        const searchPoke = Object.values(this.state.poke).filter(p => p.name.includes(this.state.searchTerm))
        const dropdownPoke = this.state.option === "all" ? searchPoke : searchPoke.filter(p => p.types.includes(this.state.option))
        console.log(dropdownPoke)

        return (<div>
            <h1>Pokemon Searcher</h1>
            <br/>
            <Search onChange={this.handleSearch} onSearchChange={this.handleSearch}/>
            <br/><br/>
            <div>Choose a type: <br/><Dropdown clearable="clearable" options={options} selection={true} onChange={this.handleChange}></Dropdown></div>
            <br/><br/>
            <PokemonForm/>
            <br/><br/>
            <PokemonCollection pokemon={dropdownPoke}/>
        </div>)
    }
}

export default PokemonPage
