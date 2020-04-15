import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components';

export const LandingPageTemplate = ({ title, description }) => (
    <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
);

LandingPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const LandingPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <LandingPageTemplate
                title={frontmatter.title}
                description={frontmatter.description}
            />
        </Layout>
    );
};

LandingPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }),
        }),
    }),
};

export default LandingPage;

export const pageQuery = graphql`
    query LandingPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
            frontmatter {
                title
                description
            }
        }
    }
`;
