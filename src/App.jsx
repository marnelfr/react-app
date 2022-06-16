import { useState } from 'react';
import {Compteur} from './Compteur'

function useToggle(compteurVisible = true) {
  const [visible, toggle] = useState(compteurVisible)
  function toggleVisible() {
    toggle(visible => !visible)
  } 
  return [visible, toggleVisible]
}

function App() {
  const [compteurVisible, toggleCompteur] = useToggle(false)
  return ( 
    <div>
      <label htmlFor="check">
        <input checked={compteurVisible} onChange={toggleCompteur} id="check" type="checkbox" /> Afficher le compteur
      </label>
      {compteurVisible ? <Compteur /> : null}
    </div>
  );
}

export {App};