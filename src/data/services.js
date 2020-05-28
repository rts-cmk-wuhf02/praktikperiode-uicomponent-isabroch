import { graphql } from "gatsby";

export const services = (data) => {
  return data.allContentfulService.nodes.map((service) => {
    return {
      id: service.id,
      name: service.name,
      color: service.color,
      icon: service.icon.file.url,
      description: service.description.description,
    };
  });
};

export const query = graphql`
  fragment ServiceFragment on ContentfulService {
    color
    icon {
      file {
        url
      }
    }
    id
    name
    description {
      description
    }
  }
`;
