export interface ContentsQuery {
  allMarkdownRemark: {
    totalCount: number;
    edges: Array<{
      node: {
        id: string;
        frontmatter: {
          date: string;
          title: string;
        };
        excerpt: any;
      };
    }>;
  };
}
