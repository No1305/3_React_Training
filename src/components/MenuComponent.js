import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = { selectedDish: null }
        console.log('Menu component constructor is invoked');
    }

    componentDidMount(){
        console.log('Menu component componentDidMount is invoked');
    }

    onDishSelected(dish){
        this.setState({selectedDish:dish});
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });

        console.log('Menu component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;