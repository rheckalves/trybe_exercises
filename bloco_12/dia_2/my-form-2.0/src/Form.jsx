import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  render() {
    return (
    <form className="form">
        <fieldset>
            <legend>Dados Pessoais:</legend>
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" maxLength="40" required />
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" maxLength="50" required />
            <label for="cpf">CPF:</label>
            <input type="text" name="cpf" id="cpf" maxLength="11" required />
            <label for="address">Endereço:</label>
            <input type="text" name="address" id="address" maxLength="200" required />
            <label for="city">Cidade:</label>
            <input type="text" name="city" id="city" maxLength="28" required />
            <label for="state">Estado:</label>
            <select name="state" id="state" required>
                <option>Selecione um estado</option>
            </select>
        </fieldset>
    </form>
    );
  }
}

export default Form;
