import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component{
    // constructor
    constructor(props){
        super(props);
    }

    // render dish function
    renderDish(dish){
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
    renderComments(dish){
        const comments = dish.comments.map((comment) => {
            return(
                <p>
                    {comment.comment} 
                    <br/><br/>
                    -- {comment.author}, 
                    {comment.date}
                </p>
            );
        });

        if(comments != null)
            return(
                <div className="row p-3">
                    {comments}
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render(){
        if(this.props.selectedDish == null){
            return(
                <div></div>
            );
        }
        else{
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            );
        }
    }
}

export default DishDetail;