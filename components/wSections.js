import {Box, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink, Image, Text, HStack} from '@chakra-ui/react';

export function WHeader() {

    return (
    <Box bg='#071C42' w='100%' p={2} color='white'>
        <Breadcrumb fontWeight='medium' fontSize='sm' fontFamily={"Poppins, sans-serif"} >
            
            
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>
                    <HStack>
                        <Image src='logo.jpg' alt='logo' boxSize='50px' />
                        <Text fontSize="2xl" fontWeight={"bold"}>Discoveri</Text>
                    </HStack>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/about'>About us</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/competitions'>Search competitions</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/my-profile'>Your Profile</BreadcrumbLink>
            </BreadcrumbItem>
            
        </Breadcrumb>
    </Box>
    )
}
export function WFooter() {

    return (<h1 className="text-4xl">Discoveri</h1>)
}