import { useState } from 'react'
import { HeaderButton, HeaderContainer } from './styles'
import LoginModal from '../LoginModal'

interface ModalState {
  isVisible: boolean
}

const Header = () => {
  const [modal, setModal] = useState<ModalState>({ isVisible: false })

  const openModal = () => setModal({ isVisible: true })
  const closeModal = () => setModal({ isVisible: false })

  return (
    <>
      <HeaderContainer>
        <div className="container">
          <h1>B2B Soluctions</h1>
          <nav>
            <ul>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <HeaderButton type="button" onClick={openModal}>
                  Log-in
                </HeaderButton>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderContainer>
      <LoginModal isVisible={modal.isVisible} onClose={closeModal} />
    </>
  )
}

export default Header
