import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import ContactImgFlipped from "./ContactImgFlipped";

const ContactFlipped = () => {

    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Contact)} className="contact py-48">

            {/* HEADINGS */}
            <ContactHeading headingInitPos={-500} />

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">

                <ContactForm />
                <ContactImgFlipped />

            </div>

        </section>
    );
};

export default ContactFlipped;
