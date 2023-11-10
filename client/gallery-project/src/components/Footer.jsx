import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <h2 className="footer-header">We Are X-4</h2>
            <div className="container-item">
            <div className="container-instagram container">
                <a href="https://www.instagram.com/tenfour_smankedo/" className="link-icon"><i className="fa-brands fa-instagram icon"></i><h3 className="p-2 text-instagram">X-4 No Counter</h3></a>
            </div>
            <div className="image">
                <img className="image-footer" src="https://picsum.photos/seed/picsum/600/200" alt="" />
            </div>
            </div>
        </div>
    )
}