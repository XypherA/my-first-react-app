import Button from "./Button"
import Cards from "./Cards"
import GreekSalad from "./assets/greek salad.jpg"
import Bruchetta from "./assets/Bruchetta.jpg"
import LemonDessert from "./assets/lemon dessert.jpg"

function Specials(){

    return(
        <div className="special">
            <h1 className="special-headline">Specials <Button name="Online Menu"/></h1>
            <menu className="special-cards">
                <Cards  name="Greek Salad" 
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. " 
                        picture={GreekSalad}/>
                <Cards  name="Bruchetta" 
                        description="Our Bruschetta is made from grilled bread that has been smeared with lovely spices garlic and seasoned with salt and olive oil. " 
                        picture={Bruchetta}/>
                <Cards  name="Lemon Dessert" 
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." 
                        picture={LemonDessert}/>
            </menu>

        </div>
    )
}

export default Specials