import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray50.value || 'red'
        }}>
            <Link href='/'>
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                    alt="pokemon icon"
                    width={70}
                    height={70}
                />
            </Link>

            <NextLink href='/' passHref>
                <Link>
                    <Text color='white' h2>Pokemon</Text>
                </Link>
            </NextLink>


            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref>
                <Link>
                    <Text color='white' h3>Favorites</Text>
                </Link>
            </NextLink>
        </div>
    )
}