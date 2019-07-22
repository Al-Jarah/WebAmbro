import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { UserCard } from 'react-ui-cards'

export default class MediumHosting extends Component {
    render() {
        return (
            <div>
                <UserCard 
                    cardClass="float"
                    name="Medium Package"
                >
                    <Button>
                        $49.95/mo plus tax
                    </Button>
                </UserCard>
            </div>
        )
    }
}
