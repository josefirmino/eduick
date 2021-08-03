import { Component } from "react";
import styles from './styles.module.scss'

export class RadioBtn extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className={styles.radioButtons}>
        <input
          id="selectedTeacher"
          value="teacher"
          name="cardRadio"
          type="radio"
          checked
          onChange={this.handleChange}
          />
          <label htmlFor="selectedTeacher">i’m a teacher</label>
        <input
          id="selectedStudent"
          value="student"
          name="cardRadio"
          type="radio"
          onChange={this.handleChange}
          />
          <label htmlFor="selectedStudent">i’m a student</label>
      </div>
    );
  }
}