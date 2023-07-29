import {Box, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink, Image} from '@chakra-ui/react';

export function WHeader() {

    return (
    <Box bg='#071C42' w='100%' p={2} color='white'>
        <Breadcrumb fontWeight='medium' fontSize='sm'>
            <Image src='/logo.png' alt='logo' boxSize='24px' />
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/aboutus'>About us</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/competitions'>Search competitions</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_components'>Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_usecases'>Use Cases</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_databases'>Databases</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
    )
}
export function WFooter() {

    return (<h1 className="text-4xl">Footer</h1>)
}