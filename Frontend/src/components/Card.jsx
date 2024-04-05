/* eslint-disable react/prop-types */
import './Card.css';
import AIR from '../assets/logoAIR.png'

function Card({ data }) {

    return (
        <section className="card-section">
            <div className='card'>
                    <img className='image-Murasaki' src={`http://localhost:4000${data.Picture}`} alt="" />
                <div className='infos-card'>    
                    <h1 className='title-card'>{data.Name}</h1>
                    <p className='price-card'>{data.Price}€</p>
                </div>
                <div className='Name-Shoes-div'>
                    <p className='Name-Shoes'>{data.NameShoes}</p>
                </div>
                    <div className='card-bottom'>
                        <img className='image-AIR' src={AIR} alt="" />
                        <button className='btn-card'>Acheter</button>
                    </div>
                    
            </div>
        </section>
    )
}

export default Card;
