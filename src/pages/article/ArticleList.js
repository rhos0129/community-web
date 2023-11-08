import React from 'react'
import Layout from 'components/layout/Layout'
import { useParams } from 'react-router';


const ArticleList = () => {

  const params = useParams();


  return (
    <Layout>
      ArticleList - {params.title}
    </Layout>
  )
}

export default ArticleList