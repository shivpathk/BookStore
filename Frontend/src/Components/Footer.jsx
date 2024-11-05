
const Footer = () => {
    return (
        <>
            <div className="mt-10">
                <footer className="footer  text-base-content p-10 border-base-300 border-t  dark:bg-slate-900 dark:text-white ">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Career</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer text-base-content border-base-300 border-t py-4  dark:bg-slate-900 dark:text-white flex justify-center">
                    <div>
                        <p>
                        Made with ❤️ by <a href="https://shivpathk-portfolio.netlify.app/" target="_blank"
                        className="cursor-pointer text-pink-500 hover:text-pink-700 font-semibold" 
                        >Shivpathk</a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
