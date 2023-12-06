import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { signOut,onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function SideNav() {

  const navigate = useNavigate();


onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/auth/login");
  });


  return (
    <Nav defaultActiveKey="/" className="flex-column mt-5 bg-light p-2 pt-5 sideNav" style={{height:"95vh",width:"20%",position:"fixed",borderRadius:"20px" , background:"rgb(187, 132, 238)"}} >
    <ButtonGroup vertical >
    <Button  variant="light py-3" className='flex g-3'> <HomeIcon/>  <p className='fwb'>Home</p></Button>
    <Link to='/articles/saved' className='text-decoration-none w-100'><Button  variant="light py-3 " className='flex g-3 w-100 '><BookmarkIcon/><p className='fwb'>Saved </p></Button></Link>  
      <Button  variant="light py-3" className='flex g-3' ><PersonIcon/> <p className='fwb'>Profile</p></Button>


   <Link to='/auth/login'  className='text-decoration-none w-100'>  <Button  variant="light py-3" className='flex g-3 w-100'  onClick={()=>signOut(firebaseAuth)}><LogoutIcon/> <p className='fwb'> Log Out</p></Button> </Link>
      
     



      

  
    </ButtonGroup>
    </Nav>
  );
}

export default SideNav;