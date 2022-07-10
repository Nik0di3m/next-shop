import {
    Container,
    Card,
    Row,
    Input,
    Grid,
    Button,
    Text,
} from '@nextui-org/react'
import React, { useState } from 'react'

interface LoginData {
    login: string
    password: string
}

const LoginForm = () => {
    const [userData, setUserData] = useState<LoginData>({
        login: '',
        password: '',
    })

    return (
        <Container
            display="flex"
            justify="center"
            alignItems="center"
            css={{ h: '100vh' }}>
            <Card variant="bordered" css={{ mw: '400px' }}>
                <Card.Header>
                    <Container>
                        <Row>
                            <Text>NextShop CMS</Text>
                        </Row>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Input
                            width="100%"
                            color="primary"
                            placeholder="Login"
                            bordered
                            aria-label="Login"
                            shadow
                            css={{ mb: '$10' }}
                            onChange={(e) =>
                                setUserData((prev) => ({
                                    ...prev,
                                    login: e.target.value,
                                }))
                            }
                        />
                        <Input.Password
                            width="100%"
                            color="primary"
                            placeholder="Password"
                            aria-label="Password"
                            bordered
                            shadow
                            onChange={(e) =>
                                setUserData((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />
                        <Grid.Container
                            justify="space-between"
                            css={{ px: '0', mt: '$10' }}>
                            <Grid>
                                <Button flat color="warning" auto>
                                    Wróć
                                </Button>
                            </Grid>
                            <Grid>
                                <Button
                                    onClick={() =>
                                        console.log(userData)
                                    }
                                    flat
                                    color="success"
                                    auto>
                                    Zaloguj
                                </Button>
                            </Grid>
                        </Grid.Container>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default LoginForm
