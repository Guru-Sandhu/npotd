import { API_KEY } from '../secrets'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

export function apod() {
  return fetch(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data)
}
