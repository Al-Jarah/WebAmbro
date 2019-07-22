import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { UserCard } from 'react-ui-cards'

export default class BasicHosting extends Component {
    render() {
        return (
            <div>
                <UserCard 
                    cardClass="float"
                    name="Basic Hosting"
                >
                    <Button>
                        $29.95/mo plus tax
                    </Button>
                </UserCard>
            </div>
        )
    }
}
