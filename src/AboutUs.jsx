

export default function AboutUs(){

    const Mario = './src/assets/mario.jpg';
    const Adrian = './src/assets/mario1.jpg';

    return(
        <div className="aboutus">
            <div className="aboutus-content">
                <h1 className="aboutus-h1">Little Lemon</h1>
                <h2 className="aboutus-h2">Chicago</h2>
                <p className="aboutus-description">Welcome to Little Lemon Restaurant, where culinary passion and heartfelt hospitality come together. Founded by lifelong friends Adrian and Mario, our restaurant is the culmination of their journey from a small village to kitchens around the world. Inspired by traditional recipes and fresh ingredients, they bring you dishes like our vibrant Greek Salad, savory Bruschetta, and exquisite Lemon Dessert. At Little Lemon, every meal is a celebration of life’s simple pleasures and the joy of eating well. Join us and become part of our story, where every bite tells a tale of tradition and innovation.</p>
            </div>
            <div className="aboutus-img">
                <img className="adrian" src={Mario} alt="adrian" />
                <img className='mario' src={Adrian} alt="mario" />
            </div>
        </div>
    )

}
