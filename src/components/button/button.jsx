import './button.css'

export function ButtonNumber({value, click}) {

  return (
    <>
      <button className="number"onClick={click}>
        {value}
      </button>
    </>
  )
}

export default ButtonNumber


