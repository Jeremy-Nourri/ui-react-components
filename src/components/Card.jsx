import PropTypes from 'prop-types';

const Card = ({ title, description, image, alt }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 sm:max-w-md md:max-w-lg lg:max-w-xl">
            <img className="w-full h-64 object-cover" src={image} alt={alt} />
            <div className="px-8 py-6">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">{title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">{description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
}

export default Card;