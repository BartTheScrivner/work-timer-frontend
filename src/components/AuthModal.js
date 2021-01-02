import React from 'react'
import { Modal, Menu, Segment } from 'semantic-ui-react'
import Signup from './Signup'
import Login from './Login'

function AuthModal(props) {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState('login')

  return (
    <Modal
      className="auth-modal"
      size="tiny"
      centered={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<li className="nav-item">Login</li>}
    >
      <Menu attached='top' tabular>
        <Menu.Item
          name="login"
          active={tab === 'login'}
          onClick={() => setTab('login')}
          > Log In </Menu.Item>
          <Menu.Item
          name="signup"
          active={tab === 'signup'}
          onClick={() => setTab('signup')}
          > Sign Up </Menu.Item>
      </Menu>
      
      <Segment className="auth-modal" attached='bottom'>
        {tab === 'login' ? <Login setOpen={setOpen}/> : <Signup setOpen={setOpen}/> }
      </Segment>
    </Modal>
  )
}

export default AuthModal;
