import React, { Component } from 'react'

export default class TheTeam extends Component {
    render() {
        return (
            <div>
                <div className="about-sub-conainer">
                    <UserCard float name="Chase Heavner" className="creator-card" />
                    <UserCard name="Elijah Brown" float className="creator-card" />
                    <UserCard name="James Hunt" float className="creator-card" />
                </div>                
            </div>
        )
    }
}
