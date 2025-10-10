import { useState } from 'react'
import { HeaderButton, HeaderContainer } from './styles'
import Login from '../Login'
import Contact from '../Contact'
import { Link } from 'react-router-dom'

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
      <HeaderContainer>
        <div className="container">
          <h1>B2B Soluctions</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <HeaderButton type="button" onClick={openContactModal}>
                  Contato
                </HeaderButton>
              </li>
              <li>
                <HeaderButton type="button" onClick={openLoginModal}>
                  Log-in
                </HeaderButton>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderContainer>
      <Login isVisible={loginModal.isVisible} onClose={closeLoginModal} />
      <Contact isVisible={contactModal.isVisible} onClose={closeContactModal} />
    </>
  )
}

export default Header
