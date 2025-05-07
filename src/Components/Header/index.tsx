import { useState } from 'react';
import ExpertienceGrid from '../expertise';

const Header = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const menuItems = ['Sobre_mim', 'Projetos', 'Contato'];

    return (
        <header id="top" className="topbar">
            <div className="container mt-3">
                <div className="row align-items-center text-center text-md-start">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-md-0">
                            <h1 className="fw-bold fs-3">Marcos Aquino</h1>
                            <p className="fst-italic text-secondary">&lt; Desenvolvedor Web /&gt;</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <ul className="nav justify-content-center justify-content-md-end">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="nav-item">
                                        <a
                                            className={`nav-link text-uppercase fw-semibold ${selectedItem === index ? 'text-info' : 'text'}`}
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setSelectedItem(index)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {item.replace('_', ' ')}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1 className="display-5 fw-medium fs-2">
                            Sou um desenvolvedor web <span className="text-info">PHP</span>, <span className="text-info">React</span> e
                            <span className="text-info">TypeScript</span>.
                        </h1>
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex justify-content-end">
                            <ExpertienceGrid />
                        </div>
                    </div>

                    {/* <div className="col-md-3">
                        <div className="text-center">
                            <a className="btn btn-info btn-lg mt-4" href="#projetos">
                                Ver Projetos
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
