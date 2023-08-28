import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import ContactImg from "./ContactImg";

const Contact = () => {

    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Contact)} className="contact py-48">

            {/* HEADINGS */}
            <ContactHeading headingInitPos={50} />

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">

                <ContactImg />
                <ContactForm />

            </div>
        </section>
    );
};

export default Contact;
