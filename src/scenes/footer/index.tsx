import Logo from "@/assets/textLogo.png";

function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus
            esse atque dolorum sed temporibus vitae nesciunt aspernatur, ad
            animi voluptates aut quia facilis quod.
          </p>
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
          <p>+1(914)815-5526</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;