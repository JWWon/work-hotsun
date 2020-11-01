import { graphql } from 'gatsby';
import React from 'react';

const Home: React.FC = ({ data }: any) => (
  <div>
    <h4>{`${data.allMarkdownRemark.totalCount} Posts.`}</h4>
    {data.allMarkdownRemark.edges.map(({ node }: any) => (
      <div key={node.id}>
        <p>
          {node.frontmatter.title}
          <span style={{ color: 'gray' }}>{` ${node.frontmatter.date}`}</span>
        </p>
      </div>
    ))}
  </div>
);
export default Home;

export const query = graphql`
  query {
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
