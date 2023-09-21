import axios from "axios";
import Gender from "../InputField/Gender/Gender";
import InputField from "../InputField/InputField";
import Category from "../InputField/Category/Category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Region from "../InputField/Region/Region";

const messageFormSubmittion = () => toast.success("Yayy!! Form Submitted.");

const FormFields = () => {
    const member1BasicInfo = [
        [
            {
                label: "Name",
                type: "text",
                name: "name1",
            },
            {
                label: "Email",
                type: "email",
                name: "email1",
            },
            {
                label: "Contact Number",
                type: "number",
                name: "number1",
            },
        ],
        [
            {
                label: "Name",
                type: "text",
                name: "name2",
            },
            {
                label: "Email",
                type: "email",
                name: "email2",
            },
            {
                label: "Contact Number",
                type: "number",
                name: "number2",
            },
        ],
        [
            {
                label: "Name",
                type: "text",
                name: "name3",
            },
            {
                label: "Email",
                type: "email",
                name: "email3",
            },
            {
                label: "Contact Number",
                type: "number",
                name: "number3",
            },
        ],
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Team_Name: e.target.team_name.value,
            Full_Name_of_Institution: e.target.institution_full_name.value,
            Code_Name: e.target.code_name.value,
            Team_Category: e.target.team_category.value,
            Region: e.target.region.value,
            Name1: e.target.name1.value,
            Email1: e.target.email1.value,
            Number1: e.target.number1.value,
            Gender1: e.target.gender1.value,
            Category1: e.target.category1.value,
            Name2: e.target.name2.value,
            Email2: e.target.email2.value,
            Number2: e.target.number2.value,
            Gender2: e.target.gender2.value,
            Category2: e.target.category2.value,
            Name3: e.target.name3.value,
            Email3: e.target.email3.value,
            Number3: e.target.number3.value,
            Gender3: e.target.gender3.value,
            Category3: e.target.category3.value,
        };

        axios
            .post(
                "https://sheet.best/api/sheets/ec25cc92-4747-4d1b-8e2d-8196d03861af",
                data
            )
            .then((response) => {
                console.log(response);
                messageFormSubmittion();
            });

        // console.log(name1, email1, number1, gender1, category1);
    };

    return (
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            <ToastContainer></ToastContainer>

            <div>
                <h2 className="text-2xl font-bold mb-4">Team Information</h2>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <InputField
                        label="Team Name"
                        type="text"
                        name="team_name"
                    ></InputField>

                    <InputField
                        label="Full Name of Institution"
                        type="text"
                        name="institution_full_name"
                    ></InputField>

                    <InputField
                        label="Short Name of Club (as you want on tab)"
                        type="text"
                        name="code_name"
                    ></InputField>
                </div>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-2">
                    <Category name={"team_category"} role={"Team"}></Category>
                    <Region></Region>
                </div>
            </div>

            {/* Member 1 */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Member 1</h2>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {member1BasicInfo[0].map((element, idx) => (
                        <InputField
                            key={idx}
                            label={element.label}
                            type={element.type}
                            name={element.name}
                        ></InputField>
                    ))}
                </div>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-2">
                    <Gender name={"gender1"}></Gender>
                    <Category name={"category1"} role={"Speaker"}></Category>
                </div>
            </div>

            {/* Member 2 */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Member 2</h2>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {member1BasicInfo[1].map((element, idx) => (
                        <InputField
                            key={idx}
                            label={element.label}
                            type={element.type}
                            name={element.name}
                        ></InputField>
                    ))}
                </div>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-2">
                    <Gender name={"gender2"}></Gender>
                    <Category name={"category2"} role={"Speaker"}></Category>
                </div>
            </div>

            {/* Member 3 */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Member 3</h2>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {member1BasicInfo[2].map((element, idx) => (
                        <InputField
                            key={idx}
                            label={element.label}
                            type={element.type}
                            name={element.name}
                        ></InputField>
                    ))}
                </div>

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-2">
                    <Gender name={"gender3"}></Gender>
                    <Category name={"category3"} role={"Speaker"}></Category>
                </div>
            </div>

            <input
                type="submit"
                value="Submit"
                className="py-2 px-4 rounded-md bg-slate-400 text-md font-bold text-white"
            />
        </form>
    );
};

export default FormFields;
