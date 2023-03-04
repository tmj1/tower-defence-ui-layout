import { Avatar } from '../../../components/Avatar'
import { FC, memo } from 'react'
import './index.css'

export type MessageProps = {
  userName: string
  text: string
  date: string
}
export const Message: FC<MessageProps> = memo(({ userName, text, date }) => {
  return (
    <div className="message-wrapper">
      <div className="user-wrapper">
        <Avatar size="small" />
        <p className="user-name">{userName}</p>
      </div>

      <p className="message">{text}</p>
      <p className="send-time">{date}</p>
    </div>
  )
})
