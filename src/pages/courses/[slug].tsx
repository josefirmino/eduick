import { GetServerSideProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'

import GlobalStyleDashboard from '../../styles/dashboard-global'
import styled from 'styled-components'
import Head from 'next/head'

import { DashboardMenu } from '../../components/Dashboard/Header'

import { getSession, useSession } from 'next-auth/client'

interface PostsProps {
  post: {
    slug: string;
    image:{
      url: string;
    }
    title: string;
    content: string;
    vide:{
      embed_url: string;
    }
  }
}

export default function SingleCourse({ post }: PostsProps) {
  const [session] = useSession()

  return session ? (
    <>
    
    <GlobalStyleDashboard/>
    <Head>
      <title>{post.title} | Eduick</title>
    </Head>

    <DashboardMenu />
    <br/>
    <br/>
    <br/>
    <br/>
    <main>
      <article>
        <Container>
        <h1>{post.title}</h1>
        <img src={post.image.url} alt="" />
        <Blog dangerouslySetInnerHTML={{__html: post.content}} />
        </Container>
      </article>
    </main>

    </>

  ) : null
}

//Consumindo API do PRISMIC
export const getServerSideProps: GetServerSideProps = async ({ req, params}) => {
  const session = await getSession({ req })
  const { slug } = params

  const prismic = getPrismicClient( req )

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    image: response.data.image,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
  }

  return{
    props: {post}
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1140px;
  margin:0 auto;
  justify-content: center;
  h1{
    font-family: 'Poppins', sans-serif;
    margin-bottom: 2rem;
    font-size: 4.6rem;
    max-width: 850px;
  }
  >img {
    margin-bottom: 2rem;
  }
`
const Blog = styled.div`
`