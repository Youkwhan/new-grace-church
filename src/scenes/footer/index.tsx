import Logo from "/logo.svg";
import GoogleMap from "@/shared/GoogleMap";

function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex items-center justify-start gap-2">
            <img src={Logo} alt="Church logo" className="w-9 " />
            <span className="whitespace-no-wrap font-montserrat text-2xl font-bold tracking-wider md:text-xl">
              새은혜교회
            </span>
          </div>
          <GoogleMap />
          <p>© 새은혜교회 All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="https://www.youtube.com/@hongsonkim7470">
            <p className="my-5">Youtube</p>
          </a>
          <a href="https://maps.app.goo.gl/SAuzeET7YKDRo5cn8">
            <p className="my-5">Google Maps</p>
          </a>
          <a>
            <p>Zoom Link</p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Newgracecommchurch@gmail.com</p>
          <p className="my-5">hongsonkim415@gmail.com</p>
          <p>+1(914) 815-5526</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
