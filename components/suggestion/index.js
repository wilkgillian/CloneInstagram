import { useEffect, useState } from 'react'
import './style.css'
export function Suggestion() {
  const [suggestion, setSuggestions] = useState([])
  const [limitUsers, setLimitUsers] = useState(5)
  const slice = suggestion.slice(0, limitUsers)
  useEffect(() => {
    fetch(`https://api.github.com/users/wilkgillian/followers`)
      .then(response => {
        return response.json()
      })
      .then(result => {
        setSuggestions(result)
      })
      .catch(err => {
        throw new Error(err)
      })
  }, [])
  return (
    <div className="container-suggestion">
      <div className="header-suggestion">
        <img
          src="https://avatars.githubusercontent.com/u/92535322?v=4"
          alt="img not found"
        />
        <div className="user-infos-suggestion">
          <div className="infos">
            <span>wilk.gillian</span>
            <p>Wilk Gillian</p>
          </div>
          <button className="switch">Mudar</button>
        </div>
      </div>
      <div className="header-main-suggestion">
        <p>Suggestion for you</p>
        <span>See All</span>
      </div>
      <div className="user-suggestion">
        {slice.map((suggestion, key) => (
          <div className="infos-suggestion" key={key}>
            <img
              src={`https://github.com/${suggestion.login}.png`}
              alt="not found"
            />
            <div className="info-suggestion">
              <span>{suggestion.login}</span>
              <p>Follow by alokoficial</p>
            </div>
            <button className="follow">Follow</button>
          </div>
        ))}
      </div>
      <footer className="footer-suggestion">
        <p>
          {' '}
          About &bull; Help &bull; Press &bull; API &bull; Careers &bull;
          Privacy &bull; Terms &bull; Local &bull; Main Accounts &bull; Hashtags
          &bull; Language
        </p>
        <p>&copy; 2021 WILK FROM BRAZIL</p>
      </footer>
    </div>
  )
}
