import { Container, Text, VStack, Box, Input, Button, HStack, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Chat App</Text>
        <Box borderWidth="1px" borderRadius="lg" width="100%" height="60vh" overflowY="scroll" p={4}>
          {messages.map((message, index) => (
            <Box key={index} bg={message.sender === "You" ? "blue.100" : "green.100"} p={2} borderRadius="md" mb={2} alignSelf={message.sender === "You" ? "flex-end" : "flex-start"}>
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <Button onClick={handleSend}>Send</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;