import { PulseLoader } from 'react-spinners'
import { colors } from '../../globalStyles'
import { LoaderContainer } from './styles'

const Loader = ({ isLoading = false, isError = false }: LoaderProps) => {
  if (isLoading) {
    return (
      <LoaderContainer>
        <PulseLoader color={colors.purple} />
      </LoaderContainer>
    )
  }

  if (isError) {
    return (
      <LoaderContainer>
        <p>Erro ao carregar dados.</p>
      </LoaderContainer>
    )
  }

  return null
}

export default Loader
