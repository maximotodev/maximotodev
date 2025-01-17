// components/Form.tsx

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { Box, Button, TextField } from "@mui/material";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { width, height } = useWindowSize();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => router.push("/"), 5000);
    }
  };

  return (
    <Box
      sx={{
        label: { color: "var(--foregroundColor)", opacity: 0.7 },
        fieldset: {
          borderColor: "var(--foregroundColor)",
          opacity: 0.5,
          borderWidth: 0.1,
        },
        ".MuiTextField-root:hover label": {
          color: "var(--primaryColor)",
        },
        ".MuiTextField-root:hover fieldset": {
          borderColor: "var(--primaryColor)",
        },
        ".Mui-focused fieldset": { borderColor: "#fff", display: "none" },
        input: { color: "var(--foregroundColor)" },
        textarea: { color: "var(--foregroundColor)" },
        pr: { md: 5 },
      }}
    >
      {isSuccess && <Confetti width={width} height={height} />}
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div> */}
        <TextField
          required
          type="text"
          name="name"
          id="name"
          label="Name"
          placeholder="Enter your name"
          size="small"
          fullWidth
          margin="dense"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          type="email"
          name="email"
          id="email"
          label="Email"
          placeholder="Enter your email"
          size="small"
          fullWidth
          margin="dense"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          name="message"
          id="message"
          label="Message"
          size="small"
          margin="dense"
          fullWidth
          multiline
          maxRows={4}
          minRows={3}
          value={formData.message}
          onChange={handleChange}
        />
        {/* <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button> */}
        <Button
          disabled={isLoading}
          type="submit"
          size="medium"
          variant="outlined"
          sx={{ mt: 2 }}
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>

        {isSuccess && (
          <p className="success-message">Message sent successfully!</p>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </Box>
  );
};

export default ContactForm;
