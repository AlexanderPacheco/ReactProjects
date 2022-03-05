import React from 'react'
import './Styles/Card.css'
//import imgTest from '../images/test.png'

class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            image: 'https://depor.com/resizer/6E3vzAnErqpRkyO59T0zKmHb5-Q=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/C3L5EFFJ2NA6JJDZLYTKCZVYWI.jpg'
        }
    }

    componentDidMount(){
        //Renderiza la imagen despues de 5 segundos al hacer reload
        setTimeout(() => {
            this.setState({
                image: 'https://vivirdeingresospasivos.net/wp-content/uploads/2016/07/11111111111.png'
            })
        }, 5000)
    }

    render(){
        const {title, description, img, leftColor, rigthColor } = this.props

        // Estilos de clases de css para react
        // className='card'
        return (

            <div 
                className='card mx-auto Fitness-Card'
            >
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img width='150px' height='100px' src = { img } className="float-right" />
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>{ title }</h1>
                            <p>{ description }</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card