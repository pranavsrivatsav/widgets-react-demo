import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = (props) => {
    const [term, setTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    const search = async () => {
        const response = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        })
        setResults(response.data.query.search)
    }


    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                        </a>
                </div>
                <div className="content">
                    <div className="Header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    useEffect(() => {
        if (term) search()
        else setResults([])
    }, [debouncedTerm])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => clearTimeout(timerId)
    }, [term])

    return (
        <div className="ui container">
            <div className="ui form segment">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list segment">{renderedResults}</div>
        </div>
    )
}

export default Search