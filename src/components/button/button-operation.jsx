import './button.css'

function ButtonOperation({value, click}) {

    return (
      <>
        <button className='operation' onClick={click}>
          {value}
        </button>
      </>
    )
}

export default ButtonOperation