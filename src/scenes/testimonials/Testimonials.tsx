import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import TestimonialsPerson1 from "./TestimonialsPerson1";
import TestimonialsPerson2 from "./TestimonialsPerson2";
import TestimonialsPerson3 from "./TestimonialsPerson3";
import TestimonialsHeadings from "./TestimonialsHeadings";

const Testimonials = () => {
    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Testimonials)} className="pt-32 pb-32">

            {/* HEADING */}
            <TestimonialsHeadings headingInitPos={-50} />

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8">

                <TestimonialsPerson1 />

                <TestimonialsPerson2 />

                <TestimonialsPerson3 />

            </div>
        </section >
    );
};

export default Testimonials;
