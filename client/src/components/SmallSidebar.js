import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext} from '../context/appContext'
import NavLinks from './NavLinks'
import Logo from './Logo'

export const SmallSidebar = () => {
  const {toggleSidebar, showSidebar} = useAppContext()
  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar && 'show-sidebar'}`}>
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar