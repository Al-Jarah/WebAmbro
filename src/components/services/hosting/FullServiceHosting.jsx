import React, { Component } from 'react'
import { UserCard } from 'react-ui-cards'
import { Button } from 'react-bootstrap'

export default class FullServiceHosting extends Component {
    render() {
        return (
            <div>
                <UserCard
                    cardClass="float"
                    name="Full Service Hosting"
                >
                    <Button>
                        $74.99/mo plus tax
                    </Button>
                </UserCard>
            </div>
        )
    }
}
