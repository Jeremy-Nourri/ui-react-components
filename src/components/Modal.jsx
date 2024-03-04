import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl sm:max-w-lg sm:w-full">
                    <div className="px-8 py-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 sm:text-xl md:text-2xl lg:text-3xl" id="modal-title">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl">
                            {children}
                        </p>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 flex justify-end">
                        <button 
                            type="button" 
                            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-2
                            py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-blue-600 text-base font-medium text-white
                          hover:bg-blue-700 sm:text-xs md:text-sm lg:text-base transition-colors duration-300" 
                            onClick={onClose}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.node
};

export default Modal;
