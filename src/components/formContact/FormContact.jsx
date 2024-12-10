import styles from "./FormContact.module.css";

function FormContact({ data, errors, handleChange, handleSubmit }) {

  return (
    <form 
      className={styles.ContactForm}
      onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input 
          type="text" 
          role="name"
          name="name" 
          id="name" 
          value={data.name} 
          onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          data-testid="email"
          name="email" 
          id="email" 
          value={data.email} 
          onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="subject">Asunto</label>
        <select 
          name="subject" 
          id="subject" 
          value={data.subject} 
          onChange={handleChange}>
          <option value="" disabled required>Selecciona una opción</option>
          <option value="general" >Consulta General</option>
          <option value="support">Soporte Técnico</option>
          <option value="feedback">Comentarios</option>
          <option value="other">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea 
          name="message" 
          id="message" 
          rows="4"
          role="message"
          value={data.message} 
          onChange={handleChange}></textarea>
      </div>
      <button type="submit">
        ENVIAR
      </button>
      {Object.values(errors).some(error => error)? (
        <p>Campos inválidos</p>
      ) : (
        Object.values(errors).some(error => error === false) &&
        <p>Enviado con éxito</p>
      )}
    </form>
  )
}

export default FormContact;