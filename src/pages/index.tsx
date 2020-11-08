import { graphql } from 'gatsby';
import React from 'react';

import Layout from '@/components/templates/Layout';
import { ContentsQuery } from '@/queries/content';

interface Props {
  data: ContentsQuery;
}

const Home: React.FC<Props> = ({ data }) => (
  <Layout>
    <h4>{`${data.allMarkdownRemark.totalCount} Posts.`}</h4>
    {data.allMarkdownRemark.edges.map(({ node }: any) => (
      <div key={node.id}>
        <p>
          {node.frontmatter.title}
          <span style={{ color: 'gray' }}>{` ${node.frontmatter.date}`}</span>
        </p>
      </div>
    ))}
  </Layout>
);
export default Home;

export const query = graphql`
  query ContentsQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`;
