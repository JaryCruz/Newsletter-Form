import checkIcon from '../assets/icon-list.svg'

const CheckItem = ({ text }) => {
  return (
    <div className='check-item'>
      <img src={checkIcon} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default CheckItem