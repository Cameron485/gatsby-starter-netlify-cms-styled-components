import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components';

export const PeoplePageTemplate = () => (
    <div className="container">
        <h1>People Page</h1>
        <p>People</p>
    </div>
);

const PeoplePage = ({ data }) => {
    const { edges: people } = data.allMarkdownRemark;

    return (
        <Layout>
            <PeoplePageTemplate
                title={people.title}
                description={people.description}
            />
        </Layout>
    );
};

PeoplePage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    description: PropTypes.number.isRequired,
                })
            ).isRequired,
        }).isRequired,
    }),
};

export default PeoplePage;

export const pageQuery = graphql`
    query PeoplePage {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "people-page" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
