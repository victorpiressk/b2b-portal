import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import closeIcon from '../../assets/images/close.png'
import InputGroup from '../InputGroup'
import { registerCommerce } from '../../store/reducers/CommerceSlice'
import { CommerceStatus } from '../../utils/enums/CommerceStatus'
import Button from '../Button'
import * as S from './styles'

const AddCommerce = ({ isVisible, onClose }: ModalProps) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [saleValue, setSaleValue] = useState(Number)

  const sendCommerce = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      registerCommerce({
        title,
        description,
        saleValue,
        status: CommerceStatus.REQUEST_PENDING,
        operationType: 'REQUEST'
      })
    )
  }
  return (
    <S.Modal className={isVisible ? 'visivel' : ''}>
      <S.ModalContent className="container">
        <header>
          <img src={closeIcon} alt="Ícone de fechar" onClick={onClose} />
        </header>
        <form onSubmit={sendCommerce}>
          <h3>Nova Requisição de compra</h3>
          <InputGroup>
            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titulo"
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Para pedido: Informe o tipo de produto e quantidade de itens.
              Para serviço: Descreva o tipo de serviço e informe os prazos de inicio/fim."
              required
            />
            <input
              value={saleValue}
              type="tel"
              onChange={(e) => setSaleValue(Number(e.target.value))}
              placeholder="Valor da Proposta"
              required
              min="0"
            />
          </InputGroup>
          <Button
            type="submit"
            buttonTitle="Clique aqui para enviar sua proposta"
          >
            Enviar
          </Button>
        </form>
      </S.ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </S.Modal>
  )
}

export default AddCommerce
