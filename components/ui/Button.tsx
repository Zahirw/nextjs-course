import Link from "next/link"

import classes from './Button.module.css'
type Props = {
  link: string
  children: any,
}

const Button = (props: Props) => {
  const { link } = props
  return (
    <Link href={link} legacyBehavior>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  )
}

export default Button