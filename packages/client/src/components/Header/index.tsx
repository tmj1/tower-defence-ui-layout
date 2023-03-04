import { NavLink } from './NavLink'
import { getImagePath, RoutesNameList } from '../../constant'
import './index.css'

interface ILinkList {
  href: string
  text: string
}

export default function HeaderComponent() {


  const linkList: ILinkList[] = [
    { href: RoutesNameList.Main, text: 'Главная' },
    {
      href: RoutesNameList.Profile,
      text: 'Игра',
    },
    {
      href: RoutesNameList.Leaderboard,
      text: 'Рейтинг',
    },
    { href: RoutesNameList.Forum, text: 'Форум' },

  ]
  return (
    <header className="header-component">
      <nav className="navigation-wrapper">
        <div
          className="logo"
          style={{
            backgroundImage: `url(../../assets/images/Logo_header.png)`,
          }}>
        </div>
        <ul className="navigation-list">
          {linkList.map(data => (
            <li key={data.href}>
              <NavLink {...data} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
