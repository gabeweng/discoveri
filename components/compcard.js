import { Card, CardHeader, CardBody, CardFooter, Flex, Heading, Text, Image, Button} from '@chakra-ui/react'

import { BiLike, BiChat, BiShare} from '@chakra-ui/icons';

export default function(props) {
    return (
    <Card maxW='md'>
        <Image
            objectFit='cover'
            src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Chakra UI'
        />
        <CardHeader>
            <Flex spacing='4'>
            <Heading size='md'>{props.info.name}</Heading>
            </Flex>
        </CardHeader>
        <CardBody>
            <Text>
            {props.info.description}
            </Text>
        </CardBody>
    
        <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
            '& > button': {
                minW: '136px',
            },
            }}
        >
            <Button flex='1' variant='ghost' >
            Like
            </Button>
            <Button flex='1' variant='ghost' >
            Comment
            </Button>
            <Button flex='1' variant='ghost' >
            Share
            </Button>
        </CardFooter>
    </Card>
        
    );
}

