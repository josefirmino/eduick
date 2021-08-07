import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { getPrismicClient } from '../../services/prismic'
import { useSession } from 'next-auth/client'
import { RichText } from 'prismic-dom'
import Link from 'next/link'

import GlobalStyleDashboard from '../../styles/dashboard-global'

// Components
import Head from 'next/head'
import { DashboardMenu } from '../../components/Dashboard/Header'
import { GithubLogin } from '../../components/Dashboard/Login'

import styled from 'styled-components'
import { StarRating } from '../../components/Dashboard/Content/StarRating'

type Post = {
  slug: string,
  image: {
    url: string,
  }
  title: string,
  excerpt: string,
}

interface PostsProps {
  posts: Post[]
}

export default function Courses({ posts} : PostsProps){
  const [session] = useSession()

  return session ? (
    <>
      <GlobalStyleDashboard/>
      <Head>
        <title>Dashboard | Eduick</title>
      </Head>
      
      <DashboardMenu />

      <Background>
        <Container>
          <HeroBanner>
            <img src="/images/hero-detail.svg" alt="" />
            <Text>
              <h1>
                <span>Hello </span>
                Student<strong>.</strong>
              </h1>
              <p>
                Whether you are a student trying to find your ideal private language teachers/tutors
              </p>
            </Text>
            <img src="/images/hero-peoples.svg" alt="" />
          </HeroBanner>
        </Container>
        <Container>
          <ListBlog>

          { posts.map(post => (
            <Link href={`/courses/${post.slug}`}>
              <a>
                <div key={post.slug} className="post">
                  <div className="card">
                    <div className="image">
                      <img src={post.image.url} alt="" />
                    </div>
                    <div className="info">
                      <StarRating />
                      <div className="lessons">
                        <p>10 lessons</p>
                      </div>
                    </div>
                    <h2>
                      {post.title}
                    </h2>
                  </div>
                </div>
              </a>
           </Link>
          ))}
           
          </ListBlog>
          <img src="/images/dots-slide.svg" alt="" />
        </Container>
      </Background>
      <Footer>
        <p>Copyright © 2020 <strong>Eduick.</strong> <span>Todos os direitos reservados.</span></p>
      </Footer>

    </>
  ) : (
    <GithubLogin/>
  )
}

//Consumindo API do PRISMIC
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.image','post.title', 'post.content'],
    pageSize: 6,
  })
   const posts = response.results.map(post => {
     return {
      slug: post.uid,
      image: post.data.image,
      title: RichText.asText(post.data.title),
      // Se o post não tiver nenhum conteúdo do tipo "paragraph", retorna uma string vazia.
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
    }
  })

  return{
    props: {posts}
  }
}


const Background = styled.div`  
  width: 100%;
  background-color: #F1F5F7;
  padding-top: 3rem;
  padding-bottom: 7.5rem;
  padding: 2.4rem;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  margin:0 auto;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  &:first-child{
    margin:7rem auto 0 auto;
  }
  &:last-child{
    height: 60vh;
    background: transparent;
    margin-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
  }
  > img{
    margin-top: 3.8rem;
  }
`
const HeroBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 90.6rem;
  height: 23.5rem;
  > img{
    &:first-child{
      position: absolute !important;
      left: -15.6rem;
      top: 3.4rem;
    }
    &:last-child{
      width: 100%;
      max-width: 33.2rem;
      height: 18.2rem;
      margin-top: 3.4rem;
    }
  }
  @media(max-width: 991px) {
    width: 100%;
    padding: 0 2rem;
    > img {
      &:first-child{
        width: 5%;
        top: -1rem;
        left: -1rem;
      }
    }
  }
  @media (max-width: 480px){
    > img{
      &:first-child{
        width: 23%;
        left: 19rem;
        top: -1rem;
      }
      &:last-child{
        display: none;
      }
    }
  }
`
const Text = styled.div`
  margin-top: 4.2rem;
  h1{
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2.1rem;
    line-height: 160%;
    color: #200E64;
    strong{
      color: #FFD74F;
      font-size: 2.1rem;
    }
    span{
      font-size: 2.1rem;
      font-weight: normal;
    }
  }
  p{
    margin-top: 2.5rem;
    width: 100%;
    max-width: 52.1rem;
    font-size: 14px;
    line-height: 160%;
    color: #343434;
  }
`
const ListBlog = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2.6%;
  grid-row-gap: 30px;
  .post{
    .card{
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: #fff;
      padding: 1.2rem 1.2rem 2.7rem 1.2rem;
      border-radius: 4px;
      .image{
        img{
          width: 100%;
        }
      }
      h2{
        margin-top: 1.6rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 160%;
        color: #200E64;
      }
    }
    .info{
      display: flex;
      justify-content: space-between;
      margin-top: 1.4rem;
      .lessons{
        background: rgba(207, 201, 233, 0.4);
        border-radius: 4px;
        padding: .8rem 1.3rem;
        p{
          font-weight: 600;
          font-size: 1rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #000000;
          opacity: 0.8;
        }
      }
    }
  }
  @media(max-width: 991px){
    .info{
      > img{
        width: 50%;
      }
    }
  }
  @media (max-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px){
    grid-template-columns: 1fr;
  }
`
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 2;
  height: 6rem;
  padding: 2.1rem 0 1.7rem 0;
  background-color: #fff;
  p{
    text-align: center;
  }

  @media (max-width: 480px){
    span{
      display: none;
    }
  }
`