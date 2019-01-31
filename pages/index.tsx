import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/Layout';
import { LoginComponent } from '../generated/apolloComponents';
import { loginMutation } from '../graphql/user/mutations/login';
const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p><Link href='/about'><a>About</a></Link></p>
      <LoginComponent mutation={loginMutation}>{(mutate ) =><button onClick={ async() => {
        const response = await mutate({
          variables:{email: "test@test.gmail.com", password:"password"}
        })
        console.log(response)
      }}>login</button>}</LoginComponent>
    </Layout>
  )
}

export default IndexPage;
