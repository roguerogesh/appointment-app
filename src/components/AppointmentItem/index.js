// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {eachList} = props
  const {titleName, appointmentDate, isStarred} = eachList

  const starredImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="list-item">
      <div>
        <h1 className="title-name">{titleName}</h1>
        <p className="date">
          format(new Date({appointmentDate}), 'dd MMMM yyyy, EEEE')
        </p>
      </div>
      <button testid="star" className="star-button">
        <img src={starredImg} alt="star" className="start-img" />
      </button>
    </li>
  )
}

export default AppointmentItem
