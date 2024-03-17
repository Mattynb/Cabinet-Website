import {
  AppBar,
  Button,
  Stack
} from '@mui/material'


export default function Footer() {
  return (
    <AppBar className='footer' position='static'>
      
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
          <p class="bold">Plan Ahead Constructions</p>
          <p class="icon">Kitchen & Bath</p>
          <p class="gray">50 New Salem Street,<br></br>
          Wakefield, MA 01880, USA</p>
          </div>
          <div>
          <p class="gray">Links<br/></p>
          <Stack direction="row" spacing={2}>
            <Button href="#">Home</Button>
            <Button href="#">Shop</Button>
            <Button href="#">About</Button>
            <Button href="#">Galery</Button>
          </Stack>
          </div>
          <div>
          <p class="gray">Newletter</p>
          <p>_Enter Your Email Address_ <a href="#">SUBSCRIBE</a></p>
          </div>
        </Stack>
        <br/>
        
        <div>
        <hr/>2023 Plan Ahead Constructions. All rights reverved
        </div>
        
    </AppBar>
  )
}
