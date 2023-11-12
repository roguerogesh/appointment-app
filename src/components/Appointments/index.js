import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {titleName: '', appointmentDate: '', appointmentList: []}

  onAddAppointment = event => {
    event.preventDefault()

    const {titleName, appointmentDate} = this.state

    const newAppointment = {
      id: uuidv4(),
      titleName,
      appointmentDate,
      isStarred: true,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleName: '',
      appointmentDate: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({titleName: event.target.value})
  }

  onChangeDate = event => {
    this.setState({appointmentDate: event.target.value})
  }

  render() {
    const {titleName, appointmentDate, appointmentList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="add-appointment-container">
            <div>
              <h1 className="heading">Add Appointment</h1>
              <form className="form-container" onSubmit={this.onAddAppointment}>
                <label htmlFor="title" className="title">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  className="title-bar"
                  placeholder="Title"
                  value={titleName}
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="date" className="title">
                  DATE
                </label>
                <input
                  type="date"
                  className="title-bar"
                  id="date"
                  value={appointmentDate}
                  onChange={this.onChangeDate}
                />

                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <div className="appointment-and-starred">
            <h1 className="appointments">Appointments</h1>
            <button type="button" className="starred-button">
              Starred
            </button>
          </div>
          <ul className="list-container">
            {appointmentList.map(eachList => (
              <AppointmentItem eachList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
