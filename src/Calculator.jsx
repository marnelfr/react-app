import { useCallback } from "react"
import { useState } from "react"

const scales = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 
}

function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32
}

function tryConvert(temperature, convertor) {
  temperature = Number.parseFloat(temperature)
  if(Number.isNaN(temperature)) {
    return ''
  }
  return convertor(temperature)
}

function BoilingVerdict({celsius}) {
  if(celsius<100) {
    return <div className="alert alert-success">L'eau ne bout pas</div>
  }
  return <div className="alert alert-danger">L'eau bout</div>
}

function TemperatureInput({scale, value, onChange}) {
  const handleChange = useCallback((e) => {
    onChange(e.target.value)
  }, [])

  return <div className="form-group">
    <label htmlFor={'scale' + scale}>Temperature (en {scales[scale]})</label>
    <input type="text" id={'scale' + scale} onChange={handleChange} value={value} className="form-control" />
  </div>
}

function Calculator() {
  const [temperature, setTemperature] = useState(0)

  const handleCelsiusChange = useCallback((celsius) => {
    celsius = parseFloat(celsius)
    if(Number.isNaN(celsius)) {
      setTemperature('')
    } else {
      setTemperature(celsius)
    }
  }, [])
  const handleFahrenheitChange = useCallback((fahrenheit) => {
    const celsius = tryConvert(fahrenheit, toCelsius)
    setTemperature(celsius)
  }, [])

  const fahrenheit = tryConvert(temperature, toFahrenheit)

  return <div className="container mt-3">
    <TemperatureInput scale="c" onChange={handleCelsiusChange} value={temperature} />
    <TemperatureInput scale="f" onChange={handleFahrenheitChange} value={fahrenheit} />
    <BoilingVerdict celsius={temperature} />
  </div>;
}

export {Calculator};