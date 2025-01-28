
import Grid from '@mui/material/Grid2';
 
export default function ContactForm() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
 
  return (
    <form name="contact" onSubmit={handleFormSubmit} >
      <input type="hidden" name="form-name" value="contact" />
                <Grid container spacing={2} style={{padding: '1rem 0'}}>
                    <Grid size={12}>
                    <label htmlFor="user-email" >Your Email</label>
                    </Grid>
                    <Grid size={12}>
                    <input type="email"  id="user-email" name="userEmail" placeholder="Enter your email" required style={{width: '50%'}} className="input"/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{padding: '1rem 0'}}>
                    <Grid size={12}>
                    <label htmlFor="user-message" >Your Message</label>
                    </Grid>
                    <Grid size={12}>
                    <textarea id="user-message" name="userMessage" rows="6" required  style={{width: '100%'}}  className="input" ></textarea>
                    </Grid>
                </Grid>
                <button type="submit" className="submit-button">Submit</button>
            
            </form>
  );
}

