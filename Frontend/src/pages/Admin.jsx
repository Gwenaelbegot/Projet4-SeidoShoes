import { useState } from 'react';
import axios from "axios";
import NavBar from '../components/NavBar';
import './Admin.css'

function Admin() {
    const [formData, setFormData] = useState({
        Name: '',
        Price: '',
        NameShoes: '',
        Picture: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Je vérif si price est = a une valeur numérique
        if (formData.Price === '' || isNaN(formData.Price)) {
          console.error('Le prix doit être un nombre valide.');
          return;
        }
      
        axios.post("http://localhost:4000/api/advert", formData)
        .then(res => {
          console.log('Données envoyées avec succès !');
          // Je refresh les inputs après submit
          setFormData({
            Name: '',
            Price: '',
            NameShoes: '',
            Picture: ''
          });
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi des données :', error);
        });
      };
      
    return (
        <>
            <NavBar />
            <section className='form-section'>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Name">Marque</label>
                            <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleInputChange} required placeholder='Air force one' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Price">Prix</label>
                            <input type="text" id="Price" name="Price" value={formData.Price} onChange={handleInputChange} required placeholder='200€' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="NameShoes">Nom</label>
                            <input type="text" id="NameShoes" name="NameShoes" value={formData.NameShoes} onChange={handleInputChange} required placeholder='Murasaki' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Picture">Lien image chaussure</label>
                            <input type="text" id="Picture" name="Picture" value={formData.Picture} onChange={handleInputChange} required placeholder='/static/img-Nike-204523.png' />
                        </div>
                        <button className="form-submit-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Admin;
