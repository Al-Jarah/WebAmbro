import React, { Component } from 'react';
import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Chase from './Founders/Chase';
import Elijah from './Founders/Elijah';
import James from './Founders/James';
import Mahad from'./Founders/Mahad';
import Rao from './Founders/Rao';

const SidebarStyle = {
    width: '15vw',
    backgroundColor: 'gray',
    height: '70vh',
    overFlow: 'visible',
    marginLeft: '5vw',
    marginTop: '2px'
}

const ListStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

export default class Sidebar extends Component {
    render() {
        return (
            <div style={SidebarStyle}>
                <Router>
                    <div>
                        <h2>Categories</h2>
                        <ul style={ListStyle}>
                            <li>
                                <Link to="/Chase"><Button>Chase</Button></Link>
                            </li>
                            <li>
                                <Link to="/Elijah"><Button>Elijah</Button></Link>
                            </li>
                            <li>
                                <Link to="/James"><Button>James</Button></Link>
                            </li>
                            <li>
                                <Link to="/Mahad"><Button>Mahad</Button></Link>
                            </li>
                            <li>
                                <Link to="/Rao"><Button>Rao</Button></Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/Chase" component={Chase} />
                            <Route path="/Elijah" component={Elijah} />
                            <Route path="/James" component={James} />
                            <Route path="/Mahad" component={Mahad} />
                            <Route path="/Rao" component={Rao} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
