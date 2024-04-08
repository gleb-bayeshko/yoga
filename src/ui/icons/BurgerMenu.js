const BurgerMenu = ({ className, ...rest }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    ><script xmlns="" />
      <path d="M4.125 7.125H19.875M4.125 12H19.875M4.125 16.875H19.875" stroke="#222222" strokeWidth="2.25" strokeMiterlimit="10" strokeLinecap="round" />
      <script xmlns="" />
    </svg>
  )
}

export default BurgerMenu
