import { useState } from "react";
import { Container, Content } from "./styles";
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <Container>
      <Content>
        <h1>Jhow Finance</h1>
        <button type="button" onClick={handleOpenModal}>
          Nova transação
        </button>
        <NewTransactionModal 
          isOpen={openModal}
          onRequestClose={handleCloseModal}
        />
      </Content>
    </Container>
  );
}