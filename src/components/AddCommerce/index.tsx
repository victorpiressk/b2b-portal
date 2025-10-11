import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputGroup from '../InputGroup'
import Button from '../Button'
import { clear } from '../../store/reducers/CommerceSlice'
import * as enums from '../../utils/enums/CommerceStatus'
import { useRegisterMutation } from '../../services/api'
import * as S from './styles'
import closeIcon from '../../assets/images/close.png'

const AddCommerce = ({ isVisible, onClose }: ModalProps) => {
  const dispatch = useDispatch()
  const [register, { data, isSuccess, isLoading, reset }] =
    useRegisterMutation()

  const form = useFormik({
    initialValues: {
      title: '',
      description: '',
      saleValue: '',
      operationType: '',
      status: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      saleValue: Yup.string().required('O campo é obrigatório').min(0)
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await register({
          title: values.title,
          description: values.description,
          saleValue: Number(values.saleValue),
          operationType: enums.CommerceType.REQUEST,
          status: enums.CommerceStatus.PENDING
        }).unwrap()

        dispatch(clear())
        resetForm()
      } catch (error) {
        console.error('Erro ao registrar a requisição:', error)
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const registerCompleted = () => {
    dispatch(clear())
    reset()
    form.resetForm()
  }

  return (
    <>
      <S.Modal className={isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <img src={closeIcon} alt="Ícone de fechar" onClick={onClose} />
          </header>
          <h3>Nova Requisição de compra</h3>
          {isSuccess && data ? (
            <S.ResponseContainer>
              <div>
                <p>Solicitação enviada ao comprador</p>
              </div>
              <Button
                type="button"
                onClick={registerCompleted}
                buttonTitle="Clique aqui para finalizar"
              >
                Concluir
              </Button>
            </S.ResponseContainer>
          ) : (
            <form onSubmit={form.handleSubmit}>
              <InputGroup>
                <input
                  name="title"
                  type="text"
                  placeholder="Titulo"
                  value={form.values.title}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('title') ? 'error' : ''}
                />
                <textarea
                  name="description"
                  placeholder="Para pedido: Informe o tipo de produto e quantidade de itens.
              Para serviço: Descreva o tipo de serviço e informe os prazos de inicio/fim."
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('description') ? 'error' : ''}
                />
                <input
                  name="saleValue"
                  type="number"
                  placeholder="Valor da Proposta"
                  value={form.values.saleValue}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('saleValue') ? 'error' : ''}
                />
              </InputGroup>
              <Button
                type="submit"
                buttonTitle="Clique aqui para enviar sua proposta"
                onClick={form.handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={onClose}></div>
      </S.Modal>
    </>
  )
}

export default AddCommerce
