
function Footer(){
    
    const FooterLogo = './src/assets/Footerlogo.jpg'

    return(
    <footer className="footer">
        <img src={FooterLogo} alt="little lemon" className="footer-logo" />
        <div className="footer-column">
            <h3 className="footer-tittle">Doormat navigation</h3>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">MENU</a></li>
                <li><a href="">RESERVATION</a></li>
                <li><a href="">ORDER ONLINE</a></li>
                <li><a href="">LOGIN</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3 className="footer-tittle">Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
        <div className="footer-column">
            <h3 className="footer-tittle">Social Media Links</h3>
            <ul>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Tiktok</a></li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer