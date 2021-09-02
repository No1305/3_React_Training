import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';

// render dish function
function RenderDish({dish}){
    if(dish == null){
        return(<div></div>);
    }
    return(
        <Card>
            <CardImg top width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle><h5>{dish.name}</h5></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

// render comments function
function RenderComments({comments}){
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

function DishDetail(props){
    const dish = props.dish;
    if(dish != null){
        return(
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4> Comments </h4>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default DishDetail;