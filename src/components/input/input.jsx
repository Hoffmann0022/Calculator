import './input.css'

function Input({value}) {

  return (
    <>
      <input value={value} type="text" name="number" placeholder='0' disabled />
    </>
  )
}

export default Input
