// import React from 'react';
import './../styles/home.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempora deserunt facere. Aperiam reiciendis consequatur sapiente illum? Porro hic labore ipsum minus recusandae nesciunt ipsa rerum at doloribus voluptate. Delectus!
                    Reiciendis nihil sit iure perspiciatis eius voluptatum deserunt cum dolores maxime pariatur, doloremque nesciunt itaque. Corrupti saepe, molestias consectetur omnis dolores, nostrum enim ducimus cum ea similique soluta necessitatibus quas.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus, ex cumque suscipit dolorem vero eveniet repellendus voluptas. Unde ratione debitis nam illo, necessitatibus dolore officiis repudiandae soluta assumenda qui.
                    Nihil, aliquid et. Quod, neque voluptate deserunt aliquam repellendus delectus praesentium eius? Assumenda maxime corporis enim nesciunt iusto, consectetur quasi quidem placeat velit praesentium quaerat dolor! Quos ullam laborum reiciendis?</p>
                </div>
                <div class="testimonios">
                    <h2>Testimonios</h2>
                    <div class="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;