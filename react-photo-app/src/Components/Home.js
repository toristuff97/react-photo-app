// Importing all React dependencies and images and components
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'
import climbing from '../assets/climbing.jpg'
import lady from '../assets/lady.jpg'
import cathedral from '../assets/cathedral.jpg'
import brunch from '../assets/brunch.jpg'
import building from '../assets/building.jpg'
import cat from '../assets/cat.jpg'
import couch from '../assets/couch.jpg'
import living from '../assets/living.jpg'
import museum from '../assets/museum.jpg'
import soup from '../assets/soup.jpg'
import sunflowers from '../assets/sunflowers.jpg'
import '../_brand.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Bookmarks from './Bookmarks';

export default class Home extends Component {
    render() {
        // function for liking a photo
        const likeThisPicture = (e) => {
            document.getElementsByClassName(e).innerHTML = '3 Likes'
        }

        return (
            // Router to link to profile pages and bookmarks page
            <Router>
            <div>
                <div className= 'navigation'>
                    <nav class="navbar navbar-expand-lg navbar-custom">
                    <div class="container">
                        <a class="navbar-brand" style={{fontFamily: "Brush Script MT", fontSize: 40, color: "#c8553d"}} href="javascript:;">Memoir</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            {/* Link to Homepage */}
                            <Link to='/' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" href="javascript:;">Home <span class="sr-only">(current)</span></a>
                            </Link>
                            </li>
                            <li class="nav-item">
                            {/* Link to profile1 */}
                            <Link to='/Profile1' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Profile</a>
                            </Link>
                            </li>
                            <li class="nav-item">
                            {/* Link to bookmarks */}
                            <Link to='/Bookmarks' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Bookmarks</a>
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    
                </div>
                {/* Photo feed grid starts here, usernames on photos link to each profile */}
                <div className='feedPhotos'>
                <Container>
                <Row>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={cathedral} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button className="likeButton1" class="material-icons" style={{border: "none", backgroundColor: "white"}} onClick={likeThisPicture("likes")}>favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile1' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>dietmangotea</p>
                            </Link>
                            <p class="caption">The view from up here...</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={lady} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile2' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                            </Link>
                            <p class="caption">New profile pic!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={climbing} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile3' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                            </Link>
                            <p class="caption">I'm already halfway there!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={building} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile3' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                            </Link>
                            <p class="caption">Not too shabby</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={brunch} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile2' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                            </Link>
                            <p class="caption">Brunch with besties</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={couch} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile1' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>dietmangotea</p>
                            </Link>
                            <p class="caption">Almost done decorating the living room!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={cat} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile2' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                            </Link>
                            <p class="caption">My baby :3</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={soup} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile3' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                            </Link>
                            <p class="caption">Call me Chef Lucas B)</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={sunflowers} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile1' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>dietmangotea</p>
                            </Link>
                            <p class="caption">Here comes the sun</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={living} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button> 
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile2' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                            </Link>
                            <p class="caption">Interior goals</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={museum} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                            <p class="likes">2 Likes</p>
                            <Link to='/Profile3' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                            <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                            </Link>
                            <p class="caption">A little dramatic, but I like it.</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <br/>
            {/* Footer at the end of the grid */}
            <div class="footer" style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                <h3 >That's all - for now!</h3>
            </div>
            <br/>
            </div>
            {/* Switch to link to each Component */}
            <Switch>
                <Route exact path='/' Component={Home}/>
                <Route exact path='/Profile1' Component={Profile1}/>
                <Route exact path='/Profile2' Component={Profile2}/>
                <Route exact path='/Profile3' Component={Profile3}/>
                <Route exact path='/Bookmarks' Componen={Bookmarks}/>
            </Switch>
        </div>
        </Router>
        )
    }
}


// React Router Bootstrap Source: https://stackoverflow.com/questions/40919037/react-router-bootstrap-linkcontainer