function Button({ type, purpose, className, onClick, children }) {
  return (
    <button 
      type={type} 
      className={className}
      onClick={onClick}
    >
      {purpose == "back" && (
      <svg aria-hidden="true" focusable="false" className="icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M7 12.5 17.293 2l.707.707L8.414 12.5 18 22.293l-.707.707L7 12.5z"></path></svg>
      )}
      {children}
    </button>
  )
}

export default Button;