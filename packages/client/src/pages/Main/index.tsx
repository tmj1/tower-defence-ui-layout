import { LogoText } from '../../components/LogoText'
import { Link } from '../../components/Link/index'
import './index.css'
import { RoutesNameList } from '../../constant'

export function Main() {
  const isAuth = false
  return (
    <div className="main-page-wrapper">
      <LogoText />
      <div className="button-wrapper">
        <Link href="#" text="Начать игру" view="primary" />
        {!isAuth && (
          <Link href={RoutesNameList.Login} text="Войти" view="secondary" />
        )}
      </div>
    </div>
  )
}
