import { getCurrYear } from '~/utilities/utilities';

function Footer() {
  return (
    <footer>
      <p>&copy;
        <span id="copyright-date">{getCurrYear()}</span> Seanne Buoy
      </p>
    </footer>
  )
}

export default Footer;