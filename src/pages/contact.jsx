import { TextField, Button, Container, Box } from '@mui/material';
import Footer from "../components/Footer"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"

const Contact = ()=>{
  return(
    <>
    <Header />
    <PageTitle title="Contact us" />
    <Container maxWidth="sm">
      
      <form>
        <TextField
          label="Your Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Your Email"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <Box mt={2}>
          <Button variant="contained"  type="submit" sx={{backgroundColor:'#000', color:'#fff'}}>
            Submit
          </Button>
        </Box>
      </form>
    </Container>
    <Footer />
    </>
  )
}

export default Contact