import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {  db } from "../firebase";
import { addDoc, collection,query,
  onSnapshot,
   } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";




const ChatUI = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "messages")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(fetchedMessages);
    });
    return () => unsubscribe;
  }, []);

  const handleSend =async (event) => {
      event.preventDefault();
      if (message.trim() === "") {
        alert("Enter valid message");
        return;
      }
      await addDoc(collection(db, "messages"), {
        message: message,
   
      });
      setMessage("");
    
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  console.log(messages)


  return (
    <>
        <Header />
        <Container maxWidth="lg">

    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        mt:8
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={message}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
              sx={{background:'#000'}}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
        </Container>
    <Footer />
    </>
  );
};

const Message = ({ message }) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "#000" }}>
          
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            backgroundColor:  "#000" ,
            color:'#fff',
            borderRadius: "20px 20px 5px 20px",
            ml : 2
          }}
        >
          <Typography variant="body1">{message?.message}</Typography>
        </Paper>
      </Box>
    </Box>
  );


};

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired,
  })
};


export default ChatUI;