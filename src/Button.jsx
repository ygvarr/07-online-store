import classNames from 'classnames'

const Button = props => {
  console.log(props)
  return (
    <button
      className={classNames('button', { 'button--outline': props.outline })}
    >
      {props.children}
    </button>
  )
}

export default Button
