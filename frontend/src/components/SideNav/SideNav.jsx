import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


function SideNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column mt-5 bg-light p-2 pt-5" style={{height:"90vh",width:"15%",position:"fixed",borderRadius:"20px"}} >
    <ButtonGroup vertical >
    <Button  variant="light py-3" className='flex g-3'> <HomeIcon/>  <p className='fwb'>Home</p></Button>
    <Link to='/articles/saved' className='text-decoration-none w-100'><Button  variant="light py-3 " className='flex g-3 w-100 '><BookmarkIcon/><p className='fwb'>Saved </p></Button></Link>  
      <Button  variant="light py-3" className='flex g-3' ><PersonIcon/> <p className='fwb'>Profile</p></Button>


   <Link to='/auth/login'  className='text-decoration-none w-100'>  <Button  variant="light py-3" className='flex g-3 w-100'><LogoutIcon/> <p className='fwb'> Log Out</p></Button> </Link>
      
     



      

  
    </ButtonGroup>
    </Nav>
  );
}

export default SideNav;