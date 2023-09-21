import PropTypes from "prop-types";

const SpeakerCategory = ({ name, role }) => {
    return (
        <div className="md:col-span-2">
            <label htmlFor={name}>{role} Category</label>

            <select
                name={name}
                id={name}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                required
            >
                <option value="Open">Open</option>
                <option value="Novice">Novice</option>
            </select>
        </div>
    );
};

SpeakerCategory.proptypes = {
    name: PropTypes.string,
    role: PropTypes.string,
};

export default SpeakerCategory;
