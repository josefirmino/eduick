import styled from 'styled-components'
import { SignInButtonGithub } from '../../Landing/Header/SignInButton/Modal/SignInButtonGithub'

export function GithubLogin(){
  return(
    <Center>
      <SignInButtonGithub/>
    </Center>
  )
}

const Center = styled.div`
  margin: -8px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 99.98vh;
  width: 100.75%;
  overflow-x: hidden;
  background: linear-gradient(180deg, #7A57FD 0%, #6135D7 100%);
  button{
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    background-color: #FFD74F;
    border-radius: 4px;
    border: none;
    box-sizing: border-box;
    padding: 1.4rem 2rem;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 191.68%;
    text-transform: uppercase;
    color: #744FF4;
  }
  label{
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 191.68%;
    color: #FFFFFF;
    margin-bottom: 2rem;
  }
`