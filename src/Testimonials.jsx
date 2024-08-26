import TestimonialCard from "./TestimonialCard"


function Testimonials (){
    
    const sarahImg = './src/assets/Sarah.png';
    const johnImg = './src/assets/John.png';
    const emilyImg = './src/assets/Emily.png';
    const michealImg = './src/assets/Micheal.jpeg';

    return(

        <section className="testimonial">
            <h1 className="testimonial-head">Testimonials</h1>
            <div className="testimonial-cards">
                <TestimonialCard    name='Sarah'
                                    rating='Wonderful Experience!'
                                    review='Little Lemon has such a cozy atmosphere. The Greek Salad was fresh and delicious. Highly recommend!'
                                    picture={sarahImg}/>

                <TestimonialCard    name='John'
                                    rating='Fantastic Place'
                                    review='I had a great time at Little Lemon. The Bruschetta was flavorful and the service was excellent!'
                                    picture={johnImg}/>

                <TestimonialCard    name='Emily'
                                    rating='Loved It so much!'
                                    review='The ambiance at Little Lemon is perfect for a relaxing meal. The Lemon Dessert was amazing and I’ll definitely be back!'
                                    picture={emilyImg}/>

                <TestimonialCard    name='Micheal'
                                    rating='Highly Recommend'
                                    review='Little Lemon offers a delightful dining experience. The Greek Salad and Bruschetta were spot on, and the staff was very friendly!'
                                    picture={michealImg}/>
            </div>
        </section>
    )
}

export default Testimonials