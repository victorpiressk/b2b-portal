import { styled } from 'styled-components'
import { colors } from '../../globalStyles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 786px;
  width: 100%;
  border-radius: 12px;
  background-color: ${colors.purple};
  color: ${colors.white};
  padding: 8px;

  header {
    display: flex;
    justify-content: end;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 24px;
  }
`
