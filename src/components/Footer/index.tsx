import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sca@wongames.com">sca@wongames.com</a>
        <a href="mailto:sca@wongames.com">+55 123456789</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="#" target="_blank">
            Instagram
          </a>
          <a href="#" target="_blank">
            Twitter
          </a>
          <a href="#" target="_blank">
            Youtube
          </a>
          <a href="#" target="_blank">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>

        <span>Rua 7 de Maio</span>
        <span>527 - 23456789</span>
        <span>Rio Grande do Norte, Brasil</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
