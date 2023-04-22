import React from 'react'
import { Card, Form, Input, Button } from 'semantic-ui-react'

export default function Conversor({moedaOrigem, moedaDestino}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Conversor de Moeda</Card.Header>
                <Card.Meta>Cotação Atual:</Card.Meta>
                <Card.Description>
                    <Form>
                        <Form.Field>
                            <label>{moedaOrigem}:</label>
                            <Input type="text" placeholder="Valor"></Input>
                        </Form.Field>
                        
                        <Form.Field>
                            <label>{moedaDestino}:</label>
                            <Input type="text" placeholder="Valor"></Input>
                        </Form.Field>
                    </Form>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button color="green" fluid>Converter</Button>
            </Card.Content>
        </Card>
    );
}