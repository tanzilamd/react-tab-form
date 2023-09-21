import PropTypes from "prop-types";

const InputField = ({ label, type, name }) => {
    return (
        <div className="md:col-span-5">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                required
            />
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
};

export default InputField;
