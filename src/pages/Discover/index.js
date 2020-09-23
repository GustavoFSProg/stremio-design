import React from 'react'
import { Image } from 'react'
import * as S from './styles'
import Card from '../../components/Card'
import circulo from '../../assets/circulo.jpg'
import { FiPlayCircle } from 'react-icons/fi'
import play from '../../assets/play.png'

const movies = [
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
]

export default function Discover() {
  return (
    <S.Container>
      <S.Navbar>
        <S.Tabs>
          <S.Button>Board</S.Button>
          <S.Button>Discovery</S.Button>
          <S.Button>My Library</S.Button>
          <S.Button>Calendar</S.Button>
        </S.Tabs>
        <S.Box>Caixa pesquisa</S.Box>

        <S.Button>Another Buttons</S.Button>
      </S.Navbar>
      <S.Content>
        <S.MenuColumn>
          <S.SectionContainer>
            <S.Text>Movies</S.Text>
          </S.SectionContainer>

          <S.TextSubTitle>Series </S.TextSubTitle>
          <S.TextSubTitle> Channel </S.TextSubTitle>
          <S.TextSubTitle>Others</S.TextSubTitle>
          <S.TextSubTitle>Top</S.TextSubTitle>
          <S.Component />
          <S.SectionContainer>
            <S.Text>By Year</S.Text>
          </S.SectionContainer>

          <S.TextSubTitle>By Rating </S.TextSubTitle>
          <S.TextSubTitle>Public Domain </S.TextSubTitle>
          <S.Component />
          <S.SectionContainer>
            <S.Text>2020</S.Text>
          </S.SectionContainer>

          <S.TextSubTitle> 2019 </S.TextSubTitle>
          <S.TextSubTitle>2018</S.TextSubTitle>
          <S.TextSubTitle>2017</S.TextSubTitle>
          <S.TextSubTitle>2016</S.TextSubTitle>
          <S.TextSubTitle>2015</S.TextSubTitle>
          <S.TextSubTitle>2014</S.TextSubTitle>
        </S.MenuColumn>
        <S.ListMovies>
          {movies.map((movie) => {
            return <Card image={movie.image} />
          })}
        </S.ListMovies>
        <S.MovieDetail image="https://source.unsplash.com/random">
          <S.Filter>
            <S.TitleContainer>
              <S.Title>AFTER</S.Title>
            </S.TitleContainer>
            <S.TextTitle>
              {' '}
              Drama Romance{' '}
              <div align="right">
                <img
                  src={circulo}
                  alt="Circulo"
                  style={{
                    display: 'flex',
                    marginLeft: '80px',
                    marginTop: '-40px',
                    width: '40%',
                    height: '120%',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </S.TextTitle>

            <S.TextDescription>
              <S.Year> YEAR </S.Year>
              <S.Desc>2005</S.Desc>{' '}
            </S.TextDescription>
            <S.TextDescription>
              {' '}
              <S.Year>DIRECTOR </S.Year> <S.Desc>F. Copola</S.Desc>
            </S.TextDescription>

            <S.TextDescColumn>
              {' '}
              <S.LeaderActors>LEAD ACTORS </S.LeaderActors>{' '}
              <S.DescLeadActors>
                F. Copola, Mike Portnoi , Anita Davis, Travis Jaao
              </S.DescLeadActors>
            </S.TextDescColumn>

            <S.TextDescColumn>
              {' '}
              <S.LeaderActors>SUMARY </S.LeaderActors>{' '}
              <S.DescLeadActors>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but Lorem Ipsum.
              </S.DescLeadActors>
            </S.TextDescColumn>
            <S.SpaceImagem>
              <img
                src={play}
                alt="play"
                style={{
                  width: '26%',
                  height: '96%',
                  paddingRight: '26px',
                }}
              />
              <img
                src={play}
                alt="play"
                style={{
                  width: '26%',
                  height: '96%',
                  paddingRight: '26px',
                }}
              />
              <img
                src={play}
                alt="play"
                style={{
                  width: '26%',
                  height: '96%',
                }}
              />
            </S.SpaceImagem>
          </S.Filter>
        </S.MovieDetail>
      </S.Content>
    </S.Container>
  )
}
