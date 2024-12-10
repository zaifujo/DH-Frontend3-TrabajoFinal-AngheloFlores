import Layout from "../../components/layout/Layout";
import { useForm } from "../../hooks/useForm";
import styles from "./Contact.module.css";
import Fondo from "../../assets/fondo_contact.jpg";
import { validateEmail, validateSubject, validateText } from "../../utils/validator";
import { useState } from "react";
import FormContact from "../../components/formContact/FormContact";

function Contact() {

  const { data, handleChange, resetForm } = useForm({
    name: "", 
    email: "", 
    subject: "", 
    message: "",
  });

  const [errors, setErrors] = useState({
		name: null,
		email: null,
    subject: null,
    message: null,
	});

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let errorsCustom = {
			name: !validateText(data.name),
			email: !validateEmail(data.email),
      subject: !validateSubject(data.subject),
      message: !validateText(data.message),
    };

    setErrors(errorsCustom);

    if (Object.values(errorsCustom).some(error => error)) {
      return;
    }

    console.log(data); // "enviado"
    resetForm();
  };

  return (
    <Layout>
      <main className={styles.ContactMain}>
        <section>
          <div>
            <h1>¿Concederé tu deseo?</h1>
            <FormContact 
              data={data}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}/>
          </div>
          <img 
            src={Fondo} 
            alt="fondo contact" 
            width={290} height={50} 
            />
        </section>
      </main>
    </Layout>
  )
}

export default Contact;