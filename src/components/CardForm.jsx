import CheckItem from './CheckItem'

const CardForm = ({ email, emailError, handleChange, handleSubmit }) => {
  return (
    <div className='card-form'>
      <form onSubmit={handleSubmit}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <CheckItem text="Product discovery and building what matters" />
        <CheckItem text="Measuring to ensure updates are a success" />
        <CheckItem text="And much more!" />
        <div className="label-group">
          <label htmlFor="email" className={emailError === '' ? '' : 'error'}>Email address</label>
          <span>{emailError}</span>
        </div>
        <input
          type="text"
          name="email"
          id="email"
          className={emailError === '' ? '' : 'error'}
          value={email}
          placeholder="email@company.com"
          onChange={handleChange}
        />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
      <div className="bg-img"></div>
    </div>
  )
}

export default CardForm
