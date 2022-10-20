import { GetServerSideProps, NextPage } from 'next'
import { FaDochub, FaBook } from 'react-icons/fa'
import styles from '~/styles/Home.module.css'
import HashIcon from '../svgs/hash-icon.svg'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/Layout'
import Graph from '~/components/widget'
type IndexPageServerSideProps = {
  meta: {
    title: string
  }
}

const IndexPage: NextPage<NextAppPageProps> = ({ meta }) => {
  return (
    <Graph></Graph>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<IndexPageServerSideProps> =
  async () => {
    return {
      props: {
        meta: {
          title: 'Next.js Starter Kit',
        },
      },
    }
  }
