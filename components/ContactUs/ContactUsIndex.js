import Footer from "../Footer/Footer";
import LetUs from "../Industries/LetUs/LetUs";
import Navbar from "../Navbar/Navbar";
import CheckOut from "./CheckOut/CheckOut";
import ContactBanner from "./ContactBanner/ContactBanner";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactItem from "./ContactItem/ContactItem";

const ContactUsIndex = () => {
    return (
        <div className="bg-white">
            <div>
                <Navbar/>
            </div>
            <div>
                <ContactBanner/>
            </div>
            <div>
                <ContactItem/>
            </div>
            <div>
                <CheckOut/>
            </div>
            <div>
                <ContactInfo/>
            </div>
            <div>
                <LetUs/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default ContactUsIndex;