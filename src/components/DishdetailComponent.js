import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component{

    componentDidMount(){
        console.log("Dishdetail Component componentDidMount invoked");
    }

    componentDidUpdate(){
        console.log("Dishdetail Component componentDidUpdate invoked");
    }

    // render dish function
    renderDish(dish){
        if(dish == null){
            return(<div></div>);
        }
        return(
            <Card>
                 <CardImg width="100%" src={dish.image} alt={dish.name}/>
                 <CardBody>
                     <CardTitle><h5>{dish.name}</h5></CardTitle>
                     <CardText>{dish.description}</CardText>
                 </CardBody>
             </Card>
        );
    }

    // render comments function
    renderComments(comments){
        if(comments == null){
            return(<div></div>);
        }
        const showcmnts = comments.map((cmnt) => {
            return(
                <div key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>--{cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(cmnt.date))}
                    </p>
                </div>
            );
        });

        return (
            <div className='row p-3'>
                {showcmnts}
            </div>
        );
    }

    render(){
        console.log("Dishdetail Component render invoked");

        const dish = this.props.dish;
        if(dish == null){
            return(<div></div>);
        }
        const dishItem = this.renderDish(dish);
        const dishComments = this.renderComments(dish.comments);
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dishItem}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4> Comments </h4>
                        {dishComments}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;