import PropTypes from 'prop-types';
import { Typography } from "@mui/material"
const PageTitle = ({title})=>{
  return(
    <>
    
  <Typography variant="h2" sx={{textAlign:'center', mt:10}}>{title}</Typography>
    </>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string
};

export default PageTitle