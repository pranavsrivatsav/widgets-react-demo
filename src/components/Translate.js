//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const LanguageOptions = [
    {
        label: 'Afrikaans',
        value: 'af'
    }, {
        label: 'Arabic',
        value: 'ar'
    }, {
        label: 'Hindi',
        value: 'hi'
    }, {
        label: 'Tamil',
        value: 'ta'
    }
]

const Translate = () => {
    const [text, setText] = useState('')
    const [language, setLanguage] = useState(LanguageOptions[0])

    return (
        <div className="ui container segment form">
            <div >
                <div className="field">
                    <div className=" ui label">
                        <label>Enter Text</label>
                    </div>
                    <input
                        type="input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <div className=" ui label">
                        <label>Output</label>
                    </div>
                    <input
                        type="input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <br></br>
            <Dropdown
                label="Select a Language"
                options={LanguageOptions}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <br></br>
            <Convert language={language} text={text} />
        </div>
    )
}

export default Translate
