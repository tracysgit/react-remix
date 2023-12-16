function LinkContactUs({ social, text }) {
  return (
    <a href={`mailto:${social.email.address}?subject=${social.email.subject}`}>
      {text ? (
        text
      ) : (
        social.email.address
      )}
    </a>
  )
}

export default LinkContactUs;