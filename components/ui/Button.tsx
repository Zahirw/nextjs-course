import Link from "next/link"

import classes from './Button.module.css'

type Props = {
  link: string
  children: React.ReactNode,
  onClick: (ev: React.MouseEvent<HTMLElement>) => void;
  type: string
}

const Button = (props: Props) => {
  const { link, type } = props

  if (type === 'link') {
    return (
      <Link href={link} legacyBehavior>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    )
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button