import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'
import Contact from '../Contact'
import * as S from './styles'

const Header = () => {
  const [loginModal, setLoginModal] = useState<ModalState>({ isVisible: false })
  const [contactModal, setContactModal] = useState<ModalState>({
    isVisible: false
  })

  const openLoginModal = () => setLoginModal({ isVisible: true })
  const closeLoginModal = () => setLoginModal({ isVisible: false })
  const openContactModal = () => setContactModal({ isVisible: true })
  const closeContactModal = () => setContactModal({ isVisible: false })

  return (
    <>
      <S.HeaderContainer>
        <div className="container">
          <h1>B2B Soluctions</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <S.HeaderButton type="button" onClick={openContactModal}>
                  Contato
                </S.HeaderButton>
              </li>
              <li>
                <S.HeaderButton type="button" onClick={openLoginModal}>
                  Log-in
                </S.HeaderButton>
              </li>
            </ul>
          </nav>
        </div>
      </S.HeaderContainer>
      <Login isVisible={loginModal.isVisible} onClose={closeLoginModal} />
      <Contact isVisible={contactModal.isVisible} onClose={closeContactModal} />
    </>
  )
}

export default Header
