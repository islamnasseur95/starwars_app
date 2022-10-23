import react, { useState, useContext, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    getStarWarsFilmsApi
} from '../api'

export const FilmsContext = createContext({})

export const FilmsProvider = ({ children: {} }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [getStarWarsFilms, setGetStarWarsFilms] = useState([])
}

