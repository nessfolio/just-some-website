import React, { useEffect, useState } from 'react'
import './Header.css'
import { Palette, Search } from 'lucide-react';
import useLocalStorage from '../../hooks/useLocalStorage';


const Header = () => {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme]);
    
    return (
        <header>
            <div>
                market.kg
            </div>

            <div className="search">
                <input type="text" placeholder='искать...'/>
                <button>
                    <Search />
                </button>
            </div>

            <div className='buttons'>
                <button onClick={
                    () => setTheme(theme === 'light' ? 'dark' : 'light')
                }>
                    <Palette />
                </button>
                <button>Разместить объявление</button>
            </div>
        </header>
  )
}

export default Header