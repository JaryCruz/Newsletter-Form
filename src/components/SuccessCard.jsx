import checkIcon from '../assets/icon-list.svg'

const SuccessCard = ({ email }) => {
  return (
    <div className="card-success">
      <img src={checkIcon} alt="" />
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
      <button>Dismiss message</button>
    </div>
  )
}

export default SuccessCard