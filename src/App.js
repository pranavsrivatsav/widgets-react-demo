import React, { useState, useEffect } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Header from './components/Header'

const items = [
    {
        title: 'What is React?',
        content: 'Qui commodo sit aliqua velit culpa.Nisi mollit aute do adipisicing nulla consequat anim do aliquip commodo consectetur cillum incididunt et. Laboris aliqua occaecat eu non reprehenderit consequat mollit do. Consectetur velit irure eu exercitation tempor. Enim irure sunt eu proident minim. Veniam aliquip enim minim officia elit.'
    },
    {
        title: 'Why use React?',
        content: 'Lorem sunt irure anim elit deserunt consectetur sint labore et aliquip.Consequat est veniam aute magna magna dolor reprehenderit tempor duis culpa ipsum sunt est.'
    },
    {
        title: 'How to use React?',
        content: 'Qui sint enim mollit sit ea sit veniam.Lorem nisi velit nisi sint ut tempor commodo.In officia ad fugiat occaecat ad nisi.Velit incididunt amet eu est dolore.Ex anim consectetur incididunt laborum occaecat aliquip minim deser.'
    }

]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    }, {
        label: 'The Color Green',
        value: 'green'
    }, {
        label: 'A Shade of Blue',
        value: 'Blue'
    }]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)

        return () => window.removeEventListener('popstate', onLocationChange)
    }, [])

    const componentPath = {
        '/': <Accordion items={items} />,
        '/search': <Search />,
        '/dropdown': <Dropdown
            label="Select a Color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            demoMode={true}
        />,
        '/translate': <Translate />
    }

    return (
        <div>
            <Header />
            {componentPath[window.location.pathname]}
        </div>
    )
}

export default App
