import * as actionTypes from "store/actions/actionTypes";

export const writeMechsData = (data) => {
    return {
        type: actionTypes.WRITE_MECHS_DATA,
        data,
    };
};
