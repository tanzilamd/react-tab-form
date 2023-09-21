import PropTypes from "prop-types";

const Gender = ({ name }) => {
    return (
        <div className="md:col-span-2">
            <label htmlFor={name}>Gender</label>

            <select
                name={name}
                id={name}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                required
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select>
        </div>
    );
};

Gender.proptypes = {
    name: PropTypes.string,
};

export default Gender;
