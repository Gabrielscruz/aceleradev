import styles from '../styles/components/suggestion.module.css';
import { useState } from "react";
import api from '../service/api';

export function Suggestion() {
  const [Background, SetBackground] = useState('#2aa9e0')
  const [Acionado, SetAcionado] = useState(false)
  const Sendemail = () => {
    let suggestion = document.getElementById('send').value;
    if (suggestion === '') {
      alert('Por favor Insira alguma informação')
    } else {
      SetBackground('#4cd62b')
      let ip = 'nao tem funcao'
      let data = { ip, suggestion }
      api.post('sugestao', data);
      SetAcionado(true)

    }

  }
  return (
    <div className={styles.container}>
      <div className={styles.suggestionleft}>
        <h3>A sua sugestão é muito importante para nós #vamosprogramarjuntos</h3>
      </div>
      <div className={styles.suggestion}>
        <input id='send' type="text" placeholder=" Diga para nós a sua sugestão de conteudo..." />
        <button disabled={Acionado === true} style={{ 'background': `${Background}` }} onClick={Sendemail}><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  )
}