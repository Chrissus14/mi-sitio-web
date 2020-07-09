import React, { useEffect, useState } from "react"
// import repos from "../data/repos"
import Repo from "./repo"

export default () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState([])

  useEffect(() => {
    const myRepos = sessionStorage.getItem("repos")
    let data
    if (myRepos) {
      data = JSON.parse(myRepos)
      setReposCount(data.length)
      data = data.slice(1, 13)
      return setRepos(data)
    }
    const fetchRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/Chrissus14/repos"
      )
      data = await response.json()
      setReposCount(data.length)
      sessionStorage.setItem("repos", JSON.stringify(data))
      data = data.slice(1, 13)
      setRepos(data)
    }
    fetchRepos()
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Mi trabajo en open source</h2>
        <p>Colaboración y contribución de código</p>
      </header>
      <ul className="repos-list">
        {repos.map(repo => {
          return <Repo repo={repo} key={repo.id} />
        })}
      </ul>
      <div className="mt-8 text-center">
        <a
          className="btn"
          href="https://github.com/Chrissus14"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más en Github ({reposCount})
        </a>
      </div>
    </div>
  )
}
