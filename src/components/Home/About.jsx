import { Container, Grid, Typography } from "@mui/material"
import { motion } from 'framer-motion';
const About = ()=>{

  return(
    <Container maxWidth="lg" sx={{mt:8}}>
<Grid container spacing={2} sx={{alignItems:'center'}}>
        <Grid item xs={12} lg={6}>
          <motion.div  initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration:3 }}>
          <Typography variant="h2" sx={{color:'#000'}}>Who Are We</Typography>
          <Typography sx={{color:'#000', mt:3,lineHeight:1.9}}>Welcome to Wardlin Innovations, the convergence point where innovation intertwines seamlessly with inspiration, and creativity stands as the beating heart of our organization. From its inception, Wardlin has been driven by a vision that goes beyond the ordinary; we exist not just as a company but as a pulsating hub of ideas, a dynamic force for change, and a nurturing haven for passionate minds.

In the tapestry of s story, every thread is woven with the spirit of redefining possibilities. Our journey is not merely a trajectory of growth  a symphony of ideation, a canvas where each stroke of creativity adds a new layer to the ever-evolving landscape of innovation.

</Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}>
         <img  src="/assets/images/home-about.jpg" alt="" style={{width:'100%'}}/>
          </motion.div>
        </Grid>
</Grid>
    </Container>
  )
}
export default About