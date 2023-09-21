import PropTypes from "prop-types";

const Region = () => {
    return (
        <div className="md:col-span-2">
            <label htmlFor="region">Region</label>

            <select
                name="region"
                id="region"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Barisal">Barisal</option>
                <option value="Others">Others</option>
            </select>
        </div>
    );
};

Region.proptypes = {
    name: PropTypes.string,
    role: PropTypes.string,
};

export default Region;
