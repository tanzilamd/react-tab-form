import FormFields from "../FormFields/FormFields";
import FormMessage from "../FormMessage/FormMessage";

const FullForm = () => {
    return (
        <div className="container mx-auto grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-16">
            <FormMessage></FormMessage>
            <FormFields></FormFields>
        </div>
    );
};

export default FullForm;
