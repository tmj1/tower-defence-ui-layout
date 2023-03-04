import type { FC, FormHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import { Title } from '../Title'
import './index.css'

export type FormProps = {
  title?: string
  className?: string
  formItems: ReactNode
  formActions: ReactNode
} & FormHTMLAttributes<HTMLFormElement>

/**
 * Базовый мемоизированный компонент формы.
 * В качестве props также принимает все стандартные HTML-атрибуты для `<form>`.
 * В prop FormItems ожидаются элементы формы, в prop FormBottom ожидаются кнопки.
 */
export const Form: FC<FormProps> = ({ title, className, ...props }) => {
  return (
    <form className={classNames('form', className)} {...props}>
      <div className="form__body">
        {title && <Title className={'form__title'} text={title} />}
        <div className="form__items">{props.formItems}</div>
        <div className="form__bottom">{props.formActions}</div>
      </div>
    </form>
  )
}
