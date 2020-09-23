import styled from 'styled-components'
import { darken, backgroundImages } from 'polished'

export const Container = styled.div`
  display: flex;
  background: #201f32;
  flex-direction: column;
`

export const Navbar = styled.div`
  display: flex;
  background: #3a497d;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`

export const Content = styled.div`
  display: flex;
  /* max-width: 100vw; */
  width: auto;
`

export const MenuColumn = styled.div`
  display: flex;
  background: #202946;
  flex-direction: column;
  width: 175px;
  max-width: 175px;
  min-width: 175px;
  padding: 13px;
`

export const ListMovies = styled.div`
  display: flex;
  /* background: orange; */
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  max-height: calc(100vh - 40px);
  overflow-y: scroll;
`

export const MovieDetail = styled.div`
  display: flex;
  /* background: green; */
  flex-direction: column;
  width: 150px;
  max-width: 400px;
  min-width: 350px;
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1rem;
`

export const Filter = styled.div`
  display: flex;
  flex: 1;
  /* background: ${darken(0.5, '#ffff')}; */
  background: black;
  opacity: 0.8;
  flex-direction: column;
`

export const Tabs = styled.div`
  display: flex;
`

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #400080;
  height: 40px;
  width: 100%;
`

export const Button = styled.div`
  display: flex;
  padding: 0.5rem;
`

export const Text = styled.div`
  display: flex;
  padding: 0.8rem;
  flex-direction: column;
`

export const TextSubTitle = styled.div`
  display: flex;
  padding: 0.6rem;
  flex-direction: column;
  width: 120px;
`

export const TextDescription = styled.div`
  display: flex;
  padding: 0.6rem;
  flex-direction: row;
  width: 350px;
  padding-bottom: 40px;
`

export const TextDescColumn = styled.div`
  display: flex;
  padding: 0.6rem;
  flex-direction: column;
  width: 350px;
  padding-bottom: 40px;
`

export const TitleContainer = styled.div`
  display: flex;
  padding: 0.6rem;
  flex-direction: row;
  width: 250px;
  /* padding-bottom: 40px; */
`

export const Component = styled.div`
  height: 30px;
`

export const Title = styled.div`
  font-size: 30px;
  color: #b3b300;
  max-height: 40px;
`

export const Year = styled.div`
  font-size: 16px;
  color: #b3b300;
  width: 120px;
  padding-right: 0px;
`

export const LeaderActors = styled.div`
  font-size: 16px;
  color: #b3b300;
  padding-right: 30px;
  width: 280px;
`

export const Desc = styled.div`
  font-size: 16px;
  color: white;
  padding-left: 20px;
`

export const DescLeadActors = styled.div`
  font-size: 16px;
  color: white;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const TextTitle = styled.div`
  /* font-size: 20px; */
  color: white;
  padding-left: 15px;
  padding-bottom: 40px;
`

export const SpaceImagem = styled.div`
  padding-top: 145px;
  padding-left: 10px;
`
export const TextLegend = styled.div`
  color: green;
`
