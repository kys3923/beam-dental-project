import axios from 'axios'
import { useState, useEffect } from 'react'

const Leadership = (props) => {

  // state
  const [leaders, setLeaders] = useState([])

  // GET json DATA
  useEffect(() => {
    // recommend to use .env for security reason
    axios.get('https://beamtech.github.io/marketing-kata-html/leadership-team.json')
    .then(response => {
      if (response.data.length < 1) {
        setLeaders([
          {
            name: "no leaders found",
            url: "not available",
            title: "no leaders found",
            image: "not available"
          }
        ])
      }
      else {
        setLeaders(response.data)
      }
    })
    .catch(err => {
      console.log('error found @ fetching leader data')
    })
  }, [])

  // mapping JSON
  // console.log(leaders)
  let leadersJSON =
    leaders.length === 0 ?
    <div className="leadership_card">
      <p>no leaders found</p>
    </div>
    :
    leaders.map((card, i) => {
      let name = `${card.name}`
      let url = `${card.url}`
      let title = `${card.title}`
      let image = `${card.image}`
      return (
        <div className="leadership_card" key={i}>
          <img src={image} alt="profile"/>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      )
    })

  return (
    <section>
      <h3>Leadership section</h3>
      <div className="card_container">
        {leadersJSON}
      </div>
    </section>
  );
}
export default Leadership