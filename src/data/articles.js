import { graphql } from "gatsby";

export const articles = (data) => {
  return data.allContentfulArticle.nodes.map((article) => {
    const images = article.images.map((image) => ({ src: image.file.url }));

    return {
      title: article.title,
      category: { name: article.category.name, color: article.category.color },
      images: images,
      description: article.description.description,
    };
  });
};

export const query = graphql`
  fragment ArticleFragment on ContentfulArticle {
    title
    description {
      description
    }
    images {
      fluid(maxWidth: 2000) {
        ...GatsbyContentfulFluid_tracedSVG
      }
      file {
        url
      }
    }
    category {
      color
      name
    }
  }
`;
