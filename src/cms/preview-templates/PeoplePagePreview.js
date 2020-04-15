import React from 'react';
import PropTypes from 'prop-types';
import { PeoplePageTemplate } from '../../templates/people-page';

const PeoplePagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    return <PeoplePageTemplate title={data.title} />;
};

PeoplePagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default PeoplePagePreview;
