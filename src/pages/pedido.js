import React from 'react'
import { Descri, Main, Plan, Pagar, Cancelar } from './styles'
import ilustracao from '../assets/img/ilustracao.svg'
import icon from '../assets/img/icon-music.svg'

export default function ordempedido() {
  return (
    <>
      <Main>
        <img src={ilustracao} />

        <h1>Resumo do Pedido</h1>
        <Descri>
          Agora você pode ouvir milhões de
          <br />
          músicas, audiolivros, e podcasts em
          <br />
          qualquer dispositivo onde você quiser!
        </Descri>
        <Plan>
          <img src={icon} id="nota" />
          <div id="anual">
            <h2>Plano Anual</h2>
            <p id="preco">R$59/ano</p>
          </div>
          <a href="#" id="mudanca">
            Mudança
          </a>
        </Plan>
        <Pagar href="#">
          <div>Realizar Pagamento</div>
        </Pagar>
        <Cancelar href="#" id="cancelar">
          <div>Cancelar Ordem</div>
        </Cancelar>
      </Main>
    </>
  )
}
