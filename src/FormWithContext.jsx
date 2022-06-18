import { useCallback } from "react";
import { useContext, useMemo } from "react";
import { createContext, useState } from "react";

const FormContext = createContext({})

function Form({defaultValue, onSubmit, children}) {
  const [data, setData] = useState(defaultValue)

  const changer = useCallback((name, newValue) => {
    setData(data => ({...data, [name]: newValue}))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    onSubmit(data)
  }, [data, onSubmit])

  const value = useMemo(() => {
    return {data, changer}
  }, [data, changer])

  return (
    <FormContext.Provider value={value}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}

function FormField({name, children}) {
  const context = useContext(FormContext)

  const handleChange = useCallback((e) => {
    context.changer(name, e.target.value)
  }, [name, context])

  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="text" name={name} onChange={handleChange} value={context.data[name] || ''} id={name} className="form-control" />
    </div>
  )
}

function PrimaryButton({children}) {
  return <button className="btn btn-primary">{children}</button>
}

function FormWithContext() {

  const handleSubmit = (data) => {
    console.clear()
    console.log(data)
  }

  return ( 
    <div className="container">
      <Form defaultValue={{ name: 'Doe', firstName: 'John' }} onSubmit={handleSubmit}>
        <FormField name="firstName">Prénom</FormField>
        <FormField name="name">Nom</FormField>
        <PrimaryButton>Envoyer</PrimaryButton>
      </Form>
    </div>
  );
}

export default FormWithContext;