import React, { useState } from 'react'
import { Card, Form, Input, Button } from 'semantic-ui-react'

export default function Conversor({ moedaOrigem, moedaDestino }) {
    const [loading, setLoading] = useState(false);
    const [valor, setValor] = useState(0);
    const [cotacao, setCotacao] = useState(0);

    const mudarValor = function (e, { value }) {
        setValor(value);
    };

    const convert = async function () {
        setLoading(true);
        const url = `http://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`

        const response = await fetch(url);
        const result = await response.json();

        console.log(result.USDBRL.ask);
        
        setLoading(false);
        setCotacao(result.USDBRL.ask);
        setCotacao(parseFloat(result.USDBRL.ask))

        
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header>Conversor de Moeda</Card.Header>
                <Card.Meta>Cotação Atual: {cotacao.toFixed(2)}</Card.Meta>
                <Card.Description>
                    <Form>
                        <Form.Field>
                            <label>{moedaOrigem}:</label>
                            <Input type="text" placeholder="Valor" onChange={mudarValor} value={valor}></Input>
                        </Form.Field>

                        <Form.Field>
                            <label>{moedaDestino}:</label>
                            <label>{(valor * cotacao).toFixed(2)}</label>
                        </Form.Field>
                    </Form>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button
                    color="green"
                    fluid
                    loading={loading}
                    disabled={loading}
                    onClick={convert}
                >
                    Converter
                </Button>
            </Card.Content>
        </Card>
    );
}