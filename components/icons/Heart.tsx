const Heart = ({ ...props }) => {
  return (
    <svg
      height="1em"
      fill="currentColor"
      width="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M16.243 5.843c.801 0 1.555.312 2.121.879a3.003 3.003 0 010 4.243l-2.121 2.121-2.121 2.121L12 17.328l-2.121-2.121-2.121-2.121-2.121-2.121a2.98 2.98 0 01-.879-2.121c0-.801.312-1.555.879-2.121a2.98 2.98 0 012.121-.879c.801 0 1.555.312 2.121.879l.707.707L12 8.843l1.414-1.414.707-.707a2.98 2.98 0 012.122-.879m0-2c-1.28 0-2.559.488-3.536 1.464L12 6.015l-.707-.707c-.976-.976-2.256-1.464-3.536-1.464s-2.559.487-3.535 1.464a5 5 0 000 7.071L6.343 14.5l2.121 2.121L12 20.157l3.536-3.536 2.121-2.121 2.121-2.121a5 5 0 00-3.535-8.536z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  )
}

export default Heart
