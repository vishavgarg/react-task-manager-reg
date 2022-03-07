import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const DashboardHeader = ({ title, onAdd, showAdd }) => {
  // const location = useLocation()

  return (
    <header className='header'>
      <h2>{title}</h2>
      {/* {location.pathname === '/' && ( */}
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          click={onAdd}
        />
       {/* )}  */}
    </header>
  )
}

DashboardHeader.defaultProps = {
  title: 'Task Tracker',
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default DashboardHeader