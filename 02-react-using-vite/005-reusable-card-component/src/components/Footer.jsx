const Footer = () => {
    return (
        <footer className="flex gap-10 flex-wrap justify-around border-2 rounded-2xl bg-slate-700 p-10 font-bold text-amber-200">
            <ul className="w-1/5">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact US</a></li>
            </ul>
            <ul className="w-1/5">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">X</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
            <ul className="w-1/5">
                <li><a href="#">Youtube Channel</a></li>
                <li><a href="#">Recommeded Resources</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
            
            <div className="flex flex-col flex-wrap gap-5 w-1/5 justify-items-center">
                <p className="w-25 h-25 justify-self-center">Marlon Peña &copy; 2025</p>
                <a href="#" className="w-25 h-25 justify-self-center">
                    React
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react js icon" className="" />
                </a>
                <a href="#" className="w-25 h-25 justify-self-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="node js icon" className="" />
                </a>
                <a href="#" className="w-25 h-25 justify-self-center">
                    <img src="https://user-images.githubusercontent.com/46530103/149555472-2e2ed369-9011-496e-9fe5-69facdf534e8.png" alt="Express js icon" className="" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;