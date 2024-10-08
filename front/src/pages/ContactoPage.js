// import React from 'react';
import './../styles/contacto.css';

const ContactoPage = (props) => {
    return (
        <main class="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones">
                    <input type="submit" value="Enviar" />
                </p>
            </form>
        </div>
        <div class="datos">
            <h2>Otras vías de comunicación</h2>
            <p>también puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 43242388</li>
                <li>Email: contacto@transportex.com.ar</li>
                <li>Facebook:</li>
                <li>Twitter:</li>
                <li>Skype:</li>
            </ul>
        </div>
    </main>
    );
};

export default ContactoPage;