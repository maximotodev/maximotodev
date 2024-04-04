import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
 
      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
      // Handle response if necessary
      const data = await response.json()
      console.log(data)
    } catch (error) {
            // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false)

    }
  }

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
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your name"
          size="small"
          fullWidth
          margin="dense"
          value={values.name}
          onChange={handleInputChange}
        />
        <TextField
          required
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          size="small"
          fullWidth
          margin="dense"
          value={values.email}
          onChange={handleInputChange}
        />
        {/* <TextField
          type="text"
          label="Subject"
          size="small"
          fullWidth
          margin="dense"
          value={formData.subject}
          onChange={(e) =>
            setFormData({
              ...formData,
              subject: e.target.value,
            })
          }
        /> */}
        <TextField
          required
          type="text"
          name="message"
          label="Message"
          size="small"
          margin="dense"
          fullWidth
          multiline
          maxRows={4}
          minRows={3}
          value={values.message}
          onChange={handleInputChange
          }
        />
        <Button disabled={isLoading} type="submit" size="medium" variant="outlined" sx={{ mt: 2 }}>
        {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
