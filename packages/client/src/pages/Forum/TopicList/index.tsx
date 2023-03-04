import { Link } from '../../../components/Link'
import './index.css'

export function TopicsList() {
  const topisDataArray = [
    { href: '/forum/1', text: 'Как играть в игру' },
    { href: '/forum/2', text: 'Кто самый сильный герой' },
    { href: '/forum/3', text: 'Когда будет новый сезон?' },
    {
      href: '/forum/4',
      text: 'Ребята, а кто нибудь уже прошел все уровни?',
    },
    { href: '/forum/5', text: 'Как играть в игру' },
    { href: '/forum/6', text: 'Кто самый сильный герой' },
    { href: '/forum/7', text: 'Когда будет новый сезон?' },
    {
      href: '/forum/8',
      text: 'Ребята, а кто нибудь уже прошел все уровни?',
    },
  ]
  return (
    <ul className="topics-list">
      {topisDataArray.map(data => (
        <li className="topics-list__item" key={data.href}>
          <Link {...data} view="ghost" />
        </li>
      ))}
    </ul>
  )
}
