import TextField from '@mui/material/TextField'

const Input = ({
  placeholder,
  variant = 'outlined',
  id,
  onChange,
  ...rest
}) => {
  return (
    <TextField
      id={id}
      placeholder={placeholder}
      variant={variant}
      InputLabelProps={{ shrink: false }}
      onChange={onChange}
      {...rest}
    />
  )
}

export default Input
