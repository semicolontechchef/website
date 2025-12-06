import { useTranslation } from "react-i18next";
import { socialMedia } from "../../constants/social-media";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="pt-10 md:pt-[80px] absolute bottom-0 w-full md:w-[120%] left-0 md:left-[-10%] z-20 pb-16 -mb-10 md:-pb-0"
      style={{
        backgroundImage: `url("${
          import.meta.env.BASE_URL
        }img/layout/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute inset-0 bg-[#964B00] bg-opacity-20"></div> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-8 md:pt-[80px] w-full">
          <div className="flex flex-col sm:flex-row items-center lg:items-start w-full gap-6 lg:gap-8">
            {/* Left - Phone Icon */}
            <img
              src={`${import.meta.env.BASE_URL}img/layout/footer-icon.png`}
              alt="footer-icon"
              className="h-auto max-w-[150px] md:max-w-[200px] w-auto mx-auto md:mx-0"
            />

            {/* Center Left - Logo and Social Media */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src={`${import.meta.env.BASE_URL}logo/logo-black.svg`}
                alt="logo-black"
                className="h-auto w-full mx-auto md:mx-0"
              />
              <div className="flex gap-4 mt-4">
                {socialMedia.map((item) => {
                  const IconComponent = {
                    facebook: FaFacebook,
                    x: FaXTwitter,
                    instagram: FaInstagram,
                    linkedin: FaLinkedin,
                    youtube: FaYoutube,
                    tiktok: FaTiktok,
                  }[item.icon.toLowerCase()];

                  return (
                    <a
                      href={item.url}
                      key={item.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#1a2b4a] transition-colors h-10 w-10 bg-white rounded-full flex items-center justify-center"
                      aria-label={item.name}
                    >
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:items-start w-full gap-6 lg:gap-8">
            {/* Center Right - Contact Information */}
            <div className="flex flex-col items-center md:items-start border-t-0 border-s-2 border-black pt-4 md:pt-0 ps-4 font-montserrat text-black mb-2 text-lg  md:text-3xl">
              <h3 className=" uppercase">{t("footer.contact-us")}</h3>
              <a
                href="https://maps.app.goo.gl/z3D1W1kJLwX3Y9w66"
                className=" hover:text-[#1a2b4a] transition-colors"
              >
                {t("footer.ramallah")}
              </a>
              <a
                href="mailto:info@semicolon.media"
                className=" hover:text-[#1a2b4a] transition-colors break-all"
              >
                {t("footer.email")}
              </a>
              <a
                href="tel:+970599505059"
                className=" hover:text-[#1a2b4a] transition-colors"
              >
                {t("footer.phone")}
              </a>
            </div>

            {/* Right - Navigation */}
            <div className="flex flex-col items-center gap-2 md:items-start font-bold border-t-0 border-s-4 border-black pt-4 md:pt-0 ps-4 font-montserrat text-black mb-2 text-lg  md:text-3xl">
              <a href="/" className="hover:text-[#1a2b4a] transition-colors">
                {t("footer.home")}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}about`}
                className="hover:text-[#1a2b4a] transition-colors"
              >
                {t("footer.about")}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}work`}
                className="hover:text-[#1a2b4a] transition-colors"
              >
                {t("footer.work")}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}contact`}
                className="hover:text-[#1a2b4a] transition-colors"
              >
                {t("footer.contact")}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-4 md:pt-8">
          <p className="font-montserrat text-black text-xs sm:text-sm md:text-lg lg:text-xl font-bold">
            © {t("footer.copyright")}{" "}
          </p>
          <img
            src={`${import.meta.env.BASE_URL}logo/logo-black.svg`}
            alt="logo-black"
            className="h-auto max-w-[150px] md:max-w-[200px] w-auto mx-auto md:mx-0"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
