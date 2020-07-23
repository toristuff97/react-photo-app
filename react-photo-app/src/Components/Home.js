import React, { Component } from 'react';
import reactstrap from 'reactstrap';
import climbing from '../assets/climbing.jpg'
import lady from '../assets/lady.jpg'
import cathedral from '../assets/cathedral.jpg'
import '../_brand.scss';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className= 'navigation'>
                    <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href="javascript:;">Photos</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                            <a class="nav-link" href="javascript:;">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="javascript:;">Profile</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="javascript:;">Bookmarks</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className='feedPhotos'>
                <div class="card" style={{width: '30vw'}}>
                    <img class="card-img-top" src={cathedral} rel="nofollow" alt="Card image cap"/>
                    <div class="card-body">
                        <p class="username">dietmangotea</p>
                        <p class="caption">Was here yesterday, pretty cool!</p>
                        <button type="button" class="btn btn-link">2 Comments</button>
                        <p class="likes">2 Likes</p>
                        <button type="button" class="btn btn-link">Bookmark</button>
                    </div>
                </div>
                <div class="card" style={{width: '30vw'}}>
                    <img class="card-img-top" src={lady} rel="nofollow" alt="Card image cap"/>
                    <div class="card-body">
                        <p class="username">fizzamy</p>
                        <p class="caption">Was here yesterday, pretty cool!</p>
                        <button type="button" class="btn btn-link">2 Comments</button>
                        <p class="likes">2 Likes</p>
                        <button type="button" class="btn btn-link">Bookmark</button>
                    </div>
                </div>
                <div class="card" style={{width: '30vw'}}>
                    <img class="card-img-top" src={climbing} rel="nofollow" alt="Card image cap"/>
                    <div class="card-body">
                        <p class="username">lucasicterine</p>
                        <p class="caption">Was here yesterday, pretty cool!</p>
                        <button type="button" class="btn btn-link">2 Comments</button>
                        <p class="likes">2 Likes</p>
                        <button type="button" class="btn btn-link">Bookmark</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
