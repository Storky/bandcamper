import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Truncate from "react-truncate";
import Tooltip from '@material-ui/core/Tooltip';

const TruncateStringWithTip = ({ children, width }) => {
    const [showTip, changeTipVisibility] = useState(false);

    const component = (
        <Truncate
            lines={1}
            width={width}
            onTruncate={isTruncated => changeTipVisibility(isTruncated)}
        >
            {children}
        </Truncate>
    );

    return showTip ? (
        <Tooltip title={children}>
            {component}
        </Tooltip>
    ) : component;
};

TruncateStringWithTip.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
};
TruncateStringWithTip.defaultProps = {
    width: 0,
};

export default TruncateStringWithTip;
